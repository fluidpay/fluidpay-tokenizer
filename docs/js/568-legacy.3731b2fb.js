"use strict";(self["webpackChunkfluidpay_tokenizer"]=self["webpackChunkfluidpay_tokenizer"]||[]).push([[568],{568:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var i=t(6252),r=t(3577),s={class:"main home"},a=(0,i._)("pre",null,[(0,i.Uk)("      "),(0,i._)("code",{class:"language-javascript"},"\n        // Example Code\n        var example = new Tokenizer({\n          apikey: 'key here',\n          container: document.querySelector('#div container'),\n          submission: (resp) => {\n            console.log(resp)\n          },\n          settings: {\n            processorId: '', // optional\n            payment: {\n              types: ['card', 'ach', 'plaid', 'stripe'], // Default ['card']\n              ach: {\n                sec_code: 'web', // Default web - web, ccd, ppd, tel\n                secCodeList: ['web', 'ppd', 'ccd', 'tel'],\n                showSecCode: false, // Whether or not to show sec code field\n\n                // If payment is ach set specific billing fields to required\n                billing_required: {\n                  address: true,\n                  city: true,\n                  state: true,\n                  zip: true,\n                  country: true,\n                }\n              },\n              card: {\n                strict_mode: false, // Set to true to allow for 19 digit cards\n                requireCVV: false,\n\n                // If payment is card set specific billing fields to required\n                billing_required: {\n                  address: true,\n                  city: true,\n                  state: true,\n                  zip: true,\n                  country: true,\n                }\n              }\n            }\n          }\n        })\n      "),(0,i.Uk)("\n    ")],-1),c={class:"section example"},o={ref:"example"};function l(e,n,t,l,u,d){return(0,i.wg)(),(0,i.iD)("div",s,[a,(0,i._)("div",c,[(0,i._)("div",o,null,512),(0,i._)("button",{onClick:n[0]||(n[0]=function(n){return e.example.submit()})}," Pay "),(0,i._)("pre",null,(0,r.zw)(e.exampleResponse),1)])])}var u=t(5401),d=t(507),p=(0,i.aZ)({name:"Payments",data:function(){return{example:null,exampleResponse:""}},mounted:function(){var e=this;this.example=new u.Z({apikey:d.K,container:this.$refs.example,submission:function(n){e.exampleResponse=n},settings:{payment:{showTitle:!0,types:["card","ach","plaid","stripe"],ach:{showSecCode:!0,verifyAccountRouting:!0},card:{strict_mode:!1,requireCVV:!0}}}})}}),f=t(3744);const m=(0,f.Z)(p,[["render",l]]);var h=m}}]);
//# sourceMappingURL=568-legacy.3731b2fb.js.map