(function(e){function t(t){for(var n,a,c=t[0],d=t[1],i=t[2],b=0,u=[];b<c.length;b++)a=c[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&u.push(r[a][0]),r[a]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);l&&l(t);while(u.length)u.shift()();return o.push.apply(o,i||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,c=1;c<s.length;c++){var d=s[c];0!==r[d]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},r={app:0},o=[];function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=d;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return s(t)}function o(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id="4678"},5144:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("7a23"),r=(s("b0c0"),{key:0,class:"flex fixed justify-center items-center bottom-0 top-0 left-0 right-0 bg-black bg-opacity-30"}),o=Object(n["f"])("div",{class:"loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"},null,-1),a=[o],c={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"},d={class:"lg:text-center"},i=Object(n["f"])("h2",{class:"text-base text-indigo-600 font-semibold tracking-wide uppercase"},"Kicktemp",-1),l=Object(n["f"])("p",{class:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"}," Lighthouse Viewer ",-1),b=Object(n["f"])("p",{class:"mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"}," Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam. ",-1),u={key:0,class:"mt-4 max-w-2xl text-xl lg:mx-auto text-red-500"},f={class:"md:col-span-2 mt-10"},j={class:"shadow sm:rounded-md sm:overflow-hidden"},m={class:"px-4 pt-0 bg-white sm:p-6"},h=Object(n["f"])("div",{class:"block text-sm font-medium text-gray-700"}," GitHub ",-1),p={class:"grid grid-cols-3 gap-6 mt-0"},g={class:"col-span-3 sm:col-span-1"},x={class:"mt-1 flex rounded-md shadow-sm"},y=Object(n["f"])("span",{class:"inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"}," owner ",-1),O={class:"col-span-3 sm:col-span-1"},v={class:"mt-1 flex rounded-md shadow-sm"},w=Object(n["f"])("span",{class:"inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"}," repo ",-1),k={class:"col-span-3 sm:col-span-1"},z={class:"mt-1 flex rounded-md shadow-sm"},T=Object(n["f"])("span",{class:"inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"}," path ",-1),U={key:0,class:"text-red-500 mt-6"},V={key:1,class:"mt-6"},L=Object(n["f"])("label",{class:"block text-sm font-medium text-gray-700"}," JSON ",-1),q={class:"mt-1"},S=Object(n["f"])("option",null,"Lighthouse auswählen",-1),_=["value"],M={class:"mt-1 flex rounded-md shadow-sm"},P=Object(n["f"])("span",{class:"inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"}," Requested Url ",-1),R=["href"],E={class:"mt-1 flex rounded-md shadow-sm"},D=Object(n["f"])("span",{class:"inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"}," Final Url ",-1),H=["href"],Y={class:"mt-1 flex rounded-md shadow-sm"},C=Object(n["f"])("span",{class:"inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"}," Date ",-1),F=["value"],J={class:"px-4 py-3 bg-gray-50 text-right sm:px-6"},A={class:"mt-10"};function G(e,t,s,o,G,N){var I=Object(n["j"])("ExternalLinkIcon"),K=Object(n["j"])("VueLighthouseViewer");return Object(n["h"])(),Object(n["e"])("div",null,[e.spinner?(Object(n["h"])(),Object(n["e"])("div",r,a)):Object(n["d"])("",!0),Object(n["f"])("div",c,[Object(n["f"])("div",d,[i,l,b,e.ratelimit.remaining<e.ratelimit.limit?(Object(n["h"])(),Object(n["e"])("div",u," Request Limit "+Object(n["k"])(e.ratelimit.limit)+"/"+Object(n["k"])(e.ratelimit.remaining)+" - Reset "+Object(n["k"])(e.ratelimit.resetdate),1)):Object(n["d"])("",!0)]),Object(n["f"])("div",f,[Object(n["f"])("div",j,[Object(n["f"])("div",m,[h,Object(n["f"])("div",p,[Object(n["f"])("div",g,[Object(n["f"])("div",x,[y,Object(n["m"])(Object(n["f"])("input",{type:"text",id:"github-owser",placeholder:"nielsnuebel","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.owner=t}),class:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"},null,512),[[n["l"],e.owner]])])]),Object(n["f"])("div",O,[Object(n["f"])("div",v,[w,Object(n["m"])(Object(n["f"])("input",{type:"text",id:"github-repo",placeholder:"lighthouse","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.repo=t}),class:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"},null,512),[[n["l"],e.repo]])])]),Object(n["f"])("div",k,[Object(n["f"])("div",z,[T,Object(n["m"])(Object(n["f"])("input",{type:"text",id:"github-path",placeholder:"/","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.path=t}),class:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"},null,512),[[n["l"],e.path]])])])]),null!=e.errormessage?(Object(n["h"])(),Object(n["e"])("div",U,Object(n["k"])(e.errormessage),1)):Object(n["d"])("",!0),null!=e.files&&e.files.length>0?(Object(n["h"])(),Object(n["e"])("div",V,[L,Object(n["f"])("div",q,[Object(n["f"])("select",{onChange:t[3]||(t[3]=function(e){return N.fetchJson(e)}),name:"json",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},[S,(Object(n["h"])(!0),Object(n["e"])(n["a"],null,Object(n["i"])(e.files,(function(e){return Object(n["h"])(),Object(n["e"])("option",{key:e.name,value:e.download_url},Object(n["k"])(e.name),9,_)})),128))],32)])])):Object(n["d"])("",!0),e.json?(Object(n["h"])(),Object(n["e"])(n["a"],{key:2},[Object(n["f"])("div",M,[P,Object(n["m"])(Object(n["f"])("input",{type:"text",readonly:"","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.json.requestedUrl=t}),class:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300 bg-gray-50 cursor-not-allowed"},null,512),[[n["l"],e.json.requestedUrl]]),Object(n["f"])("a",{href:e.json.requestedUrl,target:"_blank",class:"inline-flex items-center px-3 rounded-r-md border border-l-0 rounded-none rounded-r-md border-gray-300 bg-gray-50 text-gray-500 text-sm"},[Object(n["g"])(I,{class:"h-5 w-5 text-gray-500"})],8,R)]),Object(n["f"])("div",E,[D,Object(n["m"])(Object(n["f"])("input",{type:"text",readonly:"","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.json.finalUrl=t}),class:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300 bg-gray-50 cursor-not-allowed"},null,512),[[n["l"],e.json.finalUrl]]),Object(n["f"])("a",{href:e.json.finalUrl,target:"_blank",class:"inline-flex items-center px-3 rounded-r-md border border-l-0 rounded-none rounded-r-md border-gray-300 bg-gray-50 text-gray-500 text-sm"},[Object(n["g"])(I,{class:"h-5 w-5 text-gray-500"})],8,H)]),Object(n["f"])("div",Y,[C,Object(n["f"])("input",{type:"text",readonly:"",value:e.json.fetchTime,class:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 bg-gray-50 cursor-not-allowed"},null,8,F)])],64)):Object(n["d"])("",!0)]),Object(n["f"])("div",J,[Object(n["f"])("button",{onClick:t[6]||(t[6]=function(){return N.fetchFiles&&N.fetchFiles.apply(N,arguments)}),class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," Save ")])])]),Object(n["f"])("div",A,[e.json?(Object(n["h"])(),Object(n["c"])(K,{key:0,json:e.json},null,8,["json"])):Object(n["d"])("",!0)])])])}s("ac1f"),s("841c"),s("d3b7"),s("3ca3"),s("ddb0"),s("9861");var N={class:"lh-root lh-vars"},I=Object(n["f"])("main",{class:"vue-lighthouse-viewer"},null,-1),K=Object(n["f"])("div",{id:"lh-log"},null,-1);function B(e,t,s,r,o,a){var c=Object(n["j"])("VueReportTemplate");return Object(n["h"])(),Object(n["e"])("div",null,[Object(n["f"])("div",N,[Object(n["g"])(c),I,K])])}var Q=s("af64"),W=["innerHTML"];function X(e,t,s,r,o,a){return Object(n["h"])(),Object(n["e"])("div",{innerHTML:s.template},null,8,W)}var Z={name:"VueReportTemplate",props:{template:{type:String,default:Q["e"]}}},$=s("d959"),ee=s.n($);const te=ee()(Z,[["render",X]]);var se=te,ne={name:"VueLighthouseViewer",components:{VueReportTemplate:se},props:{json:{type:Object,required:!0}},computed:{computedJson:function(){return this.json}},mounted:function(){document.addEventListener("lh-log",(function(e){var t=document.querySelector("#lh-log");if(t){var s=new Q["b"](t);switch(e.detail.cmd){case"log":s.log(e.detail.msg);break;case"warn":s.warn(e.detail.msg);break;case"error":s.error(e.detail.msg);break;case"hide":s.hide();break;default:}}})),this.generateReport()},methods:{generateReport:function(){var e=new Q["a"](document),t=new Q["c"](e),s=document.querySelector("main.vue-lighthouse-viewer");t.renderReport(this.json,s);var n=new Q["d"](e);n.initFeatures(this.json)}},watch:{json:function(e,t){e!==t&&this.generateReport()}}};const re=ee()(ne,[["render",B]]);var oe=re,ae=s("c1df"),ce=s.n(ae),de=s("fd7f"),ie={name:"App",components:{VueLighthouseViewer:oe,ExternalLinkIcon:de["a"]},data:function(){return{ratelimit:null,json:null,files:null,spinner:!1,errormessage:null,owner:"nielsnuebel",repo:"lighthouse",path:""}},created:function(){var e=this,t=window.location.search.substring(1),s=new URLSearchParams(t);null!==s.get("url")&&(this.github=s.get("url")),this.spinner=!0,this.errormessage=null,this.json=null,fetch("https://api.github.com/repos/"+this.owner+"/"+this.repo+"/contents/"+this.path,{method:"GET",headers:new Headers({"Content-Type":"application/json",Accept:"application/vnd.github.v3+json"})}).then((function(e){if(!e.ok)throw console.log(e.headers),new Error("HTTP status "+e.json().message);return e.json()})).then((function(t){e.files=t,e.spinner=!1})).catch((function(t){e.errormessage=t,e.spinner=!1})),fetch("https://api.github.com/rate_limit",{method:"GET",headers:new Headers({"Content-Type":"application/json",Accept:"application/vnd.github.v3+json"})}).then((function(e){return e.json()})).then((function(t){t.rate.resetdate=ce()(new Date(1e3*t.rate.reset)).format("hh:mm DD.MM.YYYY"),e.ratelimit=t.rate}))},methods:{fetchFiles:function(){var e=this;this.json=null,this.spinner=!0,this.errormessage=null,fetch("https://api.github.com/repos/"+this.owner+"/"+this.repo+"/contents/"+this.path,{method:"GET",headers:new Headers({"Content-Type":"application/json",Accept:"application/vnd.github.v3+json"})}).then((function(e){if(!e.ok)throw new Error("HTTP status "+e.status);return e.json()})).then((function(t){e.files=t,e.spinner=!1})).catch((function(t){e.errormessage=t,e.spinner=!1}))},fetchJson:function(e){var t=this;this.spinner=!0,this.json=null,fetch(e.target.value).then((function(e){return e.json()})).then((function(e){e.fetchTime=ce()(String(e.fetchTime)).format("hh:mm DD.MM.YYYY"),t.json=e,t.spinner=!1}))}}};s("6fc9");const le=ee()(ie,[["render",G]]);var be=le;s("ba8c");Object(n["b"])(be).mount("#app")},"6fc9":function(e,t,s){"use strict";s("5144")},ba8c:function(e,t,s){}});
//# sourceMappingURL=app.99c14559.js.map