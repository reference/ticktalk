!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s=0)}([function(e,t,n){"use strict";importScripts("./pngquant.min.js");var r=self,o=Date.now;function a(e){r.postMessage({type:"stdout",data:e})}addEventListener("message",(function(e){var t=e.data;if("command"===t.type){var n={print:a,printErr:a,files:t.files||[],arguments:t.arguments||[]};r.postMessage({type:"start",data:JSON.stringify(n.arguments)}),a("Received command: "+JSON.stringify(n.arguments));var i=o(),s=pngquant(t.file.data,t.arguments,a),u=o()-i;a("Finished processing (took "+u+"ms)"),r.postMessage({type:"done",data:[s],time:u,id:t.id})}})),r.postMessage({type:"ready"})}]);