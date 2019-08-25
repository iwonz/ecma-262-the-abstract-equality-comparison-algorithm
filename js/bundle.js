!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function r(e){return e}function i(e){return typeof e}function o(e){return Number(e)}n.d(t,"a",function(){return l});var s={1:{selector:"li:nth-child(1)",description:"If Type(x) is the same as Type(y), then"},"1 a":{selector:"li:nth-child(1) > ol > li:nth-child(1)",description:"If Type(x) is Undefined, return true."},"1 b":{selector:"li:nth-child(1) > ol > li:nth-child(2)",description:"If Type(x) is Null, return true."},"1 c":{selector:"li:nth-child(1) > ol > li:nth-child(3)",description:"If Type(x) is Number, then"},"1 c i":{selector:"li:nth-child(1) > ol > li:nth-child(3) > ol > li:nth-child(1)",description:"If x is NaN, return false."},"1 c ii":{selector:"li:nth-child(1) > ol > li:nth-child(3) > ol > li:nth-child(2)",description:"If y is NaN, return false."},"1 c iii":{selector:"li:nth-child(1) > ol > li:nth-child(3) > ol > li:nth-child(3)",description:"If x is the same Number value as y, return true."},"1 c iv":{selector:"li:nth-child(1) > ol > li:nth-child(3) > ol > li:nth-child(4)",description:"If x is +0 and y is −0, return true."},"1 c v":{selector:"li:nth-child(1) > ol > li:nth-child(3) > ol > li:nth-child(5)",description:"If x is −0 and y is +0, return true."},"1 c vi":{selector:"li:nth-child(1) > ol > li:nth-child(3) > ol > li:nth-child(6)",description:"Return false."},"1 d":{selector:"li:nth-child(1) > ol > li:nth-child(4)",description:"If Type(x) is String, then return true if x and y are exactly the same sequence of characters (same length and same characters in corresponding positions). Otherwise, return false."},"1 e":{selector:"li:nth-child(1) > ol > li:nth-child(5)",description:"If Type(x) is Boolean, return true if x and y are both true or both false. Otherwise, return false."},"1 f":{selector:"li:nth-child(1) > ol > li:nth-child(6)",description:"Return true if x and y refer to the same object. Otherwise, return false."},2:{selector:"li:nth-child(2)",description:"If x is null and y is undefined, return true."},3:{selector:"li:nth-child(3)",description:"If x is undefined and y is null, return true."},4:{selector:"li:nth-child(4)",description:"If Type(x) is Number and Type(y) is String, return the result of the comparison x == ToNumber(y)."},5:{selector:"li:nth-child(5)",description:"If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y."},6:{selector:"li:nth-child(6)",description:"If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y."},7:{selector:"li:nth-child(7)",description:"If Type(y) is Boolean, return the result of the comparison x == ToNumber(y)."},8:{selector:"li:nth-child(8)",description:"If Type(x) is either String or Number and Type(y) is Object, return the result of the comparison x == ToPrimitive(y)."},9:{selector:"li:nth-child(9)",description:"If Type(x) is Object and Type(y) is either String or Number, return the result of the comparison ToPrimitive(x) == y."},10:{selector:"li:nth-child(10)",description:"Return false."}};function l(e,t){var n=[];function a(r,i){return Array.isArray(r)?n.push.apply(n,r):n.push({operands:{x:e,y:t},section:r,selector:s[r].selector,description:s[r].description,result:i}),n}var c=i(e),u=i(t);if(c===u){if(a("1"),"undefined"===c)return a("1 a",!0);if("null"===c)return a("1 b",!0);if("number"===c)return a("1 c"),isNaN(e)?a("1 c i",!1):isNaN(t)?a("1 c ii",!1):e===t?a("1 c iii",!0):0===e&&-0===t?a("1 c iv",!0):-0===e&&0===t?a("1 c v",!0):a("1 c vi",!1);if("string"===c)return a("1 d",e===t);if("boolean"===c)return a("1 e",!0===e&&!0===t||!1===e&&!1===t);if("object"===c)return a("1 f",e===t)}return null===e&&void 0===t?a("2",!0):void 0===e&&null===t?a("3",!0):"number"===c&&"string"===u?(a("4"),a(l(e,o(t)))):"string"===c&&"number"===u?(a("5"),a(l(o(e),t))):"boolean"===c?(a("6"),a(l(o(e),t))):"boolean"===u?(a("7"),a(l(e,o(t)))):"string"===c||"number"===c&&"object"===u?(a("8"),a(l(e,r(t)))):"object"===c&&"string"===u||"number"===u?(a("9"),a(l(r(e),t))):a("10")}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_scss_index_scss__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__),_abstract_equality__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0);function appendOperandsElement(e,t,n,r){var i=document.createElement("span");i.className="operands",i.innerHTML="<b>"+r+"</b>";var o=document.createElement("span");o.className="operands__operand operands__operand_x",o.innerText="x: "+JSON.stringify(t.x),i.appendChild(o);var s=document.createElement("span");if(s.className="operands__operand operands__operand_y",s.innerText="y: "+JSON.stringify(t.y),i.appendChild(s),void 0!==n){var l=document.createElement("span");l.className="operands__result",l.innerText="return: "+n,i.appendChild(l)}e.insertBefore(i,e.childNodes[1])}var animationTimeoutIds=[],form=document.getElementById("form"),sections=document.getElementById("sections"),x=document.getElementById("x"),y=document.getElementById("y");form.addEventListener("submit",function(event){event.preventDefault(),animationTimeoutIds.forEach(clearTimeout),sections.querySelectorAll("li").forEach(function(e){e.style.color=null}),sections.querySelectorAll(".operands").forEach(function(e){e.parentNode.removeChild(e)});var result=Object(_abstract_equality__WEBPACK_IMPORTED_MODULE_1__.a)(eval(x.value),eval(y.value));result.forEach(function(e,t){var n=setTimeout(function(){var n=document.querySelector("#sections > "+e.selector);appendOperandsElement(n,e.operands,e.result,t+1),n.style.color="mediumseagreen"},1e3*t);animationTimeoutIds.push(n)})})},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(5)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,"*{box-sizing:border-box}body,html{height:100%}body{color:#333;font-family:Cambria,Palatino Linotype,Palatino,Liberation Serif,serif;font-size:17px;line-height:135%;background-color:#f1f1f1;display:flex;align-items:center;justify-content:center}.wrapper{background-color:#fff;width:80%;padding:15px;border-radius:5px}#form{width:100%;display:flex;align-items:center}#form input{flex-grow:1;height:60px;line-height:60px;border:none;border-bottom:5px solid #333;outline:none;text-align:center;font-size:36px;border-radius:60px}#form span{margin-left:15px;margin-right:15px}#form button{width:10%;border:none;background-color:#333;color:#fff;font-size:36px;height:60px;outline:none;margin-left:15px;border-radius:60px}#sections{line-height:1.4em}#sections li{color:#333}.operands{font-size:12px;margin-left:5px;color:#fff}.operands__operand,.operands__result,.operands b{padding:5px 7px;background-color:#333;color:#fff;border-radius:20px}.operands__operand,.operands__result{margin-left:5px}.operands__result,.operands b{color:#ff0}",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(a," */")),o=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[n].concat(o).concat([i]).join("\n")}var s,l,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var l=e[s];null!=l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="(".concat(l[2],") and (").concat(n,")")),t.push(l))}},t}},function(e,t,n){"use strict";var r,i={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function l(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],l={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}function a(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id],s=0;if(o){for(o.refs++;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(_(r.parts[s],t))}else{for(var l=[];s<r.parts.length;s++)l.push(_(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:l}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach(function(n){t.setAttribute(n,e.attributes[n])}),"function"==typeof e.insert)e.insert(t);else{var i=s(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i&&e.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function _(e,t){var n,r,i;if(t.singleton){var o=m++;n=h||(h=c(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=c(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e,t);return a(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o],c=i[s.id];c&&(c.refs--,r.push(c))}e&&a(l(e,t),t);for(var u=0;u<r.length;u++){var d=r[u];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete i[d.id]}}}}}]);