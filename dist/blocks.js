window.wp=window.wp||{},window.wp.main=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=25)}([function(t,e){t.exports=window.wp.element},function(t,e){t.exports=window.wp.i18n},function(t,e){t.exports=window.wp.components},function(t,e){t.exports=window.wp.blocks},function(t,e){t.exports=window.wp.editor},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){t.exports=window.wp.compose},function(t,e,r){var n=r(11),o=r(14),i=r(36);for(var a in(e=t.exports=function(t,e){return new i(e).process(t)}).FilterXSS=i,n)e[a]=n[a];for(var a in o)e[a]=o[a];"undefined"!=typeof window&&(window.filterXSS=t.exports),"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=t.exports)},function(t,e,r){var n=r(12),o=r(34);for(var i in(e=t.exports=function(t,e){return new o(e).process(t)}).FilterCSS=o,n)e[i]=n[i];"undefined"!=typeof window&&(window.filterCSS=t.exports)},function(t,e){t.exports={indexOf:function(t,e){var r,n;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},forEach:function(t,e,r){var n,o;if(Array.prototype.forEach)return t.forEach(e,r);for(n=0,o=t.length;n<o;n++)e.call(r,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(t){var e=/\s|\n|\t/.exec(t);return e?e.index:-1}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e,r){var n=r(8).FilterCSS,o=r(8).getDefaultWhiteList,i=r(9);function a(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}}var c=new n;function s(t){return t.replace(l,"&lt;").replace(u,"&gt;")}var l=/</g,u=/>/g,f=/"/g,d=/&quot;/g,p=/&#([a-zA-Z0-9]*);?/gim,g=/&colon;?/gim,m=/&newline;?/gim,b=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,h=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,v=/u\s*r\s*l\s*\(.*/gi;function y(t){return t.replace(f,"&quot;")}function w(t){return t.replace(d,'"')}function x(t){return t.replace(p,function(t,e){return"x"===e[0]||"X"===e[0]?String.fromCharCode(parseInt(e.substr(1),16)):String.fromCharCode(parseInt(e,10))})}function k(t){return t.replace(g,":").replace(m," ")}function O(t){for(var e="",r=0,n=t.length;r<n;r++)e+=t.charCodeAt(r)<32?" ":t.charAt(r);return i.trim(e)}function j(t){return t=O(t=k(t=x(t=w(t))))}function A(t){return t=s(t=y(t))}var S=/<!--[\s\S]*?-->/g;e.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]},e.getDefaultWhiteList=a,e.onTag=function(t,e,r){},e.onIgnoreTag=function(t,e,r){},e.onTagAttr=function(t,e,r){},e.onIgnoreTagAttr=function(t,e,r){},e.safeAttrValue=function(t,e,r,n){if(r=j(r),"href"===e||"src"===e){if("#"===(r=i.trim(r)))return"#";if("http://"!==r.substr(0,7)&&"https://"!==r.substr(0,8)&&"mailto:"!==r.substr(0,7)&&"tel:"!==r.substr(0,4)&&"#"!==r[0]&&"/"!==r[0])return""}else if("background"===e){if(b.lastIndex=0,b.test(r))return""}else if("style"===e){if(h.lastIndex=0,h.test(r))return"";if(v.lastIndex=0,v.test(r)&&(b.lastIndex=0,b.test(r)))return"";!1!==n&&(r=(n=n||c).process(r))}return r=A(r)},e.escapeHtml=s,e.escapeQuote=y,e.unescapeQuote=w,e.escapeHtmlEntities=x,e.escapeDangerHtml5Entities=k,e.clearNonPrintableCharacter=O,e.friendlyAttrValue=j,e.escapeAttrValue=A,e.onIgnoreTagStripAll=function(){return""},e.StripTagBody=function(t,e){"function"!=typeof e&&(e=function(){});var r=!Array.isArray(t),n=[],o=!1;return{onIgnoreTag:function(a,c,s){if(function(e){return!!r||-1!==i.indexOf(t,e)}(a)){if(s.isClosing){var l="[/removed]",u=s.position+l.length;return n.push([!1!==o?o:s.position,u]),o=!1,l}return o||(o=s.position),"[removed]"}return e(a,c,s)},remove:function(t){var e="",r=0;return i.forEach(n,function(n){e+=t.slice(r,n[0]),r=n[1]}),e+=t.slice(r)}}},e.stripCommentTag=function(t){return t.replace(S,"")},e.stripBlankChar=function(t){var e=t.split("");return(e=e.filter(function(t){var e=t.charCodeAt(0);return!(127===e||e<=31&&10!==e&&13!==e)})).join("")},e.cssFilter=c,e.getDefaultCSSWhiteList=o},function(t,e){function r(){var t={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1};return t}var n=/javascript\s*\:/gim;e.whiteList=r(),e.getDefaultWhiteList=r,e.onAttr=function(t,e,r){},e.onIgnoreAttr=function(t,e,r){},e.safeAttrValue=function(t,e){return n.test(e)?"":e}},function(t,e){t.exports={indexOf:function(t,e){var r,n;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},forEach:function(t,e,r){var n,o;if(Array.prototype.forEach)return t.forEach(e,r);for(n=0,o=t.length;n<o;n++)e.call(r,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(t){return String.prototype.trimRight?t.trimRight():t.replace(/(\s*$)/g,"")}}},function(t,e,r){var n=r(9);function o(t){var e=n.spaceIndex(t);if(-1===e)var r=t.slice(1,-1);else r=t.slice(1,e+1);return"/"===(r=n.trim(r).toLowerCase()).slice(0,1)&&(r=r.slice(1)),"/"===r.slice(-1)&&(r=r.slice(0,-1)),r}function i(t){return"</"===t.slice(0,2)}var a=/[^a-zA-Z0-9_:\.\-]/gim;function c(t,e){for(;e<t.length;e++){var r=t[e];if(" "!==r)return"="===r?e:-1}}function s(t,e){for(;e>0;e--){var r=t[e];if(" "!==r)return"="===r?e:-1}}function l(t){return function(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}(t)?t.substr(1,t.length-2):t}e.parseTag=function(t,e,r){var n="",a=0,c=!1,s=!1,l=0,u=t.length,f="",d="";for(l=0;l<u;l++){var p=t.charAt(l);if(!1===c){if("<"===p){c=l;continue}}else if(!1===s){if("<"===p){n+=r(t.slice(a,l)),c=l,a=l;continue}if(">"===p){n+=r(t.slice(a,c)),f=o(d=t.slice(c,l+1)),n+=e(c,n.length,f,d,i(d)),a=l+1,c=!1;continue}if(('"'===p||"'"===p)&&"="===t.charAt(l-1)){s=p;continue}}else if(p===s){s=!1;continue}}return a<t.length&&(n+=r(t.substr(a))),n},e.parseAttr=function(t,e){var r=0,o=[],i=!1,u=t.length;function f(t,r){if(!((t=(t=n.trim(t)).replace(a,"").toLowerCase()).length<1)){var i=e(t,r||"");i&&o.push(i)}}for(var d=0;d<u;d++){var p,g=t.charAt(d);if(!1!==i||"="!==g)if(!1===i||d!==r||'"'!==g&&"'"!==g||"="!==t.charAt(d-1)){if(/\s|\n|\t/.test(g)){if(t=t.replace(/\s|\n|\t/g," "),!1===i){if(-1===(p=c(t,d))){f(n.trim(t.slice(r,d))),i=!1,r=d+1;continue}d=p-1;continue}if(-1===(p=s(t,d-1))){f(i,l(n.trim(t.slice(r,d)))),i=!1,r=d+1;continue}}}else{if(-1===(p=t.indexOf(g,d+1)))break;f(i,n.trim(t.slice(r+1,p))),i=!1,r=(d=p)+1}else i=t.slice(r,d),r=d+1}return r<t.length&&(!1===i?f(t.slice(r)):f(i,l(n.trim(t.slice(r))))),n.trim(o.join(" "))}},function(t,e,r){var n=r(26);t.exports=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),o.forEach(function(e){n(t,e,r[e])})}return t}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,r){var n=r(27),o=r(5);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},function(t,e,r){var n=r(28);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e,r){var n=r(29);t.exports=function(t,e){if(null==t)return{};var r,o,i=n(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}},function(t,e,r){var n=r(30),o=r(10),i=r(31);t.exports=function(t){return n(t)||o(t)||i()}},function(t,e,r){var n=r(32),o=r(10),i=r(33);t.exports=function(t){return n(t)||o(t)||i()}},function(t,e){t.exports=window.lodash},function(t,e,r){t.exports=r(37)},function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(e){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?t.exports=n=function(t){return r(t)}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)},n(e)}t.exports=n},function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},function(t,e){t.exports=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e,r){var n=r(12),o=r(35);r(13);function i(t){return null==t}function a(t){(t=function(t){var e={};for(var r in t)e[r]=t[r];return e}(t||{})).whiteList=t.whiteList||n.whiteList,t.onAttr=t.onAttr||n.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||n.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||n.safeAttrValue,this.options=t}a.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,r=e.whiteList,n=e.onAttr,a=e.onIgnoreAttr,c=e.safeAttrValue;return o(t,function(t,e,o,s,l){var u=r[o],f=!1;if(!0===u?f=u:"function"==typeof u?f=u(s):u instanceof RegExp&&(f=u.test(s)),!0!==f&&(f=!1),s=c(o,s)){var d,p={position:e,sourcePosition:t,source:l,isWhite:f};return f?i(d=n(o,s,p))?o+":"+s:d:i(d=a(o,s,p))?void 0:d}})},t.exports=a},function(t,e,r){var n=r(13);t.exports=function(t,e){";"!==(t=n.trimRight(t))[t.length-1]&&(t+=";");var r=t.length,o=!1,i=0,a=0,c="";function s(){if(!o){var r=n.trim(t.slice(i,a)),s=r.indexOf(":");if(-1!==s){var l=n.trim(r.slice(0,s)),u=n.trim(r.slice(s+1));if(l){var f=e(i,c.length,l,u,r);f&&(c+=f+"; ")}}}i=a+1}for(;a<r;a++){var l=t[a];if("/"===l&&"*"===t[a+1]){var u=t.indexOf("*/",a+2);if(-1===u)break;i=(a=u+1)+1,o=!1}else"("===l?o=!0:")"===l?o=!1:";"===l?o||s():"\n"===l&&s()}return n.trim(c)}},function(t,e,r){var n=r(8).FilterCSS,o=r(11),i=r(14),a=i.parseTag,c=i.parseAttr,s=r(9);function l(t){return null==t}function u(t){(t=function(t){var e={};for(var r in t)e[r]=t[r];return e}(t||{})).stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=o.onIgnoreTagStripAll),t.whiteList=t.whiteList||o.whiteList,t.onTag=t.onTag||o.onTag,t.onTagAttr=t.onTagAttr||o.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||o.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||o.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||o.safeAttrValue,t.escapeHtml=t.escapeHtml||o.escapeHtml,this.options=t,!1===t.css?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new n(t.css))}u.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,r=e.whiteList,n=e.onTag,i=e.onIgnoreTag,u=e.onTagAttr,f=e.onIgnoreTagAttr,d=e.safeAttrValue,p=e.escapeHtml,g=this.cssFilter;e.stripBlankChar&&(t=o.stripBlankChar(t)),e.allowCommentTag||(t=o.stripCommentTag(t));var m=!1;if(e.stripIgnoreTagBody){m=o.StripTagBody(e.stripIgnoreTagBody,i);i=m.onIgnoreTag}var b=a(t,function(t,e,o,a,m){var b,h={sourcePosition:t,position:e,isClosing:m,isWhite:r.hasOwnProperty(o)};if(!l(b=n(o,a,h)))return b;if(h.isWhite){if(h.isClosing)return"</"+o+">";var v=function(t){var e=s.spaceIndex(t);if(-1===e)return{html:"",closing:"/"===t[t.length-2]};var r="/"===(t=s.trim(t.slice(e+1,-1)))[t.length-1];return r&&(t=s.trim(t.slice(0,-1))),{html:t,closing:r}}(a),y=r[o],w=c(v.html,function(t,e){var r,n=-1!==s.indexOf(y,t);return l(r=u(o,t,e,n))?n?(e=d(o,t,e,g))?t+'="'+e+'"':t:l(r=f(o,t,e,n))?void 0:r:r});a="<"+o;return w&&(a+=" "+w),v.closing&&(a+=" /"),a+=">"}return l(b=i(o,a,h))?p(a):b},p);return m&&(b=m.remove(b)),b},t.exports=u},function(t,e,r){"use strict";r.r(e);var n,o=r(0),i=r(1),a=r(2),c=r(3),s=r(4),l=r(6),u=r(15),f=r.n(u),d=r(16),p=r.n(d),g=r(17),m=r.n(g),b=r(18),h=r.n(b),v=r(19),y=r.n(v),w=r(20),x=r.n(w),k=r(5),O=r.n(k),j=window.wp.codeEditor,A=function(t){function e(t){var r;return p()(this,e),(r=h()(this,y()(e).call(this,t))).state={value:""},r.initialize=r.initialize.bind(O()(O()(r))),r.updateValue=r.updateValue.bind(O()(O()(r))),r}return x()(e,t),m()(e,[{key:"componentDidMount",value:function(){"complete"===document.readyState?this.initialize():window.addEventListener("DOMContentLoaded",this.initialize)}},{key:"componentWillUnmount",value:function(){this.updateValue(),this.editor.codemirror.toTextArea(),this.editor.codemirror.off("keyHandled"),this.editor=null}},{key:"componentDidUpdate",value:function(t,e){e.value!==this.editor.codemirror.doc.getValue()&&this.updateValue(),t.mode!==this.props.mode&&this.editor.codemirror.setOption("mode",this.props.mode)}},{key:"updateValue",value:function(){var t=this.props.onChange;this.editor&&(this.setState({value:this.editor.codemirror.doc.getValue()}),t(this.editor.codemirror.doc.getValue()),this.editor.codemirror.save())}},{key:"initialize",value:function(){var t=this,e=this.props.mode||"htmlmixed",r=j.defaultSettings.codemirror;this.editor=j.initialize(this.props.id,{codemirror:f()({},r,{mode:e})}),this.updateValue(),this.editor.codemirror.on("keyHandled",function(t,e,r){return r.stopPropagation()}),this.editor.codemirror.on("change",function(){return t.updateValue()})}},{key:"render",value:function(){return Object(o.createElement)(s.PlainText,this.props)}}]),e}(o.Component),S=r(21),T=r.n(S),E=r(22),C=r.n(E),_=r(23),I=r.n(_),L=r(7),P=r.n(L),V=r(24),z=(n=document.createElement("div"),function(t){return n.innerHTML=t,n.innerHTML}),B=["id","class"],H=Object(V.curryRight)(P.a)({whiteList:Object.entries(P.a.whiteList).reduce(function(t,e){var r=I()(e),n=r[0],o=r.slice(1);return t[n]=[].concat(B,C()(o)),t},{}),stripIgnoreTag:!0,stripIgnoreTagBody:["script"],allowCommentTag:!1,onIgnoreTagAttr:function(t,e,r){if("data-"===e.substr(0,5))return"".concat(e,'="').concat(P.a.escapeAttrValue(r),'"')}}),M=function(t){var e=t.children,r=t.unfiltered,n=void 0!==r&&r,i=T()(t,["children","unfiltered"]),a=[z];return n||a.unshift(H),Object(o.createElement)(o.RawHTML,i,Object(l.compose)(a)(e))},N={title:Object(i.__)("Custom HTML (Advanced HTML Editor Blocks)","advanced-html-editor-blocks"),description:Object(i.__)("Add custom HTML code and preview it as you edit.","advanced-html-editor-blocks"),icon:Object(o.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"96",height:"96",viewBox:"0 0 96 96"},Object(o.createElement)(a.Polygon,{points:"70.8,66.8 65.2,61.2 78.3,48 65.2,34.8 70.8,29.2 89.7,48 "}),Object(o.createElement)(a.Polygon,{points:"25.2,66.8 6.3,48 25.2,29.2 30.8,34.8 17.7,48 30.8,61.2 "}),Object(o.createElement)(a.Rect,{x:"23.3",y:"44",transform:"matrix(0.2424 -0.9702 0.9702 0.2424 -10.2054 82.9303)",width:"49.5",height:"8"})),category:"formatting",keywords:[Object(i.__)("embed"),Object(i.__)("html")],supports:{align:["full"],html:!1},attributes:{content:{type:"string",source:"html",selector:"div"}},transforms:{from:[{type:"block",blocks:["core/html"],transform:function(t){var e=t.content;return Object(c.createBlock)("advanced-html-editor-blocks/html",{content:e})}}],to:[{type:"block",blocks:["core/html"],transform:function(t){var e=t.content;return Object(c.createBlock)("core/html",{content:e})}}]},edit:Object(l.compose)(Object(l.withState)({isPreview:!1}))(function(t){var e=t.attributes,r=t.setAttributes,n=t.setState,c=t.isPreview,l=t.clientId,u=t.className,f=Object(o.createElement)(s.BlockControls,null,Object(o.createElement)("div",{className:"components-toolbar"},Object(o.createElement)("button",{className:"components-tab-button ".concat(c?"":"is-active"),onClick:function(){return n({isPreview:!1})}},Object(o.createElement)("span",null,"HTML")),Object(o.createElement)("button",{className:"components-tab-button ".concat(c?"is-active":""),onClick:function(){return n({isPreview:!0})}},Object(o.createElement)("span",null,Object(i.__)("Preview"))))),d=e.content?Object(o.createElement)(M,{className:u},e.content):Object(o.createElement)(a.Placeholder,null,Object(i.__)("No Content","advanced-html-editor-blocks")),p=Object(o.createElement)(A,{id:"editor-".concat(l),value:e.content,onChange:function(t){return r({content:t})},placeholder:Object(i.__)("Write HTML…"),"aria-label":Object(i.__)("HTML")});return Object(o.createElement)("div",{className:"wp-block-html advanced-html-editor-blocks-html"},f,Object(o.createElement)(a.Disabled.Consumer,null,function(t){return c||t?d:p}))}),save:function(t){var e=t.attributes,r=t.className;return Object(o.createElement)(M,{className:r},e.content)}};Object(c.registerBlockType)("advanced-html-editor-blocks/html",N);var D={title:Object(i.__)("Code (Advanced HTML Editor Blocks)","advanced-html-editor-blocks"),description:Object(i.__)("Display code snippets that respect your spacing and tabs.","advanced-html-editor-blocks"),icon:Object(o.createElement)(a.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(o.createElement)(a.Path,{d:"M0,0h24v24H0V0z",fill:"none"}),Object(o.createElement)(a.Path,{d:"M9.4,16.6L4.8,12l4.6-4.6L8,6l-6,6l6,6L9.4,16.6z M14.6,16.6l4.6-4.6l-4.6-4.6L16,6l6,6l-6,6L14.6,16.6z"})),category:"formatting",keywords:[Object(i.__)("embed"),Object(i.__)("html")],supports:{html:!1},attributes:{content:{type:"string",source:"text",selector:"code"},mode:{type:"string",source:"attribute",selector:"pre",attribute:"data-lang",default:"htmlmixed"}},transforms:{from:[{type:"block",blocks:["core/code"],transform:function(t){var e=t.content;return Object(c.createBlock)("advanced-html-editor-blocks/code",{content:e})}}],to:[{type:"block",blocks:["core/code"],transform:function(t){var e=t.content;return Object(c.createBlock)("core/code",{content:e})}}]},edit:function(t){var e=t.attributes,r=t.setAttributes,n=t.clientId,c=t.className,l=Object(i.sprintf)(Object(i.__)("%s Block Seetting","advanced-html-editor-blocks")),u=Object(o.createElement)(a.SelectControl,{label:"Mode",value:e.mode,options:[{value:"htmlmixed",label:"HTML"},{value:"text/css",label:"CSS"},{value:"javascript",label:"JavaScript"}],onChange:function(t){r({mode:t||void 0})}}),f=Object(o.createElement)(s.InspectorControls,null,Object(o.createElement)(a.PanelBody,{title:l},u));return Object(o.createElement)("div",{className:"wp-block-code advanced-html-editor-blocks-code ".concat(c)},f,Object(o.createElement)(A,{mode:e.mode,id:"editor-".concat(n),value:e.content,onChange:function(t){return r({content:t})},placeholder:Object(i.__)("Write Code…"),"aria-label":Object(i.__)("Code")}))},save:function(t){var e=t.attributes,r=t.className;return Object(o.createElement)("div",{className:"wp-block-code advanced-html-editor-blocks-code ".concat(r)},Object(o.createElement)("pre",{"data-lang":e.mode},Object(o.createElement)("code",null,e.content)))}};Object(c.registerBlockType)("advanced-html-editor-blocks/code",D)}]);