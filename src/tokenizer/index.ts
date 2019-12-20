export interface Settings {
  [key: string]: any
}

export interface Constructor {
  url?: string
  apikey: string
  container: HTMLDivElement
  paymentTypes?: string[]
  onLoad?: () => void
  onPaymentChange?: (type: string) => void
  validCard?: (valid: boolean) => void
  submission: (response: any) => void
  settings?: {[key: string]: any}
}

export interface Message {
  id?: string
  event: string
  data: {[key: string]: any}
}

const url = '{{formUrl}}'
const localDevUrl: string = 'http://localhost:8082'
const pathUrl: string = '/api/tokenizer'

export default class Tokenizer {
  public id: string
  public apikey: string
  public url: string
  public iframe: HTMLIFrameElement
  public container: HTMLDivElement
  public settings: Settings = { id: '', apikey: '' }

  constructor (info: Constructor) {
    this.validate(info)

    // Make sure apikey is set
    if (!info.apikey) { throw new Error('apikey must be set!') }
    this.apikey = info.apikey

    // Set url
    this.url = info.url || url // Use constructor url passed, or default url var
    if (!info.url && window.location.href.indexOf('localhost') !== -1) {
      this.url = localDevUrl.replace(/\/$/, '') + pathUrl
    } else {
      this.url = this.url.replace(/\/$/, '') + pathUrl
    }

    // Add apikey to url
    this.url += '/' + this.apikey

    // Set container
    let el: HTMLDivElement
    if (typeof info.container === 'string') {
      el = document.querySelector(info.container) as any as HTMLDivElement
    } else {
      el = info.container
    }
    this.container = el

    // Set values
    this.id = this.uuid()
    if (typeof info.settings === 'object') { this.settings = info.settings }

    // Set callbacks
    if (info.onLoad) { this.onLoad = info.onLoad }
    if (info.validCard) { this.validCard = info.validCard }
    if (info.onPaymentChange) { this.onPaymentChange = info.onPaymentChange }
    if (info.submission) { this.submission = info.submission }

    window.addEventListener('message', (e: any) => { this.messageListener(e) })

    this.iframe = this.buildIframe()
    this.iframe.onload = () => {
      // Send settings to iframe
      this.settings.id = this.id
      this.settings.apikey = this.apikey
      this.setSettings(this.settings)
      this.onLoad() // Call on load
    }

    // Add iframe
    this.container.appendChild(this.iframe)
  }

  // Only here because it used originally here from the begining
  // DO NOT REMOVE, some clients still call create even though it doesnt do anything anymore.
  public create () { }

  public validate (info: Constructor) {
    let el: HTMLDivElement
    if (typeof info.container === 'string') {
      el = document.querySelector(info.container) as any as HTMLDivElement
    } else {
      el = info.container
    }
    if (!el) { throw new Error('Could not find container') }
  }

  public isSurchargeable (state: string, bin: {card_type: string}): boolean {
    const blacklist = ['CA', 'CO', 'CT', 'KS', 'ME', 'MA', 'OK']
    if (state === '') { return false }
    if (blacklist.indexOf(state.toUpperCase()) !== -1) { return false }
    if (!bin || !bin.card_type || bin.card_type.toLowerCase() !== 'credit') { return false }
    return true
  }

  // Post message to iframe
  public submit () {
    this.postMessage({
      event: 'submit',
      data: {}
    })
  }

  // Pass exp date to be set inside form
  public setExpDate (expDate: string) {
    this.postMessage({
      event: 'setExpDate',
      data: { value: expDate }
    })
  }

  // Communicate back to child
  public postMessage (msg: Message): void {
    const w = this.iframe.contentWindow
    if (w !== null) {
      const data = JSON.stringify(msg)
      w.postMessage(data, '*')
    }
  }

  public onLoad: () => void = () => {}
  public validCard: (card: any) => void = () => {}
  public onPaymentChange: (type: string) => void = () => {}
  public submission: (response: any) => void = () => {}

  private uuid (): string {
    function s4 () {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
  }

  private buildIframe (): HTMLIFrameElement {
    const iframe = document.createElement('iframe')
    iframe.src = this.url

    // Style
    iframe.style.display = 'block'
    iframe.style.border = 'none'
    iframe.style.margin = '0px'
    iframe.style.padding = '0px'
    iframe.style.width = '1px'
    iframe.style.minWidth = '100%'
    iframe.style.height = '30px'
    iframe.style.overflow = 'hidden'
    iframe.style.backgroundColor = 'transparent'
    iframe.style.transition = 'all .3s ease-out'

    // Attributes
    iframe.frameBorder = '0'

    return iframe
  }

  private setSettings (settings: Settings) {
    this.postMessage({
      event: 'setSettings',
      data: settings
    })
  }

  private updateHeight (height: string) {
    if (height) {
      this.iframe.style.height = height + 'px'
    }
  }

  private messageListener (e: MessageEvent) {
    try {
      const msg: Message = JSON.parse(e.data)
      const id = msg.id
      if (this.id !== id) { return } // Validate messages are communicating on the same id
      const event = msg.event
      const data = msg.data
      if (!event) { return }

      switch (event) {
        case 'submission':
          this.submission(data)
          break
        case 'validCard':
          this.validCard(data)
          break
        case 'onPaymentChange':
          this.onPaymentChange(data.type)
          break
        case 'setHeight':
          this.updateHeight(data.height)
          break
      }
    } catch (e) {

    }
  }
}
