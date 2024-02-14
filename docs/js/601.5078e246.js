"use strict";(self["webpackChunkfluidpay_tokenizer"]=self["webpackChunkfluidpay_tokenizer"]||[]).push([[601],{507:function(t,e,n){n.d(e,{K:function(){return i}});const i="pub_0wUsHIlrkK1I6ADno5MfT10UjhR"},430:function(t,e,n){function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function s(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var s=n.call(t,e||"default");if("object"!==i(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function a(t){var e=s(t,"string");return"symbol"===i(e)?e:String(e)}function r(t,e,n){return e=a(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return l}});const o="{{formUrl}}",u="http://localhost:8082",h="/api/tokenizer";class l{constructor(t){if(r(this,"id",void 0),r(this,"apikey",void 0),r(this,"url",void 0),r(this,"amount",void 0),r(this,"iframe",void 0),r(this,"container",null),r(this,"settings",{id:"",apikey:"",amount:""}),r(this,"onLoad",(()=>{})),r(this,"validCard",(()=>{})),r(this,"achOnChange",(()=>{})),r(this,"magStripeSwipe",(()=>{})),r(this,"onPaymentChange",(()=>{})),r(this,"submission",(()=>{})),r(this,"errorPass",(()=>{})),!t.apikey)throw new Error("apikey must be set!");this.apikey=t.apikey,this.url=t.url&&""!==t.url?t.url:o,t.url||-1===window.location.href.indexOf("localhost")?this.url=this.url.replace(/\/$/,"")+h:this.url=u.replace(/\/$/,"")+h,this.url+="/"+this.apikey,t.amount&&(this.amount=t.amount),this.id=this.uuid(),"object"===typeof t.settings&&(this.settings=t.settings),t.onLoad&&(this.onLoad=t.onLoad),t.validCard&&(this.validCard=t.validCard),t.achOnChange&&(this.achOnChange=t.achOnChange),t.magStripeSwipe&&(this.magStripeSwipe=t.magStripeSwipe),t.onPaymentChange&&(this.onPaymentChange=t.onPaymentChange),t.submission&&(this.submission=t.submission),window.addEventListener("message",(t=>{this.messageListener(t)})),this.iframe=this.buildIframe(),this.waitForContainer(t.container,(t=>{if(!t)throw new Error("Could not find container");this.iframe.onload=()=>{this.settings.id=this.id,this.settings.apikey=this.apikey,this.settings.amount=this.amount,this.setSettings(this.settings),this.onLoad()},this.container=t,this.container.appendChild(this.iframe)}))}create(){}isSurchargeable(t,e){const n=["CO","CT","ME","MA"];return""!==t&&(-1===n.indexOf(t.toUpperCase())&&!(!e||!e.card_type||"credit"!==e.card_type.toLowerCase()))}submit(t){this.getGuardianData().then((t=>{t.events?.length&&this.postMessage({event:"setGuardian",data:t})})).then((()=>{this.postMessage({event:"submit",data:{amount:t}})})).catch((()=>{this.postMessage({event:"submit",data:{amount:t}})}))}setExpDate(t){this.postMessage({event:"setExpDate",data:{value:t}})}setError(t){this.postMessage({event:"setError",data:{input:t}})}postMessage(t){const e=this.iframe.contentWindow;if(null!==e){const n=JSON.stringify(t);e.postMessage(n,"*")}}uuid(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}waitForContainer(t,e){if(!t)return void e(null);const n=Date.now(),i=1e3,s=1e4;(function a(){"string"!==typeof t||null===document.querySelector(t)?"string"!==typeof t&&t?e(t):setTimeout((()=>{s&&Date.now()-n>s?e(null):a()}),i):e(document.querySelector(t))})()}buildIframe(){const t=document.createElement("iframe");return t.src=this.url,t.setAttribute("allow","payment"),t.style.display="block",t.style.border="none",t.style.margin="0px",t.style.padding="0px",t.style.width="1px",t.style.minWidth="100%",t.style.height="30px",t.style.overflow="hidden",t.style.backgroundColor="transparent",t.style.transition="all .3s ease-out",t.frameBorder="0",t}setSettings(t){this.postMessage({event:"setSettings",data:t})}updateHeight(t){t&&(this.iframe.style.height=t+"px")}getGuardianData(){const t=window.Guardian;return t&&t.getData&&"function"===typeof t.getData?t.getData():Promise.reject()}messageListener(t){try{const e=JSON.parse(t.data),n=e.id;if(this.id!==n)return;const i=e.event,s=e.data;if(!i)return;switch(i){case"submission":this.submission(s);break;case"validCard":this.validCard(s);break;case"achOnChange":this.achOnChange(s);break;case"magStripeSwipe":this.magStripeSwipe(s);break;case"onPaymentChange":this.onPaymentChange(s.type);break;case"setHeight":this.updateHeight(s.height);break}}catch(t){}}}},601:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var i=n(252),s=n(577);const a={class:"threeds"},r=(0,i._)("pre",null,[(0,i.Uk)("      "),(0,i._)("code",{class:"language-javascript"},"\n        // Tokenizer\n        var tokenizer = new Tokenizer({\n          // url: Optional - used only when the domain does not match\n          apikey: \"api_12345\",\n          settings: {\n            payment: {\n              types: ['stripe'],\n              stripe: {\n                // https://stripe.com/docs/stripe-js/appearance-api\n                appearance: {\n                  theme: 'night',\n                  variables: {},\n                  rules: {}\n                }\n              }\n            }\n          },\n          container: document.querySelector(\".tokenizer-container\"),\n          submission: (response) => {\n            // set the response\n            state.response = response\n          }\n        })\n\n        // Submit\n        var submit = function() {\n          // submit off to the tokenizer with the dollar amount\n          tokenizer.submit()\n        }\n      "),(0,i.Uk)("\n    ")],-1),o={class:"playground example"},u={ref:"example",class:"payment"};function h(t,e,n,h,l,p){return(0,i.wg)(),(0,i.iD)("div",a,[r,(0,i._)("div",o,[(0,i._)("div",u,null,512),(0,i._)("button",{id:"submit",type:"button",class:"button",onClick:e[0]||(e[0]=e=>t.submit())}," Checkout "),(0,i._)("pre",null,(0,s.zw)(t.response),1)])])}var l=n(430),p=n(507),c=(0,i.aZ)({name:"Stripe",data(){return{example:{},response:null}},mounted(){this.example=new l.Z({apikey:p.K,container:this.$refs.example,settings:{payment:{types:["stripe"],stripe:{appearance:{theme:"night",variables:{},rules:{}}}}},submission:t=>{this.response=t}})},methods:{submit(){this.example.submit()}}}),d=n(744);const m=(0,d.Z)(c,[["render",h]]);var g=m}}]);
//# sourceMappingURL=601.5078e246.js.map