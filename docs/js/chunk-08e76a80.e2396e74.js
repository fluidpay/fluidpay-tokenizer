(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08e76a80"],{"556c":function(e,n,t){"use strict";t("ed46")},ae81:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"main styled"},[e._m(0),t("div",{staticClass:"section exampleBubble"},[t("div",{attrs:{id:"exampleBubble"}}),t("button",{on:{click:function(n){return e.exampleBubble.submit()}}},[e._v("Pay")]),t("pre",[e._v(e._s(e.exampleBubbleResponse))])]),t("div",{staticClass:"section exampleLine"},[t("div",{attrs:{id:"exampleLine"}}),t("button",{on:{click:function(n){return e.exampleLine.submit()}}},[e._v("Pay")]),t("pre",[e._v(e._s(e.exampleLineResponse))])])])},s=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",{staticClass:"example-code"},[e._v("    "),t("code",{staticClass:"language-javascript"},[e._v("\n      // Example Code\n      var example = new Tokenizer({\n        apikey: 'key here',\n        container: document.querySelector('#div container'),\n        submission: (resp) => {\n          console.log(resp)\n        },\n        settings: {\n          // Styles object will get converted into a css style sheet.\n          // Inspect elements to see structured html elements\n          // and style them the same way you would in css.\n          styles: {\n            'body': {\n              'color': '#ffffff'\n            },\n            'input': {\n              'color': '#ffffff',\n              'border-radius': '8px',\n              'background-color': '#ffffff40',\n              'border': 'none'\n            },\n\n            // Example - style cvv to have full border box\n            '.payment .cvv input': {\n              'border': 'solid 1px #ffffff',\n              'padding-left': '6px'\n            }\n          }\n        }\n      })\n    ")]),e._v("\n  ")])}],l=t("2b0e"),a=t("5967"),i=t("89e1"),f=l["a"].extend({name:"Styles",data:function(){return{exampleBubble:null,exampleBubbleResponse:"",exampleLine:null,exampleLineResponse:""}},mounted:function(){var e=this;this.exampleBubble=new a["a"]({apikey:i["a"],container:document.querySelector("#exampleBubble"),submission:function(n){e.exampleBubbleResponse=n},settings:{styles:{body:{color:"#ffffff"},input:{color:"#ffffff","border-radius":"8px","background-color":"rgba(255, 255, 255, .2)",border:"none"}}}}),this.exampleLine=new a["a"]({apikey:i["a"],container:document.querySelector("#exampleLine"),submission:function(n){e.exampleLineResponse=n},settings:{styles:{body:{color:"#ffffff"},input:{color:"#ffffff","padding-left":"0px","border-radius":"0px",border:"none","border-bottom":"solid 1px #ffffff","background-color":"#525f7f"},".payment .cvv input":{border:"solid 1px #ffffff","padding-left":"6px"}}}})}}),r=f,c=(t("556c"),t("2877")),u=Object(c["a"])(r,o,s,!1,null,null,null);n["default"]=u.exports},ed46:function(e,n,t){}}]);
//# sourceMappingURL=chunk-08e76a80.e2396e74.js.map