"use strict";(self["webpackChunkfluidpay_tokenizer"]=self["webpackChunkfluidpay_tokenizer"]||[]).push([[516],{3516:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var a=t(6252),s=t(3577);const i={class:"main calculatefees"},l=(0,a._)("pre",null,[(0,a.Uk)("      "),(0,a._)("code",{class:"language-javascript"},"\n        // Tokenizer\n        var tokenizer = new Tokenizer({\n          apikey: apikey,\n          amount: 1.00,\n          container: this.$refs.example as HTMLDivElement,\n          settings: {\n            payment: {\n              calculateFees: true,\n\n              // optional - default will use default processor\n              processorID: '12345'\n            }\n          },\n          submission: (resp: any) => {\n            console.log(resp)\n          },\n          validCard: (resp: any) => {\n            console.log(resp)\n          }\n        })\n\n        // Submit\n        var submit = function() {\n          // submit off to the tokenizer with the dollar amount\n          tokenizer.submit()\n        }\n      "),(0,a.Uk)("\n    ")],-1),o={class:"section example"},u={ref:"example",class:"payment"};function r(e,n,t,r,p,c){return(0,a.wg)(),(0,a.iD)("div",i,[l,(0,a._)("div",o,[(0,a._)("div",u,null,512),(0,a._)("button",{id:"submit",type:"button",class:"button",onClick:n[0]||(n[0]=n=>e.submit())}," Checkout "),(0,a._)("pre",null,(0,s.zw)(e.response),1),(0,a._)("pre",null,(0,s.zw)(e.validCard),1)])])}var p=t(1274),c=t(507),m=(0,a.aZ)({name:"CalculateFees",data(){return{example:{},amount:"1.00",response:null,validCard:null}},mounted(){this.example=new p.Z({apikey:c.K,amount:this.amount,container:this.$refs.example,settings:{payment:{calculateFees:!0}},submission:e=>{this.response=e},validCard:e=>{this.validCard=e}})},methods:{submit(){this.example.submit(this.amount)}}}),d=t(3744);const k=(0,d.Z)(m,[["render",r]]);var f=k}}]);
//# sourceMappingURL=516.707c666c.js.map