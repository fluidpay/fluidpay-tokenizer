import '@/docs/assets/scss/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Prism from 'prismjs'
import Normalizer from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'

new Normalizer({
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': true,
  'right-trim': true
})


const app = createApp(App)
app.use(router)
app.mixin({
  updated () {
    Prism.highlightAll()
  }
})
app.mount('#app')
