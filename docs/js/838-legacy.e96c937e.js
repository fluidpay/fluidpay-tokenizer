"use strict";(self["webpackChunkfluidpay_tokenizer"]=self["webpackChunkfluidpay_tokenizer"]||[]).push([[838],{5838:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var a=t(6252),s=t(3577),o={class:"main home"},r=(0,a._)("pre",null,[(0,a.Uk)("      "),(0,a._)("code",{class:"language-javascript"},"\n        // Example Code\n        var example = new Tokenizer({\n          apikey: 'key here',\n          container: document.querySelector('#div container'),\n          submission: (resp) => {\n            console.log(resp)\n          },\n          settings: {\n            processorId: '', // optional\n            payment: {\n              types: ['card', 'ach', 'plaid', 'stripe'], // Default ['card']\n              ach: {\n                sec_code: 'web', // Default web - web, ccd, ppd, tel\n                secCodeList: ['web', 'ppd', 'ccd', 'tel'],\n                showSecCode: false // Whether or not to show sec code field\n              },\n              card: {\n                strict_mode: false, // Set to true to allow for 19 digit cards\n                requireCVV: false\n              }\n            }\n          }\n        })\n      "),(0,a.Uk)("\n    ")],-1),i={class:"section example"},c={ref:"example"};function l(e,n,t,l,p,d){return(0,a.wg)(),(0,a.iD)("div",o,[r,(0,a._)("div",i,[(0,a._)("div",c,null,512),(0,a._)("button",{onClick:n[0]||(n[0]=function(n){return e.example.submit()})}," Pay "),(0,a._)("pre",null,(0,s.zw)(e.exampleResponse),1)])])}var p=t(3340),d=t(507),u=(0,a.aZ)({name:"Payments",data:function(){return{example:null,exampleResponse:""}},mounted:function(){var e=this;this.example=new p.Z({apikey:d.K,container:this.$refs.example,onPaymentChange:function(e){},submission:function(n){e.exampleResponse=n},settings:{payment:{showTitle:!0,types:["card","ach","plaid","stripe"],ach:{showSecCode:!0},card:{strict_mode:!1,requireCVV:!0}}}})}}),m=t(3744);const f=(0,m.Z)(u,[["render",l]]);var h=f}}]);
//# sourceMappingURL=838-legacy.e96c937e.js.map