(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a90e5df"],{"5e3e":function(e,n,t){},"92c9":function(e,n,t){"use strict";t("5e3e")},badb:function(e,n,t){"use strict";t.r(n);var a=t("7a23"),i={class:"main home"},c=Object(a["f"])("pre",null,[Object(a["e"])("      "),Object(a["f"])("code",{class:"language-javascript"},"\n        // Example Code\n        var example = new Tokenizer({\n          url: '', // Optional - Only pass if using a different domain than your on\n          apikey: 'key here',\n          container: document.querySelector('#div container'),\n          submission: (resp) => {\n            console.log(resp)\n          }\n        })\n\n        // Example submission\n        function submit() {\n          example.submit() // Use submission callback to deal with response\n        }\n      "),Object(a["e"])("\n    ")],-1),l=Object(a["f"])("pre",null,[Object(a["e"])("      "),Object(a["f"])("code",{class:"language-html"},'\n        // Example Html\n        <div id="container"></div>\n        <button onclick="submit()">Submit</button>\n      '),Object(a["e"])("\n    ")],-1),o={class:"section example"},s={ref:"example"};function u(e,n,t,u,r,d){return Object(a["o"])(),Object(a["d"])("div",i,[c,l,Object(a["f"])("div",o,[Object(a["f"])("div",s,null,512),Object(a["f"])("button",{onClick:n[1]||(n[1]=function(n){return e.example.submit()})}," Pay "),Object(a["f"])("pre",null,Object(a["v"])(e.exampleResponse),1),Object(a["f"])("pre",null,Object(a["v"])(e.validCard),1)])])}var r=t("5967"),d=t("afd7"),p=Object(a["g"])({name:"Home",data:function(){return{example:null,exampleResponse:null,validCard:null}},mounted:function(){var e=this;this.example=new r["a"]({apikey:d["a"],container:"#latediv",submission:function(n){e.exampleResponse=n},validCard:function(n){e.validCard=n}});var n=this.$refs.example,t=document.createElement("div");t.id="latediv",setTimeout((function(){n.appendChild(t)}),100)}});t("92c9");p.render=u;n["default"]=p}}]);
//# sourceMappingURL=chunk-5a90e5df.01f7f6a2.js.map