!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!S[e]||!x[e])return;for(var n in x[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0==--m&&0===b&&H()}(e,n),t&&t(e,n)};var n,r=!0,o="8c0127667ce25b0dd504",i=1e4,s={},a=[],c=[];function l(e){var t=R[e];if(!t)return _;var r=function(r){return t.hot.active?(R[r]?-1===R[r].parents.indexOf(e)&&R[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),_(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return _[e]},set:function(t){_[e]=t}}};for(var i in _)Object.prototype.hasOwnProperty.call(_,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===u&&p("prepare"),b++,_.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===u&&(y[e]||w(e),0===b&&0===m&&H())}},r.t=function(e,t){return 1&t&&(e=r(e)),_.t(e,-2&t)},r}function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:k,apply:A,status:function(e){if(!e)return u;h.push(e)},addStatusHandler:function(e){h.push(e)},removeStatusHandler:function(e){var t=h.indexOf(e);t>=0&&h.splice(t,1)},data:s[e]};return n=void 0,t}var h=[],u="idle";function p(e){u=e;for(var t=0;t<h.length;t++)h[t].call(null,e)}var f,g,v,m=0,b=0,y={},x={},S={};function C(e){return+e+""===e?+e:e}function k(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=_.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;x={},y={},S=e.c,v=e.h,p("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});g={};return w(0),"prepare"===u&&0===b&&0===m&&H(),t});var t}function w(e){S[e]?(x[e]=!0,m++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=_.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):y[e]=!0}function H(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return A(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(C(n));e.resolve(t)}}function A(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,r,i,c,l;function d(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,s=o.chain;if((c=R[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var a=0;a<c.parents.length;a++){var l=c.parents[a],d=R[l];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(d.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),h(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var f={},m=[],b={},y=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var x in g)if(Object.prototype.hasOwnProperty.call(g,x)){var k;l=C(x);var w=!1,H=!1,A=!1,F="";switch((k=g[x]?d(l):{type:"disposed",moduleId:x}).chain&&(F="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(w=new Error("Aborted because of self decline: "+k.moduleId+F));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+F));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(w=new Error("Aborted because "+l+" is not accepted"+F));break;case"accepted":t.onAccepted&&t.onAccepted(k),H=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),A=!0;break;default:throw new Error("Unexception type "+k.type)}if(w)return p("abort"),Promise.reject(w);if(H)for(l in b[l]=g[l],h(m,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,l)&&(f[l]||(f[l]=[]),h(f[l],k.outdatedDependencies[l]));A&&(h(m,[k.moduleId]),b[l]=y)}var E,O=[];for(r=0;r<m.length;r++)l=m[r],R[l]&&R[l].hot._selfAccepted&&O.push({module:l,errorHandler:R[l].hot._selfAccepted});p("dispose"),Object.keys(S).forEach(function(e){!1===S[e]&&function(e){delete installedChunks[e]}(e)});for(var j,D,P=m.slice();P.length>0;)if(l=P.pop(),c=R[l]){var L={},I=c.hot._disposeHandlers;for(i=0;i<I.length;i++)(n=I[i])(L);for(s[l]=L,c.hot.active=!1,delete R[l],delete f[l],i=0;i<c.children.length;i++){var $=R[c.children[i]];$&&((E=$.parents.indexOf(l))>=0&&$.parents.splice(E,1))}}for(l in f)if(Object.prototype.hasOwnProperty.call(f,l)&&(c=R[l]))for(D=f[l],i=0;i<D.length;i++)j=D[i],(E=c.children.indexOf(j))>=0&&c.children.splice(E,1);for(l in p("apply"),o=v,b)Object.prototype.hasOwnProperty.call(b,l)&&(e[l]=b[l]);var M=null;for(l in f)if(Object.prototype.hasOwnProperty.call(f,l)&&(c=R[l])){D=f[l];var B=[];for(r=0;r<D.length;r++)if(j=D[r],n=c.hot._acceptedDependencies[j]){if(-1!==B.indexOf(n))continue;B.push(n)}for(r=0;r<B.length;r++){n=B[r];try{n(D)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:D[r],error:e}),t.ignoreErrored||M||(M=e)}}}for(r=0;r<O.length;r++){var T=O[r];l=T.module,a=[l];try{_(l)}catch(e){if("function"==typeof T.errorHandler)try{T.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||M||(M=n),M||(M=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||M||(M=e)}}return M?(p("fail"),Promise.reject(M)):(p("idle"),new Promise(function(e){e(m)}))}var R={};function _(t){if(R[t])return R[t].exports;var n=R[t]={i:t,l:!1,exports:{},hot:d(t),parents:(c=a,a=[],c),children:[]};return e[t].call(n.exports,n,n.exports,l(t)),n.l=!0,n.exports}_.m=e,_.c=R,_.d=function(e,t,n){_.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,t){if(1&t&&(e=_(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(_.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)_.d(n,r,function(t){return e[t]}.bind(null,r));return n},_.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(t,"a",t),t},_.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},_.p="//caohenghu.github.io/vue-colorpicker/",_.h=function(){return o},l(17)(_.s=17)}([function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hu-page"},[n("div",{staticClass:"bg",style:{background:e.color}},[n("div",{staticClass:"title"},[e._v("\n            vue-colorpicker\n        ")]),e._v(" "),n("div",{staticClass:"cover"},[e.isSucking?n("div",[n("img",{ref:"cover"})]):e._e(),e._v(" "),n("color-picker",{attrs:{color:e.color,"sucker-hide":!1,"sucker-canvas":e.suckerCanvas,"sucker-area":e.suckerArea},on:{changeColor:e.changeColor,openSucker:e.openSucker}})],1)]),e._v(" "),e._m(0)])},o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"github"},[t("a",{attrs:{href:"https://github.com/caohenghu/vue-colorpicker",target:"_blank"}},[this._v("\n            Fork me on GitHub\n        ")])])}];r._withStripped=!0,n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return o})},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hu-color-picker",class:{light:e.isLightTheme},style:{width:e.totalWidth+"px"}},[n("div",{staticClass:"color-set"},[n("div",{ref:"saturation",staticClass:"saturation",on:{mousedown:e.selectSaturation}},[n("canvas",{ref:"canvasSaturation"}),e._v(" "),n("div",{staticClass:"slide",style:e.slideSaturationStyle})]),e._v(" "),n("div",{ref:"hue",staticClass:"hue",on:{mousedown:e.selectHue}},[n("canvas",{ref:"canvasHue"}),e._v(" "),n("div",{staticClass:"slide",style:e.slideHueStyle})]),e._v(" "),n("div",{ref:"alpha",staticClass:"alpha",on:{mousedown:e.selectAlpha}},[n("canvas",{ref:"canvasAlpha"}),e._v(" "),n("div",{staticClass:"slide",style:e.slideAlphaStyle})])]),e._v(" "),n("div",{staticClass:"color-show",style:{height:e.selectedColorHeight+"px"}},[n("div",{staticClass:"show"},[n("canvas",{ref:"canvasColor"}),e._v(" "),n("div",{staticClass:"color",style:{background:e.rgba.toRgbaString()}})]),e._v(" "),e.suckerHide||e.isSucking?e._e():n("svg",{staticClass:"sucker",class:{active:e.isOpenSucker},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"-12 -12 48 48"},on:{click:e.openSucker}},[n("path",{attrs:{d:"M13.1,8.2l5.6,5.6c0.4,0.4,0.5,1.1,0.1,1.5s-1.1,0.5-1.5,0.1c0,0-0.1,0-0.1-0.1l-1.4-1.4l-7.7,7.7C7.9,21.9,7.6,22,7.3,22H3.1C2.5,22,2,21.5,2,20.9l0,0v-4.2c0-0.3,0.1-0.6,0.3-0.8l5.8-5.8C8.5,9.7,9.2,9.6,9.7,10s0.5,1.1,0.1,1.5c0,0,0,0.1-0.1,0.1l-5.5,5.5v2.7h2.7l7.4-7.4L8.7,6.8c-0.5-0.4-0.5-1-0.1-1.5s1.1-0.5,1.5-0.1c0,0,0.1,0,0.1,0.1l1.4,1.4l3.5-3.5c1.6-1.6,4.1-1.6,5.8-0.1c1.6,1.6,1.6,4.1,0.1,5.8L20.9,9l-3.6,3.6c-0.4,0.4-1.1,0.5-1.5,0.1"}})]),e._v(" "),!e.suckerHide&&e.isSucking?n("svg",{staticClass:"sucker",attrs:{viewBox:"-16 -16 68 68",xmlns:"http://www.w3.org/2000/svg",stroke:"#9099a4"}},[n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{transform:"translate(1 1)","stroke-width":"4"}},[n("circle",{attrs:{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}}),e._v(" "),n("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])]):e._e()]),e._v(" "),n("div",{staticClass:"color-type"},[n("div",{staticClass:"name"},[e._v("\n            HEX\n        ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.modelHex,expression:"modelHex"}],staticClass:"value",style:{width:e.totalWidth-60+"px"},domProps:{value:e.modelHex},on:{input:[function(t){t.target.composing||(e.modelHex=t.target.value)},e.inputColor]}})]),e._v(" "),n("div",{staticClass:"color-type"},[n("div",{staticClass:"name"},[e._v("\n            RGBA\n        ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.modelRgba,expression:"modelRgba"}],staticClass:"value",style:{width:e.totalWidth-60+"px"},domProps:{value:e.modelRgba},on:{input:[function(t){t.target.composing||(e.modelRgba=t.target.value)},e.inputColor]}})]),e._v(" "),n("ul",{staticClass:"colors"},e._l(e.colorsDefault,function(t){return n("li",{key:t,staticClass:"item",on:{click:function(n){e.selectColor(t)}}},[n("div",{staticClass:"alpha",style:{background:"url("+e.imgAlphaBase64+")"}}),e._v(" "),n("div",{staticClass:"color",style:{background:t}})])}),0),e._v(" "),e.colorsHistory.length?n("ul",{staticClass:"colors history"},e._l(e.colorsHistory,function(t){return n("li",{key:t,staticClass:"item",on:{click:function(n){e.selectColor(t)}}},[n("div",{staticClass:"alpha",style:{background:"url("+e.imgAlphaBase64+")"}}),e._v(" "),n("div",{staticClass:"color",style:{background:t}})])}),0):e._e()])},o=[];r._withStripped=!0,n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return o})},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=(0,n(13).default)("10494e5a",r,!1,{});r.locals||e.hot.accept(7,function(){var t=n(7);"string"==typeof t&&(t=[[e.i,t,""]]),o(t)}),e.hot.dispose(function(){o()})},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=(0,n(13).default)("2310ce62",r,!1,{});r.locals||e.hot.accept(8,function(){var t=n(8);"string"==typeof t&&(t=[[e.i,t,""]]),o(t)}),e.hot.dispose(function(){o()})},function(e,t,n){"use strict";var r=n(15).a,o=n(9),i=n.n(o),s={components:{colorPicker:r},data:()=>({color:"#59c7f9",suckerCanvas:null,suckerArea:[],isSucking:!1}),methods:{changeColor(e){this.color=e.rgba.toRgbaString()},openSucker(e){if(e){this.isSucking=!0;const e=new Image;e.onload=(()=>{const e=this.$refs.cover;e.setAttribute("crossorigin","Anonymous"),e.src=i.a,setTimeout(()=>{const t=e.getBoundingClientRect(),n=this.createCanvas(e,t);document.body.appendChild(n),this.suckerCanvas=n,this.suckerArea=[t.left,t.top,t.left+t.width,t.top+t.height]},10)}),e.src=i.a}else this.suckerCanvas&&this.suckerCanvas.remove(),this.isSucking=!1},createCanvas(e,t){const n=document.createElement("canvas"),r=n.getContext("2d");return n.width=t.width,n.height=t.height,r.drawImage(e,0,0,t.width,t.height),Object.assign(n.style,{position:"absolute",left:t.left+"px",top:t.top+"px",opacity:0}),n}}};t.a=s},function(e,t,n){"use strict";var r=n(16),o=n.n(r),i={props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},suckerHide:{type:Boolean,default:!0},suckerCanvas:{type:null,default:null},suckerArea:{type:Array,default:()=>[]},colorsDefault:{type:Array,default:()=>["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7","rgba(0,0,0,0)"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},data(){return{slideSaturationStyle:{},slideHueStyle:{},slideAlphaStyle:{},hueWidth:15,hueHeight:152,alphaSize:5,selectedColorHeight:30,isOpenSucker:!1,suckerPreview:null,isSucking:!1,imgAlphaBase64:"",modelRgba:"",modelHex:"",r:0,g:0,b:0,a:1,h:0,s:0,v:0,colorsHistory:JSON.parse(localStorage.getItem(this.colorsHistoryKey))||[],colorSelected:""}},computed:{isLightTheme(){return"light"===this.theme},totalWidth(){return this.hueHeight+2*(this.hueWidth+8)},rgba(){return{r:this.r,g:this.g,b:this.b,a:this.a,toRgbString:()=>`rgb(${[this.r,this.g,this.b].join(",")})`,toRgbaStringShort:()=>`${[this.r,this.g,this.b,this.a].join(",")}`,toRgbaString:()=>`rgba(${this.rgba.toRgbaStringShort()})`,toHexString:()=>this.rgb2hex(this.rgba,!0)}},hsv(){return{h:this.h,s:this.s,v:this.v}}},watch:{rgba(){this.$emit("changeColor",{rgba:this.rgba,hsv:this.hsv})},suckerCanvas(e){this.isSucking=!1,this.suckColor(e),e.style.cursor=`url(${o.a}) 0 32, default`}},created(){this.setColorValue(this.color),this.setColorPos(),this.modelHex=this.rgba.toHexString(),this.modelRgba=this.rgba.toRgbaStringShort(),this.imgAlphaBase64=this.createAlphaSquare(4).toDataURL()},mounted(){this.renderHue(this.$refs.canvasHue,this.hueWidth,this.hueHeight),this.renderSaturation(this.$refs.canvasSaturation,this.rgba.toRgbString(),this.hueHeight),this.renderAlpha(this.$refs.canvasAlpha,this.hueWidth,this.hueHeight,this.alphaSize,this.rgba.toRgbString()),this.renderColor(this.$refs.canvasColor,this.totalWidth-this.selectedColorHeight,this.selectedColorHeight,this.alphaSize)},destroyed(){this.setcolorsHistory(this.colorSelected)},methods:{keydownHandler(e){27===e.keyCode&&(this.isOpenSucker=!this.isOpenSucker,this.$emit("openSucker",this.isOpenSucker),document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("mousemove",this.mousemoveHandler),document.removeEventListener("mouseup",this.mousemoveHandler),this.suckerPreview&&(document.body.removeChild(this.suckerPreview),this.suckerPreview=null))},mousemoveHandler(e){const{clientX:t,clientY:n}=e,{top:r,left:o,width:i,height:s}=this.suckerCanvas.getBoundingClientRect(),a=t-o,c=n-r,l=this.suckerCanvas.getContext("2d").getImageData(Math.min(a,i-1),Math.min(c,s-1),1,1);let[d,h,u,p]=l.data;p=parseFloat((p/255).toFixed(2));const f=this.suckerPreview.style;Object.assign(f,{position:"absolute",left:t+20+"px",top:n-36+"px",width:"24px",height:"24px",borderRadius:"50%",border:"2px solid #fff",boxShadow:"0 0 8px 0 rgba(0, 0, 0, 0.16)",background:`rgba(${[d,h,u,p].join(",")})`,zIndex:95}),t>=this.suckerArea[0]&&n>=this.suckerArea[1]&&t<=this.suckerArea[2]&&n<=this.suckerArea[3]?f.display="":f.display="none"},openSucker(){this.keydownHandler({keyCode:27}),this.isOpenSucker&&(this.isSucking=!0,document.addEventListener("keydown",this.keydownHandler))},inputColor(e){this.setColorValue(e.target.value),this.setColorPos(),this.renderSaturation(this.$refs.canvasSaturation,this.rgba.toRgbString(),this.hueHeight),this.renderAlpha(this.$refs.canvasAlpha,this.hueWidth,this.hueHeight,this.alphaSize,this.rgba.toRgbString()),this.colorSelected=this.rgba.toRgbaString()},setcolorsHistory(e){if(!e)return;const t=this.colorsHistory,n=t.indexOf(e);n>=0&&t.splice(n,1),t.length>=8&&(t.length=7),t.unshift(e),this.colorsHistory=t,localStorage.setItem(this.colorsHistoryKey,JSON.stringify(t))},setColorValue(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=this.hex2rgba(e):/rgb/.test(e)?t=this.rgb2rgba(e):"[object Object]"===Object.prototype.toString.call(e)&&(t=e);const{r:n,g:r,b:o,a:i}=t;this.r=n,this.g=r,this.b=o,this.a=i||0===i?i:1;const{h:s,s:a,v:c}=this.rgb2hsv(this.rgba);this.h=s,this.s=a,this.v=c},setColorPos(){this.slideSaturationStyle={left:this.s*this.hueHeight-5+"px",top:(1-this.v)*this.hueHeight-5+"px"},this.slideHueStyle={top:(1-this.h/360)*this.hueHeight-2+"px"},this.slideAlphaStyle={top:this.a*this.hueHeight-2+"px"}},selectColor(e){this.setColorValue(e),this.setColorPos(),this.renderSaturation(this.$refs.canvasSaturation,this.rgba.toRgbString(),this.hueHeight),this.renderAlpha(this.$refs.canvasAlpha,this.hueWidth,this.hueHeight,this.alphaSize,this.rgba.toRgbString()),this.modelHex=this.rgba.toHexString(),this.modelRgba=this.rgba.toRgbaStringShort(),this.colorSelected=this.rgba.toRgbaString()},selectSaturation(e){e.preventDefault(),e.stopPropagation();const{top:t,left:n}=this.$refs.saturation.getBoundingClientRect(),r=e.target.getContext("2d"),o=e=>{let o=e.clientX-n,i=e.clientY-t;o<0&&(o=0),i<0&&(i=0),o>this.hueHeight&&(o=this.hueHeight),i>this.hueHeight&&(i=this.hueHeight),this.slideSaturationStyle={left:o-5+"px",top:i-5+"px"};const s=r.getImageData(Math.min(o,this.hueHeight-1),Math.min(i,this.hueHeight-1),1,1),[a,c,l]=s.data;this.setColorValue({r:a,g:c,b:l}),this.renderAlpha(this.$refs.canvasAlpha,this.hueWidth,this.hueHeight,this.alphaSize,this.rgba.toRgbString()),this.modelHex=this.rgba.toHexString(),this.modelRgba=this.rgba.toRgbaStringShort()};o(e);const i=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",i),this.colorSelected=this.rgba.toRgbaString()};document.addEventListener("mousemove",o),document.addEventListener("mouseup",i)},selectHue(e){e.preventDefault(),e.stopPropagation();const{top:t}=this.$refs.hue.getBoundingClientRect(),n=e.target.getContext("2d"),r=e=>{let r=e.clientY-t;r<0&&(r=0),r>this.hueHeight&&(r=this.hueHeight),this.slideHueStyle={top:r-2+"px"},this.slideSaturationStyle={left:this.hueHeight-5+"px",top:"-5px"};const o=n.getImageData(0,Math.min(r,this.hueHeight-1),1,1),[i,s,a]=o.data;this.setColorValue({r:i,g:s,b:a}),this.renderSaturation(this.$refs.canvasSaturation,this.rgba.toRgbString(),this.hueHeight),this.renderAlpha(this.$refs.canvasAlpha,this.hueWidth,this.hueHeight,this.alphaSize,this.rgba.toRgbString()),this.modelHex=this.rgba.toHexString(),this.modelRgba=this.rgba.toRgbaStringShort(),this.colorSelected=this.rgba.toRgbaString()};r(e);const o=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",o)},selectAlpha(e){e.preventDefault(),e.stopPropagation();const{top:t}=this.$refs.alpha.getBoundingClientRect(),n=e=>{let n=e.clientY-t;n<0&&(n=0),n>this.hueHeight&&(n=this.hueHeight),this.slideAlphaStyle={top:n-2+"px"},this.a=parseFloat((n/this.hueHeight).toFixed(2)),this.modelHex=this.rgba.toHexString(),this.modelRgba=this.rgba.toRgbaStringShort(),this.colorSelected=this.rgba.toRgbaString()};n(e);const r=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",r)},suckColor(e){e&&"CANVAS"!==e.tagName||(this.suckerPreview=document.createElement("div"),document.body.appendChild(this.suckerPreview),document.addEventListener("mousemove",this.mousemoveHandler),document.addEventListener("mouseup",this.mousemoveHandler),e.addEventListener("click",t=>{const{clientX:n,clientY:r}=t,{top:o,left:i,width:s,height:a}=e.getBoundingClientRect(),c=n-i,l=r-o,d=e.getContext("2d").getImageData(Math.min(c,s-1),Math.min(l,a-1),1,1);let[h,u,p,f]=d.data;f=parseFloat((f/255).toFixed(2)),this.setColorValue({r:h,g:u,b:p,a:f}),this.setColorPos(),this.renderSaturation(this.$refs.canvasSaturation,this.rgba.toRgbString(),this.hueHeight),this.renderAlpha(this.$refs.canvasAlpha,this.hueWidth,this.hueHeight,this.alphaSize,this.rgba.toRgbString()),this.modelHex=this.rgba.toHexString(),this.modelRgba=this.rgba.toRgbaStringShort(),this.colorSelected=this.rgba.toRgbaString()}))},renderSaturation(e,t,n){const r=e.getContext("2d");e.width=n,e.height=n,r.fillStyle=t,r.fillRect(0,0,n,n),this.createLinearGradient("l",r,n,n,"#FFFFFF","rgba(255,255,255,0)"),this.createLinearGradient("p",r,n,n,"rgba(0,0,0,0)","#000000")},renderHue(e,t,n){const r=e.getContext("2d");e.width=t,e.height=n;const o=r.createLinearGradient(0,0,0,n);o.addColorStop(0,"#FF0000"),o.addColorStop(.17,"#FF00FF"),o.addColorStop(.34,"#0000FF"),o.addColorStop(.51,"#00FFFF"),o.addColorStop(.68,"#00FF00"),o.addColorStop(.17*5,"#FFFF00"),o.addColorStop(1,"#FF0000"),r.fillStyle=o,r.fillRect(0,0,t,n)},renderAlpha(e,t,n,r,o){const i=this.createAlphaSquare(r),s=e.getContext("2d");e.width=t,e.height=n,s.fillStyle=s.createPattern(i,"repeat"),s.fillRect(0,0,t,n),this.createLinearGradient("p",s,t,n,"rgba(255,255,255,0)",o)},renderColor(e,t,n,r){const o=this.createAlphaSquare(r),i=e.getContext("2d");e.width=t,e.height=n,i.fillStyle=i.createPattern(o,"repeat"),i.fillRect(0,0,t,n)},createAlphaSquare(e){const t=document.createElement("canvas"),n=t.getContext("2d"),r=2*e;return t.width=r,t.height=r,n.fillStyle="#ffffff",n.fillRect(0,0,r,r),n.fillStyle="#ccd5db",n.fillRect(0,0,e,e),n.fillRect(e,e,e,e),t},createLinearGradient(e,t,n,r,o,i){const s="l"===e,a=t.createLinearGradient(0,0,s?n:0,s?0:r);a.addColorStop(.01,o),a.addColorStop(.99,i),t.fillStyle=a,t.fillRect(0,0,n,r)},rgb2hex({r:e,g:t,b:n},r){const o=e=>("0"+Number(e).toString(16)).slice(-2),i=`#${o(e)}${o(t)}${o(n)}`;return r?i.toUpperCase():i},hex2rgba(e){const t=e=>parseInt(e,16)||0;return{r:t((e=e.slice(1)).slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6)),a:1}},rgb2rgba:e=>"string"==typeof e?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e,rgb2hsv({r:e,g:t,b:n}){e/=255,t/=255,n/=255;const r=Math.max(e,t,n),o=Math.min(e,t,n),i=r-o;let s=0;return r===o?s=0:r===e?s=t>=n?60*(t-n)/i:60*(t-n)/i+360:r===t?s=60*(n-e)/i+120:r===n&&(s=60*(e-t)/i+240),{h:s=Math.floor(s),s:parseFloat((0===r?0:1-o/r).toFixed(2)),v:parseFloat(r.toFixed(2))}}}};t.a=i},function(e,t,n){"use strict";function r(e,t,n,r,o,i,s,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:l}}n.d(t,"a",function(){return r})},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".hu-color-picker {\n  padding: 10px;\n  background: #1d2024;\n  border-radius: 4px;\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  z-index: 1;\n}\n.hu-color-picker.light {\n    background: #f7f8f9;\n}\n.hu-color-picker.light .color-show .sucker {\n      background: #eceef0;\n}\n.hu-color-picker.light .color-type .name {\n      background: #e7e8e9;\n}\n.hu-color-picker.light .color-type .value {\n      color: #666;\n      background: #eceef0;\n}\n.hu-color-picker.light .colors.history {\n      border-top: 1px solid #eee;\n}\n.hu-color-picker canvas {\n    vertical-align: top;\n}\n.hu-color-picker .color-set {\n    display: flex;\n}\n.hu-color-picker .color-set .saturation {\n      position: relative;\n      cursor: pointer;\n}\n.hu-color-picker .color-set .saturation .slide {\n        position: absolute;\n        left: 100px;\n        top: 0;\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n        border: 1px solid #fff;\n        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);\n        pointer-events: none;\n}\n.hu-color-picker .color-set .hue {\n      position: relative;\n      margin-left: 8px;\n      cursor: pointer;\n}\n.hu-color-picker .color-set .hue .slide {\n        position: absolute;\n        left: 0;\n        top: 100px;\n        width: 100%;\n        height: 4px;\n        background: #fff;\n        box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.3);\n        pointer-events: none;\n}\n.hu-color-picker .color-set .alpha {\n      position: relative;\n      margin-left: 8px;\n      cursor: pointer;\n}\n.hu-color-picker .color-set .alpha .slide {\n        position: absolute;\n        left: 0;\n        top: 100px;\n        width: 100%;\n        height: 4px;\n        background: #fff;\n        box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.3);\n        pointer-events: none;\n}\n.hu-color-picker .color-show {\n    margin-top: 8px;\n    display: flex;\n}\n.hu-color-picker .color-show .show {\n      position: relative;\n      flex: 1;\n}\n.hu-color-picker .color-show .show .color {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n}\n.hu-color-picker .color-show .sucker {\n      width: 30px;\n      fill: #9099a4;\n      background: #2e333a;\n      cursor: pointer;\n      transition: all 0.3s;\n}\n.hu-color-picker .color-show .sucker:hover, .hu-color-picker .color-show .sucker.active {\n        fill: #1593ff;\n}\n.hu-color-picker .color-type {\n    margin-top: 8px;\n    font-size: 12px;\n}\n.hu-color-picker .color-type .name {\n      width: 60px;\n      height: 30px;\n      float: left;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: #999;\n      background: #252930;\n}\n.hu-color-picker .color-type .value {\n      height: 30px;\n      padding: 0 12px;\n      border: 0;\n      color: #fff;\n      background: #2e333a;\n      box-sizing: border-box;\n}\n.hu-color-picker .colors {\n    padding: 0;\n    margin: 0;\n}\n.hu-color-picker .colors.history {\n      margin-top: 10px;\n      border-top: 1px solid #2e333a;\n}\n.hu-color-picker .colors .item {\n      position: relative;\n      width: 16px;\n      height: 16px;\n      margin: 10px 0 0 10px;\n      border-radius: 3px;\n      box-sizing: border-box;\n      vertical-align: top;\n      display: inline-block;\n      transition: all 0.1s;\n      cursor: pointer;\n}\n.hu-color-picker .colors .item:nth-child(8n + 1) {\n        margin-left: 0;\n}\n.hu-color-picker .colors .item:hover {\n        transform: scale(1.4);\n}\n.hu-color-picker .colors .item .alpha {\n        height: 100%;\n        border-radius: 4px;\n}\n.hu-color-picker .colors .item .color {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 3px;\n}\n",""])},function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".hu-page {\n  height: 100%;\n}\n.hu-page .bg {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n.hu-page .bg .title {\n      color: #fff;\n      font-size: 48px;\n      text-shadow: 0 0 8px rgba(0, 0, 0, 0.16);\n}\n.hu-page .bg .cover {\n      display: flex;\n      justify-content: space-around;\n      width: 100%;\n}\n.hu-page .github {\n    position: fixed;\n    right: 0;\n    top: 0;\n    width: 200px;\n    height: 30px;\n    line-height: 30px;\n    font-size: 14px;\n    font-weight: bold;\n    background: #a00;\n    text-align: center;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\n    transform: rotate(45deg) translateX(60px);\n}\n.hu-page .github a {\n      display: block;\n      text-decoration: none;\n      color: #fff;\n}\n",""])},function(e,t,n){e.exports=n.p+"images/cover-154362cd.jpg"},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t){var n,r,o=Object.create(null);"undefined"!=typeof window&&(window.__VUE_HOT_MAP__=o);var i=!1,s="beforeCreate";function a(e,t){if(t.functional){var n=t.render;t.render=function(t,r){var i=o[e].instances;return r&&i.indexOf(r.parent)<0&&i.push(r.parent),n(t,r)}}else c(t,s,function(){var t=o[e];t.Ctor||(t.Ctor=this.constructor),t.instances.push(this)}),c(t,"beforeDestroy",function(){var t=o[e].instances;t.splice(t.indexOf(this),1)})}function c(e,t,n){var r=e[t];e[t]=r?Array.isArray(r)?r.concat(n):[r,n]:[n]}function l(e){return function(t,n){try{e(t,n)}catch(e){console.error(e),console.warn("Something went wrong during Vue component hot-reload. Full reload required.")}}}function d(e,t){for(var n in e)n in t||delete e[n];for(var r in t)e[r]=t[r]}t.install=function(e,o){i||(i=!0,n=e.__esModule?e.default:e,r=n.version.split(".").map(Number),o,n.config._lifecycleHooks.indexOf("init")>-1&&(s="init"),t.compatible=r[0]>=2,t.compatible||console.warn("[HMR] You are using a version of vue-hot-reload-api that is only compatible with Vue.js core ^2.0.0."))},t.createRecord=function(e,t){if(!o[e]){var n=null;"function"==typeof t&&(t=(n=t).options),a(e,t),o[e]={Ctor:n,options:t,instances:[]}}},t.isRecorded=function(e){return void 0!==o[e]},t.rerender=l(function(e,t){var n=o[e];if(t){if("function"==typeof t&&(t=t.options),n.Ctor)n.Ctor.options.render=t.render,n.Ctor.options.staticRenderFns=t.staticRenderFns,n.instances.slice().forEach(function(e){e.$options.render=t.render,e.$options.staticRenderFns=t.staticRenderFns,e._staticTrees&&(e._staticTrees=[]),Array.isArray(n.Ctor.options.cached)&&(n.Ctor.options.cached=[]),Array.isArray(e.$options.cached)&&(e.$options.cached=[]),e.$forceUpdate()});else if(n.options.render=t.render,n.options.staticRenderFns=t.staticRenderFns,n.options.functional){if(Object.keys(t).length>2)d(n.options,t);else{var r=n.options._injectStyles;if(r){var i=t.render;n.options.render=function(e,t){return r.call(t),i(e,t)}}}n.options._Ctor=null,Array.isArray(n.options.cached)&&(n.options.cached=[]),n.instances.slice().forEach(function(e){e.$forceUpdate()})}}else n.instances.slice().forEach(function(e){e.$forceUpdate()})}),t.reload=l(function(e,t){var n=o[e];if(t)if("function"==typeof t&&(t=t.options),a(e,t),n.Ctor){r[1]<2&&(n.Ctor.extendOptions=t);var i=n.Ctor.super.extend(t);n.Ctor.options=i.options,n.Ctor.cid=i.cid,n.Ctor.prototype=i.prototype,i.release&&i.release()}else d(n.options,t);n.instances.slice().forEach(function(e){e.$vnode&&e.$vnode.context?e.$vnode.context.$forceUpdate():console.warn("Root or manually mounted instance modified. Full reload required.")})})},function(e,t){e.exports=Vue},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}n.r(t),n.d(t,"default",function(){return f});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,l=!1,d=function(){},h=null,u="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,o){l=n,h=o||{};var s=r(e,t);return g(s),function(t){for(var n=[],o=0;o<s.length;o++){var a=s[o];(c=i[a.id]).refs--,n.push(c)}t?g(s=r(e,t)):s=[];for(o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete i[c.id]}}}}function g(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(m(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:s}}}}function v(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+u+'~="'+e.id+'"]');if(r){if(l)return d;r.parentNode.removeChild(r)}if(p){var o=c++;r=a||(a=v()),t=x.bind(null,r,o,!1),n=x.bind(null,r,o,!0)}else r=v(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);h.ssrId&&e.setAttribute(u,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t,n){"use strict";var r=n(0),o=n(4),i=(n(20),n(6)),s=Object(i.a)(o.a,r.render,r.staticRenderFns,!1,null,null,null),a=n(11);a.install(n(12)),a.compatible&&(e.hot.accept(),e.hot.data?a.reload("5e019a2f",s.options):a.createRecord("5e019a2f",s.options),e.hot.accept(0,function(e){r=n(0),a.rerender("5e019a2f",{render:r.render,staticRenderFns:r.staticRenderFns})})),s.options.__file="src/vue/App.vue",t.a=s.exports},function(e,t,n){"use strict";var r=n(1),o=n(5),i=(n(19),n(6)),s=Object(i.a)(o.a,r.render,r.staticRenderFns,!1,null,null,null),a=n(11);a.install(n(12)),a.compatible&&(e.hot.accept(),e.hot.data?a.reload("3fa538f1",s.options):a.createRecord("3fa538f1",s.options),e.hot.accept(1,function(e){r=n(1),a.rerender("3fa538f1",{render:r.render,staticRenderFns:r.staticRenderFns})})),s.options.__file="src/vue/Color.vue",t.a=s.exports},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAlBJREFUOBGNkk2IUlEUx+99vufXQvCjEA11YWgk7TTLZhwVLTfSRmY1QbOoTdMqad0iiGB20cpVUAt3SVHCJDJG40IXBVGLIIOB8hM/QPy+/a/xYqK38MJ99757zu9/zj3nUrLmiEajdkEQni6Xy6hKpfqB/eNCofCMrsOHQiEPgPfwtdhsNkYpJe12m0LolkpJIJFI7DkcDm+9Xv/o9/vPw+dwsVhYnE4nc7lc1G63016vx8bj8TlRSWA6nd6cz+cXAoHAGYD3sDdarVam1+vpaDRaITgjjLHTigKArkK9ifXhbDYjBoOBSZL0F261Wqzb7VKtVvtBUQCwi4N88kjD4ZAg+ioyT53DGo3mJwLs/VcD3PkyrnAwmUwks9n8YDAYuPBvxGQASL/fp8imiwJeKZVK3/4R4DAicliLIt4pFosvsH9Vq9Wu4b5GCHC4j+hb5XL5C09JWOWFTzAY3MJyAAHJ7XbfRo9fclsmk2maTKY8IhJRFAna+QTwJ27jYyUQDofj6O1bPBLJ6/Xu5vP5N3/MhMC2gxrcReTvEGio1er7eFRR2S7EYrE40nsNWPB4PLu5XO6dbIxEIjuo+COkfAyfTZ1OF4dIHyJnZR8RkZ/zH5/PdyObzR7KhmQyud3pdFYw2rVRqVSOYePTIvvwVYDyKThUT8KpVGq70WjsI/Iv+HC4zp2VhoiiEP625ZFOp683m819iLZxtlGtVuuyTWmlePcM9x9A6DNWikd0EYJtdGPz6OjoqxJ08ox3oQzYgKtcwgwi7Q5athbMhX4DL0sglf8ys78AAAAASUVORK5CYII="},function(e,t,n){e.exports=n(18)},function(e,t,n){"use strict";n.r(t);var r=n(14);new Vue({el:"#app",render:e=>e(r.a)})},function(e,t,n){"use strict";var r=n(2);n.n(r).a},function(e,t,n){"use strict";var r=n(3);n.n(r).a}]);