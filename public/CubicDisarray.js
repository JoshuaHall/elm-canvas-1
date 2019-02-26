!function(r){"use strict";function n(r,n,t){return t.a=r,t.f=n,t}function e(t){return n(2,t,function(n){return function(r){return t(n,r)}})}function t(e){return n(3,e,function(t){return function(n){return function(r){return e(t,n,r)}}})}function u(u){return n(4,u,function(e){return function(t){return function(n){return function(r){return u(e,t,n,r)}}}})}function a(a){return n(5,a,function(u){return function(e){return function(t){return function(n){return function(r){return a(u,e,t,n,r)}}}}})}function i(i){return n(6,i,function(a){return function(u){return function(e){return function(t){return function(n){return function(r){return i(a,u,e,t,n,r)}}}}}})}function h(r,n,t){return 2===r.a?r.f(n,t):r(n)(t)}function $(r,n,t,e){return 3===r.a?r.f(n,t,e):r(n)(t)(e)}function d(r,n,t,e,u){return 4===r.a?r.f(n,t,e,u):r(n)(t)(e)(u)}function s(r,n,t,e,u,a){return 5===r.a?r.f(n,t,e,u,a):r(n)(t)(e)(u)(a)}function b(r,n,t,e,u,a,i){return 6===r.a?r.f(n,t,e,u,a,i):r(n)(t)(e)(u)(a)(i)}var l={$:0};function g(r,n){return{$:1,a:r,b:n}}var f=e(g);function p(r){for(var n=l,t=r.length;t--;)n=g(r[t],n);return n}function o(r){for(var n=[];r.b;r=r.b)n.push(r.a);return n}function c(r,n,t){if("object"!=typeof r)return r===n?0:r<n?-1:1;if(!r.$)return(t=c(r.a,n.a))?t:(t=c(r.b,n.b))?t:c(r.c,n.c);for(;r.b&&n.b&&!(t=c(r.a,n.a));r=r.b,n=n.b);return t||(r.b?1:n.b?-1:0)}var v=0;function m(r,n){return{a:r,b:n}}function y(r,n){var t={};for(var e in r)t[e]=r[e];for(var e in n)t[e]=n[e];return t}function k(r,n){if("string"==typeof r)return r+n;if(!r.b)return n;var t=g(r.a,n);r=r.b;for(var e=t;r.b;r=r.b)e=e.b=g(r.a,n);return t}var w=t(function(r,n,t){for(var e=Array(r),u=0;u<r;u++)e[u]=t(n+u);return e}),A=e(function(r,n){for(var t=Array(r),e=0;e<r&&n.b;e++)t[e]=n.a,n=n.b;return t.length=e,m(t,n)});function j(r){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}var _=e(function(r,n){return r+n}),T=Math.cos,N=Math.sin;var E=Math.ceil,L=Math.floor,x=Math.round,C=Math.log;var q=e(function(r,n){return n.join(r)});function P(r){return r+""}var F=e(function(r,n){return z(r,I(n))});function z(r,n){switch(r.$){case 3:return"boolean"==typeof n?$n(n):M("a BOOL",n);case 2:return"number"!=typeof n?M("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?$n(n):!isFinite(n)||n%1?M("an INT",n):$n(n);case 4:return"number"==typeof n?$n(n):M("a FLOAT",n);case 6:return"string"==typeof n?$n(n):n instanceof String?$n(n+""):M("a STRING",n);case 9:return null===n?$n(r.c):M("null",n);case 5:return $n(D(n));case 7:return Array.isArray(n)?O(r.b,n,p):M("a LIST",n);case 8:return Array.isArray(n)?O(r.b,n,S):M("an ARRAY",n);case 10:var t=r.d;if("object"!=typeof n||null===n||!(t in n))return M("an OBJECT with a field named `"+t+"`",n);var e=z(r.b,n[t]);return Hr(e)?e:hn(h(pn,t,e.a));case 11:var u=r.e;if(!Array.isArray(n))return M("an ARRAY",n);if(n.length<=u)return M("a LONGER array. Need index "+u+" but only see "+n.length+" entries",n);e=z(r.b,n[u]);return Hr(e)?e:hn(h(mn,u,e.a));case 12:if("object"!=typeof n||null===n||Array.isArray(n))return M("an OBJECT",n);var a=l;for(var i in n)if(n.hasOwnProperty(i)){e=z(r.b,n[i]);if(!Hr(e))return hn(h(pn,i,e.a));a=g(m(i,e.a),a)}return $n(un(a));case 13:for(var f=r.f,o=r.g,c=0;c<o.length;c++){e=z(o[c],n);if(!Hr(e))return e;f=f(e.a)}return $n(f);case 14:e=z(r.b,n);return Hr(e)?z(r.h(e.a),n):e;case 15:for(var v=l,s=r.g;s.b;s=s.b){e=z(s.a,n);if(Hr(e))return e;v=g(e.a,v)}return hn(yn(un(v)));case 1:return hn(h(gn,r.a,D(n)));case 0:return $n(r.a)}}function O(r,n,t){for(var e=n.length,u=Array(e),a=0;a<e;a++){var i=z(r,n[a]);if(!Hr(i))return hn(h(mn,a,i.a));u[a]=i.a}return $n(t(u))}function S(n){return h(dn,n.length,function(r){return n[r]})}function M(r,n){return hn(h(gn,"Expecting "+r,D(n)))}function B(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return r.c===n.c;case 7:case 8:case 12:return B(r.b,n.b);case 10:return r.d===n.d&&B(r.b,n.b);case 11:return r.e===n.e&&B(r.b,n.b);case 13:return r.f===n.f&&R(r.g,n.g);case 14:return r.h===n.h&&B(r.b,n.b);case 15:return R(r.g,n.g)}}function R(r,n){var t=r.length;if(t!==n.length)return!1;for(var e=0;e<t;e++)if(!B(r[e],n[e]))return!1;return!0}function D(r){return r}function I(r){return r}var Y=t(function(r,n,t){return t[r]=I(n),t});D(null);function W(r){return{$:0,a:r}}function G(r){return{$:2,b:r,c:null}}var J=e(function(r,n){return{$:3,b:r,d:n}});var K=0;function Q(r){var n={$:0,e:K++,f:r,g:null,h:[]};return Z(n),n}function H(n){return G(function(r){r(W(Q(n)))})}function U(r,n){r.h.push(n),Z(r)}var V=!1,X=[];function Z(r){if(X.push(r),!V){for(V=!0;r=X.shift();)rr(r);V=!1}}function rr(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,Z(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}function nr(r,n,t,e,u,a){var i=h(F,r,D(n?n.flags:void 0));Hr(i)||j(2);var f={},o=(i=t(i.a)).a,c=a(s,o),v=function(r,n){var t;for(var e in tr){var u=tr[e];u.a&&((t=t||{})[e]=u.a(e,n)),r[e]=er(u,n)}return t}(f,s);function s(r,n){c(o=(i=h(e,r,o)).a,n),fr(f,i.b,u(o))}return fr(f,i.b,u(o)),v?{ports:v}:{}}var tr={};function er(r,n){var e={g:n,h:void 0},u=r.c,a=r.d,i=r.e,f=r.f;function o(t){return h(J,o,{$:5,b:function(r){var n=r.a;return 0===r.$?$(a,e,n,t):i&&f?d(u,e,n.i,n.j,t):$(u,e,i?n.i:n.j,t)}})}return e.h=Q(h(J,o,r.b))}var ur=e(function(n,t){return G(function(r){n.g(t),r(W(v))})});function ar(n){return function(r){return{$:1,k:n,l:r}}}function ir(r){return{$:2,m:r}}function fr(r,n,t){var e={};for(var u in or(!0,n,e,null),or(!1,t,e,null),r)U(r[u],{$:"fx",a:e[u]||{i:l,j:l}})}function or(r,n,t,e){switch(n.$){case 1:var u=n.k,a=function(r,n,t,e){function u(r){for(var n=t;n;n=n.q)r=n.p(r);return r}return h(r?tr[n].e:tr[n].f,u,e)}(r,u,e,n.l);return void(t[u]=function(r,n,t){return t=t||{i:l,j:l},r?t.i=g(n,t.i):t.j=g(n,t.j),t}(r,a,t[u]));case 2:for(var i=n.m;i.b;i=i.b)or(r,i.a,t,e);return;case 3:return void or(r,n.o,t,{p:n.n,q:e})}}var cr,vr="undefined"!=typeof document?document:{};function sr(r,n){r.appendChild(n)}function br(r){return{$:0,a:r}}var lr=e(function(a,i){return e(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:gr(r),e:t,f:a,b:e}})})(void 0);e(function(a,i){return e(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:gr(r),e:t,f:a,b:e}})})(void 0);var dr=e(function(r,n){return{$:"a2",n:r,o:n}}),hr=e(function(r,n){return{$:"a3",n:r,o:n}});var $r;function gr(r){for(var n={};r.b;r=r.b){var t=r.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=n[e]||(n[e]={});"a3"===e&&"class"===u?pr(i,u,a):i[u]=a}else"className"===u?pr(n,u,I(a)):n[u]=I(a)}return n}function pr(r,n,t){var e=r[n];r[n]=e?e+" "+t:t}function mr(r,n){var t=r.$;if(5===t)return mr(r.k||(r.k=r.m()),n);if(0===t)return vr.createTextNode(r.a);if(4===t){for(var e=r.k,u=r.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:n};return(i=mr(e,a)).elm_event_node_ref=a,i}if(3===t)return yr(i=r.h(r.g),n,r.d),i;var i=r.f?vr.createElementNS(r.f,r.c):vr.createElement(r.c);cr&&"a"==r.c&&i.addEventListener("click",cr(i)),yr(i,n,r.d);for(var f=r.e,o=0;o<f.length;o++)sr(i,mr(1===t?f[o]:f[o].b,n));return i}function yr(r,n,t){for(var e in t){var u=t[e];"a1"===e?kr(r,u):"a0"===e?jr(r,n,u):"a3"===e?wr(r,u):"a4"===e?Ar(r,u):("value"!==e||"checked"!==e||r[e]!==u)&&(r[e]=u)}}function kr(r,n){var t=r.style;for(var e in n)t[e]=n[e]}function wr(r,n){for(var t in n){var e=n[t];e?r.setAttribute(t,e):r.removeAttribute(t)}}function Ar(r,n){for(var t in n){var e=n[t],u=e.f,a=e.o;a?r.setAttributeNS(u,t,a):r.removeAttributeNS(u,t)}}function jr(r,n,t){var e=r.elmFs||(r.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}r.removeEventListener(u,i)}i=_r(n,a),r.addEventListener(u,i,$r&&{passive:Et(a)<2}),e[u]=i}else r.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){$r=!0}}))}catch(r){}function _r(v,r){function s(r){var n=s.q,t=z(n.a,r);if(Hr(t)){for(var e,u=Et(n),a=t.a,i=u?u<3?a.a:a.L:a,f=1==u?a.b:3==u&&a.ba,o=(f&&r.stopPropagation(),(2==u?a.b:3==u&&a.a5)&&r.preventDefault(),v);e=o.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);o=o.p}o(i,f)}}return s.q=r,s}function Tr(r,n){return r.$==n.$&&B(r.a,n.a)}function Nr(r,n){var t=[];return Lr(r,n,t,0),t}function Er(r,n,t,e){var u={$:n,r:t,s:e,t:void 0,u:void 0};return r.push(u),u}function Lr(r,n,t,e){if(r!==n){var u=r.$,a=n.$;if(u!==a){if(1!==u||2!==a)return void Er(t,0,e,n);n=function(r){for(var n=r.e,t=n.length,e=Array(t),u=0;u<t;u++)e[u]=n[u].b;return{$:1,c:r.c,d:r.d,e:e,f:r.f,b:r.b}}(n),a=1}switch(a){case 5:for(var i=r.l,f=n.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(n.k=r.k);n.k=n.m();var v=[];return Lr(r.k,n.k,v,0),void(0<v.length&&Er(t,1,e,v));case 4:for(var s=r.j,b=n.j,l=!1,d=r.k;4===d.$;)l=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=n.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&s.length!==b.length?void Er(t,0,e,n):((l?function(r,n){for(var t=0;t<r.length;t++)if(r[t]!==n[t])return!1;return!0}(s,b):s===b)||Er(t,2,e,b),void Lr(d,h,t,e+1));case 0:return void(r.a!==n.a&&Er(t,3,e,n.a));case 1:return void xr(r,n,t,e,qr);case 2:return void xr(r,n,t,e,Pr);case 3:if(r.h!==n.h)return void Er(t,0,e,n);var $=Cr(r.d,n.d);$&&Er(t,4,e,$);var g=n.i(r.g,n.g);return void(g&&Er(t,5,e,g))}}}function xr(r,n,t,e,u){if(r.c===n.c&&r.f===n.f){var a=Cr(r.d,n.d);a&&Er(t,4,e,a),u(r,n,t,e)}else Er(t,0,e,n)}function Cr(r,n,t){var e;for(var u in r)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in n){var a=r[u],i=n[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&Tr(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:r[u].f,o:void 0}:"string"==typeof r[u]?"":null;else{var f=Cr(r[u],n[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in n)o in r||((e=e||{})[o]=n[o]);return e}function qr(r,n,t,e){var u=r.e,a=n.e,i=u.length,f=a.length;f<i?Er(t,6,e,{v:f,i:i-f}):i<f&&Er(t,7,e,{v:i,e:a});for(var o=i<f?i:f,c=0;c<o;c++){var v=u[c];Lr(v,a[c],t,++e),e+=v.b||0}}function Pr(r,n,t,e){for(var u=[],a={},i=[],f=r.e,o=n.e,c=f.length,v=o.length,s=0,b=0,l=e;s<c&&b<v;){var d=(T=f[s]).a,h=(N=o[b]).a,$=T.b,g=N.b;if(d!==h){var p=f[s+1],m=o[b+1];if(p)var y=p.a,k=p.b,w=h===y;if(m)var A=m.a,j=m.b,_=d===A;if(_&&w)Lr($,j,u,++l),zr(a,u,d,g,b,i),l+=$.b||0,Or(a,u,d,k,++l),l+=k.b||0,s+=2,b+=2;else if(_)l++,zr(a,u,h,g,b,i),Lr($,j,u,l),l+=$.b||0,s+=1,b+=2;else if(w)Or(a,u,d,$,++l),l+=$.b||0,Lr(k,g,u,++l),l+=k.b||0,s+=2,b+=1;else{if(!p||y!==A)break;Or(a,u,d,$,++l),zr(a,u,h,g,b,i),l+=$.b||0,Lr(k,j,u,++l),l+=k.b||0,s+=2,b+=2}}else Lr($,g,u,++l),l+=$.b||0,s++,b++}for(;s<c;){var T;Or(a,u,(T=f[s]).a,$=T.b,++l),l+=$.b||0,s++}for(;b<v;){var N,E=E||[];zr(a,u,(N=o[b]).a,N.b,void 0,E),b++}(0<u.length||0<i.length||E)&&Er(t,8,e,{w:u,x:i,y:E})}var Fr="_elmW6BL";function zr(r,n,t,e,u,a){var i=r[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(r[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return Lr(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}zr(r,n,t+Fr,e,u,a)}function Or(r,n,t,e,u){var a=r[t];if(a){if(0===a.c){a.c=2;var i=[];return Lr(e,a.z,i,u),void Er(n,9,u,{w:i,A:a})}Or(r,n,t+Fr,e,u)}else{var f=Er(n,9,u,void 0);r[t]={c:1,z:e,r:u,s:f}}}function Sr(r,n,t,e){!function r(n,t,e,u,a,i,f){var o=e[u];var c=o.r;for(;c===a;){var v=o.$;if(1===v)Sr(n,t.k,o.s,f);else if(8===v){o.t=n,o.u=f;var s=o.s.w;0<s.length&&r(n,t,s,0,a,i,f)}else if(9===v){o.t=n,o.u=f;var b=o.s;if(b){b.A.s=n;var s=b.w;0<s.length&&r(n,t,s,0,a,i,f)}}else o.t=n,o.u=f;if(!(o=e[++u])||(c=o.r)>i)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return r(n,d,e,u,a+1,i,n.elm_event_node_ref)}var h=t.e;var $=n.childNodes;for(var g=0;g<h.length;g++){var p=1===l?h[g]:h[g].b,m=++a+(p.b||0);if(a<=c&&c<=m&&(u=r($[g],p,e,u,a,m,f),!(o=e[u])||(c=o.r)>i))return u;a=m}return u}(r,n,t,0,0,n.b,e)}function Mr(r,n,t,e){return 0===t.length?r:(Sr(r,n,t,e),Br(r,t))}function Br(r,n){for(var t=0;t<n.length;t++){var e=n[t],u=e.t,a=Rr(u,e);u===r&&(r=a)}return r}function Rr(r,n){switch(n.$){case 0:return function(r,n,t){var e=r.parentNode,u=mr(n,t);u.elm_event_node_ref||(u.elm_event_node_ref=r.elm_event_node_ref);e&&u!==r&&e.replaceChild(u,r);return u}(r,n.s,n.u);case 4:return yr(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return Br(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var t=n.s,e=0;e<t.i;e++)r.removeChild(r.childNodes[t.v]);return r;case 7:for(var u=(t=n.s).e,a=r.childNodes[e=t.v];e<u.length;e++)r.insertBefore(mr(u[e],n.u),a);return r;case 9:if(!(t=n.s))return r.parentNode.removeChild(r),r;var i=t.A;return void 0!==i.r&&r.parentNode.removeChild(r),i.s=Br(r,t.w),r;case 8:return function(r,n){var t=n.s,e=function(r,n){if(!r)return;for(var t=vr.createDocumentFragment(),e=0;e<r.length;e++){var u=r[e],a=u.A;sr(t,2===a.c?a.s:mr(a.z,n.u))}return t}(t.y,n);r=Br(r,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],f=i.A,o=2===f.c?f.s:mr(f.z,n.u);r.insertBefore(o,r.childNodes[i.r])}e&&sr(r,e);return r}(r,n);case 5:return n.s(r);default:j(10)}}function Dr(r){if(3===r.nodeType)return br(r.textContent);if(1!==r.nodeType)return br("");for(var n=l,t=r.attributes,e=t.length;e--;){var u=t[e];n=g(h(hr,u.name,u.value),n)}var a=r.tagName.toLowerCase(),i=l,f=r.childNodes;for(e=f.length;e--;)i=g(Dr(f[e]),i);return $(lr,a,n,i)}var Ir=u(function(n,r,t,f){return nr(r,f,n.cm,n.cW,n.cQ,function(e,r){var u=n.cY,a=f.node,i=Dr(a);return Wr(r,function(r){var n=u(r),t=Nr(i,n);a=Mr(a,i,t,e),i=n})})}),Yr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){setTimeout(r,1e3/60)};function Wr(t,e){e(t);var u=0;function a(){u=1===u?0:(Yr(a),e(t),1)}return function(r,n){t=r,n?(e(t),2===u&&(u=1)):(0===u&&Yr(a),u=2)}}var Gr={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Jr,Kr=f,Qr=L,Hr=function(r){return!r.$},Ur=u(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),Vr=E,Xr=e(function(r,n){return C(n)/C(r)}),Zr=Vr(h(Xr,2,32)),rn=[],nn=d(Ur,0,Zr,rn,rn),tn=A,en=t(function(r,n,t){for(;;){if(!t.b)return n;var e=t.b,u=r,a=h(r,t.a,n);r=u,n=a,t=e}}),un=function(r){return $(en,Kr,l,r)},an=e(function(r,n){for(;;){var t=h(tn,32,r),e=t.b,u=h(Kr,{$:0,a:t.a},n);if(!e.b)return un(u);r=e,n=u}}),fn=e(function(r,n){for(;;){var t=Vr(n/32);if(1===t)return h(tn,32,r).a;r=h(an,r,l),n=t}}),on=_,cn=e(function(r,n){return 0<c(r,n)?r:n}),vn=function(r){return r.length},sn=e(function(r,n){if(n.k){var t=32*n.k,e=Qr(h(Xr,32,t-1)),u=r?un(n.o):n.o,a=h(fn,u,n.k);return d(Ur,vn(n.n)+t,h(cn,5,e*Zr),a,n.n)}return d(Ur,vn(n.n),Zr,rn,n.n)}),bn=w,ln=a(function(r,n,t,e,u){for(;;){if(n<0)return h(sn,!1,{o:e,k:t/32|0,n:u});var a={$:1,a:$(bn,32,n,r)};r=r,n=n-32,t=t,e=h(Kr,a,e),u=u}}),dn=e(function(r,n){if(0<r){var t=r%32;return s(ln,n,r-t-32,r,l,$(bn,t,r-t,n))}return nn}),hn=function(r){return{$:1,a:r}},$n=function(r){return{$:0,a:r}},gn=e(function(r,n){return{$:3,a:r,b:n}}),pn=e(function(r,n){return{$:0,a:r,b:n}}),mn=e(function(r,n){return{$:1,a:r,b:n}}),yn=function(r){return{$:2,a:r}},kn=P,wn=e(function(r,n){return h(q,r,o(n))}),An=ir(l),jn=e(function(r,n){return{$:0,a:r,b:n}}),_n=function(r){var n=r.b;return h(jn,1664525*r.a+n>>>0,n)},Tn=ir(l),Nn=e(function(r,n){return m(n.a,r(n.b))}),En=e(function(r,n){return m(h(Nn,on(1),n),An)}),Ln=function(r){return{$:1,a:r}},xn=function(r){return{$:2,a:r}},Cn=t(function(r,n,t){return{$:0,a:r,b:n,c:t}}),qn=t(function(r,n,t){return $(Cn,r,n,t)}),Pn={$:0},Fn=e(function(r,n){return{$:3,a:r,b:n}}),zn=function(r){return{$:2,a:r}},On=e(function(r,n){var t=m(r,n);r:for(;;)switch(t.b.$){case 3:var e=t.b;return h(Fn,e.a,e.b);case 1:switch(t.a.$){case 1:return Ln(t.b.a);case 2:return h(Fn,t.b.a,t.a.a);case 3:var u=t.a;return h(Fn,t.b.a,u.b);default:break r}case 2:switch(t.a.$){case 2:return zn(t.b.a);case 1:return h(Fn,t.a.a,t.b.a);case 3:var a=t.a;return h(Fn,a.a,t.b.a);default:break r}default:if(t.a.$){return t.a}break r}return t.b}),Sn=function(r){return r},Mn=e(function(r,n){return $(en,e(function(r,n){var t=n;switch(r.$){case 0:return y(t,{P:h(Kr,r.a,t.P)});case 1:return y(t,{P:$(en,Kr,t.P,r.a)});case 3:return y(t,{al:(0,r.a)(t.al)});default:return y(t,{ak:h(On,t.ak,r.a)})}}),n,r)}),Bn=e(function(r,n){return h(Mn,r,{P:l,ak:Pn,al:(t=n,{$:1,a:t})});var t}),Rn=e(function(r,n){return D($(en,function(t){return e(function(r,n){return n.push(I(t(r))),n})}(r),[],n))}),Dn=function(r){return D($(en,e(function(r,n){return $(Y,r.a,r.b,n)}),{},r))},In=D,Yn=e(function(r,n){return Dn(p([m("type",In("function")),m("name",In(r)),m("args",h(Rn,Sn,n))]))}),Wn=D,Gn=a(function(r,n,t,e,u){return h(Yn,"arcTo",p([Wn(r),Wn(n),Wn(t),Wn(e),Wn(u)]))}),Jn=i(function(r,n,t,e,u,a){return h(Yn,"bezierCurveTo",p([Wn(r),Wn(n),Wn(t),Wn(e),Wn(u),Wn(a)]))}),Kn=e(function(r,n){return h(Yn,"lineTo",p([Wn(r),Wn(n)]))}),Qn=e(function(r,n){return h(Yn,"moveTo",p([Wn(r),Wn(n)]))}),Hn=u(function(r,n,t,e){return h(Yn,"quadraticCurveTo",p([Wn(r),Wn(n),Wn(t),Wn(e)]))}),Un=e(function(r,n){switch(r.$){case 0:var t=r.a,e=r.b;return h(Kr,s(Gn,t.a,t.b,e.a,e.b,r.c),n);case 1:var u=r.a,a=r.b,i=r.c;return h(Kr,b(Jn,u.a,u.b,a.a,a.b,i.a,i.b),n);case 2:var f=r.a;return h(Kr,h(Kn,f.a,f.b),n);case 3:var o=r.a;return h(Kr,h(Qn,o.a,o.b),n);default:var c=r.a,v=r.b;return h(Kr,d(Hn,c.a,c.b,v.a,v.b),n)}}),Vn=D,Xn=i(function(r,n,t,e,u,a){return h(Yn,"arc",p([Wn(r),Wn(n),Wn(t),Wn(e),Wn(u),Vn(a)]))}),Zn=t(function(r,n,t){return b(Xn,r,n,t,0,6.283185307179586,!1)}),rt=u(function(r,n,t,e){return h(Yn,"rect",p([Wn(r),Wn(n),Wn(t),Wn(e)]))}),nt=T,tt=N,et=e(function(r,n){switch(r.$){case 0:var t=r.a;return h(Kr,d(rt,f=t.a,o=t.b,r.b,r.c),h(Kr,h(Qn,f,o),n));case 1:var e=r.a,u=r.b;return h(Kr,$(Zn,f=e.a,o=e.b,u),h(Kr,h(Qn,f+u,o),n));case 2:var a=r.a,i=r.b;return $(en,Un,h(Kr,h(Qn,f=a.a,o=a.b),n),i);default:var f,o,c=r.a,v=r.c;return h(Kr,b(Xn,f=c.a,o=c.b,r.b,v,r.d,r.e),h(Kr,h(Qn,f+nt(v),o+tt(v)),n))}}),ut=e(function(r,n){return Dn(p([m("type",In("field")),m("name",In(r)),m("value",n)]))}),at=x,it=P,ft=function(r){var n,t,e=r.b,u=r.c,a=r.d,i=function(r){return at(1e4*r)/100};return n=p(["rgba(",it(i(r.a)),"%,",it(i(e)),"%,",it(i(u)),"%,",it((t=a,at(1e3*t)/1e3)),")"]),h(wn,"",n)},ot=function(r){return h(ut,"fillStyle",In(ft(r)))},ct=e(function(r,n){return h(Kr,h(Yn,"fill",p([In(function(r){return r?"evenodd":"nonzero"}(0))])),h(Kr,ot(r),n))}),vt=h(Yn,"stroke",l),st=function(r){return h(ut,"strokeStyle",In(ft(r)))},bt=e(function(r,n){return h(Kr,vt,h(Kr,st(r),n))}),lt=u(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),dt=d(lt,0,0,0,1),ht=e(function(r,n){switch(r.$){case 0:return h(ct,dt,n);case 1:return h(ct,r.a,n);case 2:return h(bt,r.a,n);default:return h(bt,r.b,h(ct,r.a,n))}}),$t=u(function(r,n,t,e){if(1===e.$)return h(Yn,"fillText",p([In(r),Wn(n),Wn(t)]));var u=e.a;return h(Yn,"fillText",p([In(r),Wn(n),Wn(t),Wn(u)]))}),gt=a(function(r,n,t,e,u){return h(Kr,d($t,r.aF,n,t,r.ap),h(Kr,ot(e),u))}),pt=u(function(r,n,t,e){if(1===e.$)return h(Yn,"strokeText",p([In(r),Wn(n),Wn(t)]));var u=e.a;return h(Yn,"strokeText",p([In(r),Wn(n),Wn(t),Wn(u)]))}),mt=a(function(r,n,t,e,u){return h(Kr,d(pt,r.aF,n,t,r.ap),h(Kr,st(e),u))}),yt=t(function(r,n,t){var e=n.a4,u=e.a,a=e.b;switch(r.$){case 0:return s(gt,n,u,a,dt,t);case 1:return s(gt,n,u,a,r.a,t);case 2:return s(mt,n,u,a,r.a,t);default:return s(mt,n,u,a,r.b,s(gt,n,u,a,r.a,t))}}),kt=t(function(r,n,t){return $(yt,r,n,t)}),wt=h(Yn,"beginPath",l),At=t(function(r,n,t){if(r.$){var e=r.a;return h(ht,n,$(en,et,h(Kr,wt,t),e))}return $(kt,n,r.a,t)}),jt=h(Yn,"restore",l),_t=h(Yn,"save",l),Tt=e(function(r,n){return h(Kr,jt,$(At,r.al,r.ak,k(r.P,h(Kr,_t,n))))}),Nt=l,Et=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Lt=e(function(r,n){return h(dr,function(r){return"innerHTML"==r||"formAction"==r?"data-"+r:r}(r),function(r){return/^\s*(javascript:|data:text\/html)/i.test(r)?"":r}(n))}),xt=lr("canvas"),Ct=function(r){return lr(function(r){return"script"==r?"p":r}(r))},qt=function(r){return h(hr,"height",kn(r))},Pt=function(r){return h(hr,"width",kn(r))},Ft=t(function(r,n,t){var e,u=r.a,a=r.b;return $(Ct,"elm-canvas",p([(e=function(r){return $(en,Tt,Nt,r)}(t),h(Lt,"cmds",h(Rn,Sn,e))),qt(a),Pt(u)]),p([h(xt,h(Kr,qt(a),h(Kr,Pt(u),n)),l)]))}),zt=u(function(r,n,t,e){var u=function(r,n,t){return{a:r,b:n,c:t}}(r,n,t),a=u.a,i=u.b,f=u.c,o=.5<f?f+i-f*i:f*(i+1),c=2*f-o,v=function(r){var n=r<0?r+1:1<r?r-1:r;return 6*n<1?c+(o-c)*n*6:2*n<1?o:3*n<2?c+(o-c)*(2/3-n)*6:c},s=v(a-1/3),b=v(a),l=v(a+1/3);return d(lt,l,b,s,e)}),Ot=$(t(function(r,n,t){return d(zt,r,n,t,1)}),3.141592653589793*39/180,.19,.86),St=function(r){return{$:0,a:r}},Mt=e(function(r,n){return h(Yn,"scale",p([Wn(r),Wn(n)]))}),Bt=i(function(r,n,t,e,u,a){return h(Yn,"transform",p([Wn(r),Wn(n),Wn(t),Wn(e),Wn(u),Wn(a)]))}),Rt=e(function(r,n){return h(Yn,"translate",p([Wn(r),Wn(n)]))}),Dt=u(function(r,n,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,f=a.b;if(f.b){var o=f.a,c=f.b;if(c.b){var v=c.b;return h(r,u,h(r,i,h(r,o,h(r,c.a,500<t?$(en,r,n,un(v)):d(Dt,r,n,t+1,v)))))}return h(r,u,h(r,i,h(r,o,n)))}return h(r,u,h(r,i,n))}return h(r,u,n)}return n}),It=t(function(r,n,t){return d(Dt,r,n,0,t)}),Yt=e(function(t,r){return $(It,e(function(r,n){return h(Kr,t(r),n)}),l,r)}),Wt=function(r){return{$:1,a:h(Yt,function(r){switch(r.$){case 0:return function(r){return h(Yn,"rotate",p([Wn(r)]))}(r.a);case 1:return h(Mt,r.a,r.b);case 2:return h(Rt,r.a,r.b);default:return b(Bt,r.a.cp,r.a.cq,r.a.cr,r.a.cs,r.a.b6,r.a.b7)}},r)}},Gt=e(function(r,n){return{$:2,a:r,b:n}}),Jt=function(r){var n=r.a,t=277803737*(n^n>>>4+(n>>>28));return(t>>>22^t)>>>0},Kt=h(e(function(a,i){return function(r){var n,t=_n(r),e=(n=i-a)<0?-n:n,u=Jt(t);return m((134217728*(1*(67108863&Jt(r)))+1*(134217727&u))/9007199254740992*e+a,_n(t))}}),0,1),Qt=s(a(function(c,r,n,t,e){var v=r,s=n,b=t,l=e;return function(r){var n=v(r),t=n.a,e=s(n.b),u=e.a,a=b(e.b),i=a.a,f=l(a.b),o=f.b;return m(d(c,t,u,i,f.a),o)}}),u(function(r,n,t,e){return m(m(r,n),m(t,e))}),Kt,Kt,Kt,Kt),Ht=e(function(r,n){return r(n)}),Ut=e(function(r,n){var t=r.b,e=function(r){return r<.5?-1:1},u=h(Ht,Qt,n),a=u.a,i=a.a,f=i.b,o=a.b,c=o.a,v=o.b,s=u.b;return m(m(t/20*3.141592653589793/180*e(i.a)*f*45,t/20*e(c)*v*15),s)}),Vt=e(function(r,n){var t,e=n.a,u=n.b,a=m(r.a,r.b),i=a.a,f=a.b,o=m(i*((500-500/6*2)/12)+500/6,f*((500-500/6*2)/12)+500/6),c=o.a,v=o.b,s=h(Ut,m(i,f),u),b=s.a,l=b.a,d=s.b;return m(h(Kr,h(Bn,p([Wt(p([h(Gt,c+b.b,v),St(l)])),(t=dt,xn(zn(t)))]),p([$(qn,m(0,0),(500-500/6*2)/12,(500-500/6*2)/12)])),e),d)}),Xt=t(function(r,i,n){var f=r.cK,o=r.b_;return $(t(function(r,n,t){for(;;){if(-1<c(n,f))return t;if(c(r,o)>-1){r=e=0,n=u=n+1,t=a=t}else{var e=r+1,u=n,a=h(i,m(r,n),t);r=e,n=u,t=a}}}),0,0,n)}),Zt=e(function(r,n){return $(Xt,{b_:12,cK:20},Vt,m(n,r)).a}),re=W,ne=re(0),te=J,ee=e(function(n,r){return h(te,function(r){return re(n(r))},r)}),ue=t(function(t,r,e){return h(te,function(n){return h(te,function(r){return re(h(t,n,r))},e)},r)}),ae=ur,ie=e(function(r,n){var t=n;return H(h(te,ae(r),t))});tr.Task={b:ne,c:t(function(r,n){return h(ee,function(){return 0},(t=h(Yt,ie(r),n),$(It,ue(Kr),re(l),t)));var t}),d:t(function(){return re(0)}),e:e(function(r,n){return h(ee,r,n)}),f:Jr};ar("Task");var fe,oe={$:4},ce=Ir({cm:function(r){return m(m((n=Qr(1e6*r),t=_n(h(jn,0,1013904223)),_n(h(jn,t.a+n>>>0,t.b))),0),An);var n,t},cQ:function(){return Tn},cW:En,cY:function(r){var n,t=h(Zt,r.a,l),e=h(Bn,p([(n=Ot,xn(Ln(n)))]),p([$(qn,m(0,0),500,722.2222222222223)]));return $(Ft,m(500,Qr(722.2222222222223)),l,h(Kr,e,t))}});fe={Examples:{CubicDisarray:{init:ce(oe)(0)}}},r.Elm?function r(n,t){for(var e in t)e in n?"init"==e?j(6):r(n[e],t[e]):n[e]=t[e]}(r.Elm,fe):r.Elm=fe}(this);