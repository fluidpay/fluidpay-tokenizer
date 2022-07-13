"use strict";(self["webpackChunkfluidpay_tokenizer"]=self["webpackChunkfluidpay_tokenizer"]||[]).push([[893],{9893:function(e,n,o){o.r(n),o.d(n,{default:function(){return y}});var l=o(6252),t=o(3577),s={class:"main styled"},f=(0,l._)("pre",{class:"example-code"},[(0,l.Uk)("      "),(0,l._)("code",{class:"language-javascript"},"\n        // Example Code\n        var example = new Tokenizer({\n          apikey: 'key here',\n          container: document.querySelector('#div container'),\n          submission: (resp) => {\n            console.log(resp)\n          },\n          settings: {\n            // Styles object will get converted into a css style sheet.\n            // Inspect elements to see structured html elements\n            // and style them the same way you would in css.\n            styles: {\n              'body': {\n                'color': '#ffffff'\n              },\n              'input': {\n                'color': '#ffffff',\n                'border-radius': '8px',\n                'background-color': '#ffffff40',\n                'border': 'none'\n              },\n\n              // Example - style cvv to have full border box\n              '.payment .cvv input': {\n                'border': 'solid 1px #ffffff',\n                'padding-left': '6px'\n              }\n            }\n          }\n        })\n      "),(0,l.Uk)("\n    ")],-1),r={class:"section exampleBubble"},i=(0,l._)("div",{id:"exampleBubble"},null,-1),a={class:"section exampleLine"},u=(0,l._)("div",{id:"exampleLine"},null,-1);function p(e,n,o,p,c,d){return(0,l.wg)(),(0,l.iD)("div",s,[f,(0,l._)("div",r,[i,(0,l._)("button",{onClick:n[0]||(n[0]=function(n){return e.exampleBubble.submit()})}," Pay "),(0,l._)("pre",null,(0,t.zw)(e.exampleBubbleResponse),1)]),(0,l._)("div",a,[u,(0,l._)("button",{onClick:n[1]||(n[1]=function(n){return e.exampleLine.submit()})}," Pay "),(0,l._)("pre",null,(0,t.zw)(e.exampleLineResponse),1)])])}var c=o(3340),d=o(507),b=(0,l.aZ)({name:"Styles",data:function(){return{exampleBubble:null,exampleBubbleResponse:"",exampleLine:null,exampleLineResponse:""}},mounted:function(){var e=this;this.exampleBubble=new c.Z({apikey:d.K,container:document.querySelector("#exampleBubble"),submission:function(n){e.exampleBubbleResponse=n},settings:{styles:{body:{color:"#ffffff"},input:{color:"#ffffff","border-radius":"8px","background-color":"rgba(255, 255, 255, .2)",border:"none"}}}}),this.exampleLine=new c.Z({apikey:d.K,container:document.querySelector("#exampleLine"),submission:function(n){e.exampleLineResponse=n},settings:{styles:{body:{color:"#ffffff"},input:{color:"#ffffff","padding-left":"0px","border-radius":"0px",border:"none","border-bottom":"solid 1px #ffffff","background-color":"#525f7f"},".payment .cvv input":{border:"solid 1px #ffffff","padding-left":"6px"}}}})}}),m=o(3744);const x=(0,m.Z)(b,[["render",p]]);var y=x}}]);
//# sourceMappingURL=893-legacy.c5c24dea.js.map