(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-254765be"],{6121:function(e,n,t){"use strict";t("ac39")},ac39:function(e,n,t){},dfa8:function(e,n,t){"use strict";t.r(n);var s=t("7a23"),i={class:"threeds"},a=Object(s["f"])("pre",null,[Object(s["e"])("      "),Object(s["f"])("code",{class:"language-javascript"},"\n        // Tokenizer\n        var tokenizer = new Tokenizer({\n          // url: Optional - used only when the domain does not match\n          apikey: \"api_12345\",\n          settings: {\n            payment: {\n              types: ['stripe'],\n              stripe: {\n                // https://stripe.com/docs/stripe-js/appearance-api\n                appearance: {\n                  theme: 'night',\n                  variables: {},\n                  rules: {}\n                }\n              }\n            }\n          },\n          container: document.querySelector(\".tokenizer-container\"),\n          submission: (response) => {\n            // set the response\n            state.response = response\n          }\n        })\n\n        // Submit\n        var submit = function() {\n          // submit off to the tokenizer with the dollar amount\n          tokenizer.submit()\n        }\n      "),Object(s["e"])("\n    ")],-1),o={class:"playground example"},r={ref:"example",class:"payment"};function c(e,n,t,c,u,p){return Object(s["o"])(),Object(s["d"])("div",i,[a,Object(s["f"])("div",o,[Object(s["f"])("div",r,null,512),Object(s["f"])("button",{id:"submit",type:"button",class:"button",onClick:n[1]||(n[1]=function(n){return e.submit()})}," Checkout "),Object(s["f"])("pre",null,Object(s["v"])(e.response),1)])])}var u=t("5967"),p=t("afd7"),l=Object(s["g"])({name:"Stripe",data:function(){return{example:{},response:null}},mounted:function(){var e=this;this.example=new u["a"]({apikey:p["a"],container:this.$refs.example,settings:{payment:{types:["stripe"],stripe:{appearance:{theme:"night",variables:{},rules:{}}}}},submission:function(n){document.getElementById("submit");e.response=n}})},methods:{submit:function(){document.getElementById("submit");this.example.submit()}}});t("6121");l.render=c;n["default"]=l}}]);
//# sourceMappingURL=chunk-254765be.258f3ab7.js.map