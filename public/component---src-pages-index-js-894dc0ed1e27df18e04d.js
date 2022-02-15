/*! For license information please see component---src-pages-index-js-894dc0ed1e27df18e04d.js.LICENSE.txt */
(self.webpackChunknutrigenomics=self.webpackChunknutrigenomics||[]).push([[678],{2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(t,s){if(t===s)return!0;if(t&&s&&"object"==typeof t&&"object"==typeof s){if(t.constructor!==s.constructor)return!1;var a,u,c,l;if(Array.isArray(t)){if((a=t.length)!=s.length)return!1;for(u=a;0!=u--;)if(!o(t[u],s[u]))return!1;return!0}if(n&&t instanceof Map&&s instanceof Map){if(t.size!==s.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!s.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!o(u.value[1],s.get(u.value[0])))return!1;return!0}if(r&&t instanceof Set&&s instanceof Set){if(t.size!==s.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!s.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(s)){if((a=t.length)!=s.length)return!1;for(u=a;0!=u--;)if(t[u]!==s[u])return!1;return!0}if(t.constructor===RegExp)return t.source===s.source&&t.flags===s.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===s.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===s.toString();if((a=(c=Object.keys(t)).length)!==Object.keys(s).length)return!1;for(u=a;0!=u--;)if(!Object.prototype.hasOwnProperty.call(s,c[u]))return!1;if(e&&t instanceof Element)return!1;for(u=a;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!t.$$typeof)&&!o(t[c[u]],s[c[u]]))return!1;return!0}return t!=t&&s!=s}t.exports=function(t,e){try{return o(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(t,e,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function l(){u=t(c.map((function(t){return t.props}))),p.canUseDOM?e(u):n&&(u=n(u))}var p=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,c=[],t};var s=i.prototype;return s.UNSAFE_componentWillMount=function(){c.push(this),l()},s.componentDidUpdate=function(){l()},s.componentWillUnmount=function(){var t=c.indexOf(this);c.splice(t,1),l()},s.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return s(p,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),s(p,"canUseDOM",a),p}}},4952:function(t){var e;e=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(1),o=n(3),s=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i.initializer.load(this,n,e),this.begin()}return r(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),i=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=o.htmlParser.typeHtmlChars(t,e,n);var r=0,s=t.substr(e);if("^"===s.charAt(0)&&/^\^\d+/.test(s)){var a=1;a+=(s=/\d+/.exec(s)[0]).length,r=parseInt(s),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+a),n.toggleBlinking(!0)}if("`"===s.charAt(0)){for(;"`"!==t.substr(e+i).charAt(0)&&(i++,!(e+i>t.length)););var u=t.substring(0,e),c=t.substring(u.length+1,e+i),l=t.substring(e+i+1);t=u+c+l,i--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,i),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),r)}),r):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var r=t.substr(0,e);this.replaceText(r),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=o.htmlParser.backSpaceHtmlChars(t,e,n);var r=t.substr(0,e);if(n.replaceText(r),n.smartBackspace){var i=n.strings[n.arrayPos+1];i&&r===i.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),r)}else this.setPauseStatus(t,e,!1)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=s,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(2),a=(r=s)&&r.__esModule?r:{default:r},u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return o(t,[{key:"load",value:function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=i({},a.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var r=Array.prototype.slice.apply(t.stringsElement.children),o=r.length;if(o)for(var s=0;s<o;s+=1){var u=r[s];t.strings.push(u.innerHTML.trim())}}for(var s in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[s]=s;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.type="text/css",n.setAttribute(e,!0);var r="";t.showCursor&&(r+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(r+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==n.length&&(n.innerHTML=r,document.body.appendChild(n))}}}]),t}();e.default=u;var c=new u;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e.default=n,t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if("<"===r||"&"===r){var i="";for(i="<"===r?">":";";t.substr(e+1).charAt(0)!==i&&!(1+ ++e>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if(">"===r||";"===r){var i="";for(i=">"===r?"<":"&";t.substr(e-1).charAt(0)!==i&&!(--e<0););e--}return e}}]),t}();e.default=r;var i=new r;e.htmlParser=i}])},t.exports=e()},9759:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return wt}});var r,i,o,s,a=n(7294),u=n(396),c=n(5697),l=n.n(c),p=n(4839),f=n.n(p),h=n(2993),d=n.n(h),y=n(6494),m=n.n(y),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(t){return w[t]})),"charset"),k="cssText",C="href",E="http-equiv",S="innerHTML",O="itemprop",A="name",P="property",j="rel",N="src",x="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",_="defer",M="encodeSpecialCharacters",B="onChangeClientState",D="titleTemplate",R=Object.keys(L).reduce((function(t,e){return t[L[e]]=e,t}),{}),H=[w.NOSCRIPT,w.SCRIPT,w.STYLE],q="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Y=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},K=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},V=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},W=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(t){var e=Z(t,w.TITLE),n=Z(t,D);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=Z(t,I);return e||r||void 0},J=function(t){return Z(t,B)||function(){}},G=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return U({},t,e)}),{})},Q=function(t,e){return e.filter((function(t){return void 0!==t[w.BASE]})).map((function(t){return t[w.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},X=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&it("Helmet: "+t+' should be of type "Array". Instead found type "'+F(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var i={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),s=0;s<o.length;s++){var a=o[s],u=a.toLowerCase();-1===e.indexOf(u)||n===j&&"canonical"===t[n].toLowerCase()||u===j&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(a)||a!==S&&a!==k&&a!==O||(n=a)}if(!n||!t[n])return!1;var c=t[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][c]&&(i[n][c]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),s=0;s<o.length;s++){var a=o[s],u=m()({},r[a],i[a]);r[a]=u}return t}),[]).reverse()},Z=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},tt=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){tt(t)}),0)}),et=function(t){return clearTimeout(t)},nt="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||tt:n.g.requestAnimationFrame||tt,rt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||et:n.g.cancelAnimationFrame||et,it=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,st=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,s=t.metaTags,a=t.noscriptTags,u=t.onChangeClientState,c=t.scriptTags,l=t.styleTags,p=t.title,f=t.titleAttributes;ct(w.BODY,r),ct(w.HTML,i),ut(p,f);var h={baseTag:lt(w.BASE,n),linkTags:lt(w.LINK,o),metaTags:lt(w.META,s),noscriptTags:lt(w.NOSCRIPT,a),scriptTags:lt(w.SCRIPT,c),styleTags:lt(w.STYLE,l)},d={},y={};Object.keys(h).forEach((function(t){var e=h[t],n=e.newTags,r=e.oldTags;n.length&&(d[t]=n),r.length&&(y[t]=h[t].oldTags)})),e&&e(),u(t,d,y)},at=function(t){return Array.isArray(t)?t.join(""):t},ut=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ct(w.TITLE,e)},ct=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(q),i=r?r.split(","):[],o=[].concat(i),s=Object.keys(e),a=0;a<s.length;a++){var u=s[a],c=e[u]||"";n.getAttribute(u)!==c&&n.setAttribute(u,c),-1===i.indexOf(u)&&i.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var p=o.length-1;p>=0;p--)n.removeAttribute(o[p]);i.length===o.length?n.removeAttribute(q):n.getAttribute(q)!==s.join(",")&&n.setAttribute(q,s.join(","))}},lt=function(t,e){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],s=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===S)n.innerHTML=e.innerHTML;else if(r===k)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var a=void 0===e[r]?"":e[r];n.setAttribute(r,a)}n.setAttribute(q,"true"),i.some((function(t,e){return s=e,n.isEqualNode(t)}))?i.splice(s,1):o.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:o}},pt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[L[n]||n]=t[n],e}),e)},ht=function(t,e,n){switch(t){case w.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[q]=!0,i=ft(n,r),[a.createElement(w.TITLE,i,t)];var t,n,r,i},toString:function(){return function(t,e,n,r){var i=pt(n),o=at(e);return i?"<"+t+' data-react-helmet="true" '+i+">"+W(o,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+W(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case g:case b:return{toComponent:function(){return ft(e)},toString:function(){return pt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})[q]=!0,r);return Object.keys(e).forEach((function(t){var n=L[t]||t;if(n===S||n===k){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),a.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===S||t===k)})).reduce((function(t,e){var i=void 0===r[e]?e:e+'="'+W(r[e],n)+'"';return t?t+" "+i:i}),""),o=r.innerHTML||r.cssText||"",s=-1===H.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+i+(s?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,o=t.linkTags,s=t.metaTags,a=t.noscriptTags,u=t.scriptTags,c=t.styleTags,l=t.title,p=void 0===l?"":l,f=t.titleAttributes;return{base:ht(w.BASE,e,r),bodyAttributes:ht(g,n,r),htmlAttributes:ht(b,i,r),link:ht(w.LINK,o,r),meta:ht(w.META,s,r),noscript:ht(w.NOSCRIPT,a,r),script:ht(w.SCRIPT,u,r),style:ht(w.STYLE,c,r),title:ht(w.TITLE,{title:p,titleAttributes:f},r)}},yt=f()((function(t){return{baseTag:Q([C,x],t),bodyAttributes:G(g,t),defer:Z(t,_),encode:Z(t,M),htmlAttributes:G(b,t),linkTags:X(w.LINK,[j,C],t),metaTags:X(w.META,[A,T,E,P,O],t),noscriptTags:X(w.NOSCRIPT,[S],t),onChangeClientState:J(t),scriptTags:X(w.SCRIPT,[N,S],t),styleTags:X(w.STYLE,[k],t),title:$(t),titleAttributes:G(v,t)}}),(function(t){ot&&rt(ot),t.defer?ot=nt((function(){st(t,(function(){ot=null}))})):(st(t),ot=null)}),dt)((function(){return null})),mt=(i=yt,s=o=function(t){function e(){return z(this,e),V(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!d()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:e};case w.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,i=t.newChildProps,o=t.nestedChildren;return U({},r,((e={})[n.type]=[].concat(r[n.type]||[],[U({},i,this.mapNestedChildrenToProps(n,o))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,i=t.newProps,o=t.newChildProps,s=t.nestedChildren;switch(r.type){case w.TITLE:return U({},i,((e={})[r.type]=s,e.titleAttributes=U({},o),e));case w.BODY:return U({},i,{bodyAttributes:U({},o)});case w.HTML:return U({},i,{htmlAttributes:U({},o)})}return U({},i,((n={})[r.type]=U({},o),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=U({},e);return Object.keys(t).forEach((function(e){var r;n=U({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return a.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,o=i.children,s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[R[n]||n]=t[n],e}),e)}(K(i,["children"]));switch(n.warnOnInvalidChildren(t,o),t.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:s,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:s,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=K(t,["children"]),r=U({},n);return e&&(r=this.mapChildrenToProps(e,r)),a.createElement(i,r)},Y(e,null,[{key:"canUseDOM",set:function(t){i.canUseDOM=t}}]),e}(a.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var t=i.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},s);mt.renderStatic=mt.rewind;var gt=n(4952),bt=n.n(gt),vt=n.p+"static/background-vdo-e04eec5a52d4613a7997c397cdb60c53.mp4",wt=function(){var t=(0,a.useRef)(null),e=(0,a.useRef)(null);return(0,a.useEffect)((function(){return e.current=new(bt())(t.current,{strings:["...",'<span class="highlight">ตาเห็นรูป รูปไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</span>','<span class="highlight">หูได้ยินเสียง เสียงไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</span>','<span class="highlight">จมูกได้กลิ่น กลิ่นไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</span>','<span class="highlight">ลิ้นได้รส รสไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</span>','<span class="highlight">กายสัมผัส ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</span>','<span class="highlight">ใจคิดนึก ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ</span>'],typeSpeed:50,loop:!0}),function(){e.current.destroy()}}),[]),a.createElement(a.Fragment,null,a.createElement(mt,null,a.createElement("title",null,"I am Sirisak Chantanate"),a.createElement("meta",{itemprop:"name",content:"Sirisak Chantanate"}),a.createElement("meta",{name:"Description",content:"Nutrigenomics lover, I really love share the health knowledge."}),a.createElement("meta",{name:"twitter:title",content:"Sirisak Chantanate"}),a.createElement("meta",{name:"twitter:description",content:"Nutrigenomics lover, I really love share the health knowledge."}),a.createElement("meta",{property:"og:title"}),a.createElement("meta",{property:"og:url",content:"https://openmymai.github.io/"}),a.createElement("meta",{property:"og:description",content:"Nutrigenomics lover, I really love share the health knowledge."})),a.createElement("div",{className:"overflow-wrap"},a.createElement("section",{id:"home",className:"flex section--dark"},a.createElement("div",{className:"bg-video"},a.createElement("video",{className:"bg-video__content",autoPlay:!0,loop:!0,muted:!0},a.createElement("source",{src:vt,type:"video/mp4"}))),a.createElement("div",{className:"flex"},a.createElement("div",{className:"profile"},a.createElement("a",{"data-a11y":"false","aria-label":"Link to https://openmymai.github.io/nutrigenomics",href:"https://openmymai.github.io/nutrigenomics",className:""},a.createElement(u.S,{className:"profile__image",src:"../images/me.jpeg",__imageData:n(7069)})),a.createElement("div",{className:"profile__social-group"},a.createElement("span",{className:"profile__social-network"},a.createElement("a",{"data-a11y":"false","aria-label":"Link to https://www.instagram.com/neutronix/",href:"https://www.instagram.com/neutronix/",className:""},a.createElement("i",{className:"fab fa-instagram"}))),a.createElement("span",{className:"profile__social-network"},a.createElement("a",{"data-a11y":"false","aria-label":"Link to https://www.linkedin.com/in/sirisak-chantanate-b0b786111/",href:"https://www.linkedin.com/in/sirisak-chantanate-b0b786111/",className:""},a.createElement("i",{className:"fab fa-linkedin"}))),a.createElement("span",{className:"profile__social-network"},a.createElement("a",{"data-a11y":"false","aria-label":"Link to https://github.com/openmymai",href:"https://github.com/openmymai",className:""},a.createElement("i",{className:"fab fa-github"}))),a.createElement("span",{className:"profile__social-network"},a.createElement("a",{"data-a11y":"false","aria-label":"Link to https://openmymai.github.io/nutrigenomics",href:"https://openmymai.github.io/nutrigenomics",className:""},a.createElement("i",{className:"fas fa-globe-asia"}))))),a.createElement("div",{className:"profile-description"},a.createElement("div",{className:"text"},"Hello,",a.createElement("div",{className:"type-wrap"},a.createElement("span",{style:{whiteSpace:"pre"},ref:t}))))))))}},7069:function(t){"use strict";t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8a898","images":{"fallback":{"src":"/buddhist/static/9421663537978634f65d4e046575a4d7/19822/me.jpg","srcSet":"/buddhist/static/9421663537978634f65d4e046575a4d7/aa131/me.jpg 262w,\\n/buddhist/static/9421663537978634f65d4e046575a4d7/556c1/me.jpg 523w,\\n/buddhist/static/9421663537978634f65d4e046575a4d7/19822/me.jpg 1046w","sizes":"(min-width: 1046px) 1046px, 100vw"},"sources":[{"srcSet":"/buddhist/static/9421663537978634f65d4e046575a4d7/2e514/me.webp 262w,\\n/buddhist/static/9421663537978634f65d4e046575a4d7/1ee7f/me.webp 523w,\\n/buddhist/static/9421663537978634f65d4e046575a4d7/6741f/me.webp 1046w","type":"image/webp","sizes":"(min-width: 1046px) 1046px, 100vw"}]},"width":1046,"height":1043}')}}]);
//# sourceMappingURL=component---src-pages-index-js-894dc0ed1e27df18e04d.js.map