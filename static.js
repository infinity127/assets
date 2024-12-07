"(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l="Symbol.iterator",p="function",q="object",r="string",t,u=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},v=typeof Object.defineProperties==p?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},aa=function(a){a=[q==typeof globalThis&&globalThis,a,q==typeof window&&window,q==typeof self&&self,q==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");
},w=aa(this),x=function(a,b){if(b)a:{var c=w;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&v(c,a,{configurable:!0,writable:!0,value:b})}};
x("Symbol",function(a){if(a)return a;var b=function(h,m){this.aa=h;v(this,"description",{configurable:!0,writable:!0,value:m})};b.prototype.toString=function(){return this.aa};var c="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",d=0,e=function(h){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new b(c+(h||"")+"_"+d++,h)};return e},"es6","es3");
x(l,function(a){if(a)return a;a=Symbol(l);for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=w[b[c]];typeof d===p&&typeof d.prototype[a]!=p&&v(d.prototype,a,{configurable:!0,writable:!0,value:function(){return y(u(this))}})}return a},"es6","es3");
var y=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a},z=function(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:u(a)};throw Error(String(a)+" is not an iterable or ArrayLike");},B=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
x("WeakMap",function(a){function b(){}function c(g){var k=typeof g;return k===q&&g!==null||k===p}function d(g){if(!B(g,h)){var k=new b;v(g,h,{value:k})}}function e(g){var k=Object[g];k&&(Object[g]=function(n){if(n instanceof b)return n;Object.isExtensible(n)&&d(n);return k(n)})}if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),k=Object.seal({}),n=new a([[g,2],[k,3]]);if(n.get(g)!=2||n.get(k)!=3)return!1;n.delete(g);n.set(k,4);return!n.has(g)&&n.get(k)==4}catch(A){return!1}}())return a;
var h="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var m=0,f=function(g){this.H=(m+=Math.random()+1).toString();if(g){g=z(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}};f.prototype.set=function(g,k){if(!c(g))throw Error("Invalid WeakMap key");d(g);if(!B(g,h))throw Error("WeakMap key fail: "+g);g[h][this.H]=k;return this};f.prototype.get=function(g){return c(g)&&B(g,h)?g[h][this.H]:void 0};f.prototype.has=function(g){return c(g)&&B(g,h)&&B(g[h],this.H)};
f.prototype.delete=function(g){return c(g)&&B(g,h)&&B(g[h],this.H)?delete g[h][this.H]:!1};return f},"es6","es3");
x("Map",function(a){if(function(){if(!a||typeof a!=p||!a.prototype.entries||typeof Object.seal!=p)return!1;try{var f=Object.seal({x:4}),g=new a(z([[f,"s"]]));if(g.get(f)!="s"||g.size!=1||g.get({x:4})||g.set({x:4},"t")!=g||g.size!=2)return!1;var k=g.entries(),n=k.next();if(n.done||n.value[0]!=f||n.value[1]!="s")return!1;n=k.next();return n.done||n.value[0].x!=4||n.value[1]!="t"||!k.next().done?!1:!0}catch(A){return!1}}())return a;var b=new WeakMap,c=function(f){this[0]={};this[1]=h();this.size=0;if(f){f=
z(f);for(var g;!(g=f.next()).done;)g=g.value,this.set(g[0],g[1])}};c.prototype.set=function(f,g){f=f===0?0:f;var k=d(this,f);k.list||(k.list=this[0][k.id]=[]);k.i?k.i.value=g:(k.i={next:this[1],s:this[1].s,head:this[1],key:f,value:g},k.list.push(k.i),this[1].s.next=k.i,this[1].s=k.i,this.size++);return this};c.prototype.delete=function(f){f=d(this,f);return f.i&&f.list?(f.list.splice(f.index,1),f.list.length||delete this[0][f.id],f.i.s.next=f.i.next,f.i.next.s=f.i.s,f.i.head=null,this.size--,!0):
!1};c.prototype.clear=function(){this[0]={};this[1]=this[1].s=h();this.size=0};c.prototype.has=function(f){return!!d(this,f).i};c.prototype.get=function(f){return(f=d(this,f).i)&&f.value};c.prototype.entries=function(){return e(this,function(f){return[f.key,f.value]})};c.prototype.keys=function(){return e(this,function(f){return f.key})};c.prototype.values=function(){return e(this,function(f){return f.value})};c.prototype.forEach=function(f,g){for(var k=this.entries(),n;!(n=k.next()).done;)n=n.value,
f.call(g,n[1],n[0],this)};c.prototype[Symbol.iterator]=c.prototype.entries;var d=function(f,g){var k=g&&typeof g;k==q||k==p?b.has(g)?k=b.get(g):(k=""+ ++m,b.set(g,k)):k="p_"+g;var n=f[0][k];if(n&&B(f[0],k))for(f=0;f<n.length;f++){var A=n[f];if(g!==g&&A.key!==A.key||g===A.key)return{id:k,list:n,index:f,i:A}}return{id:k,list:n,index:-1,i:void 0}},e=function(f,g){var k=f[1];return y(function(){if(k){for(;k.head!=f[1];)k=k.s;for(;k.next!=k.head;)return k=k.next,{done:!1,value:g(k)};k=null}return{done:!0,
value:void 0}})},h=function(){var f={};return f.s=f.next=f.head=f},m=0;return c},"es6","es3");var C=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var h=c++;return{value:b(h,a[h]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e};x("Array.prototype.keys",function(a){return a?a:function(){return C(this,function(b){return b})}},"es6","es3");
x("Array.prototype.values",function(a){return a?a:function(){return C(this,function(b,c){return c})}},"es8","es3");x("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(f){return f};var e=[],h=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof h==p){b=h.call(b);for(var m=0;!(h=b.next()).done;)e.push(c.call(d,h.value,m++))}else for(h=b.length,m=0;m<h;m++)e.push(c.call(d,b[m],m));return e}},"es6","es3");var D=this||self,E=function(a){var b=typeof a;b=b!=q?b:a?Array.isArray(a)?"array":b:"null";return b=="array"||b==q&&typeof a.length=="number"};var F,G;a:{for(var H=["CLOSURE_FLAGS"],I=D,J=0;J<H.length;J++)if(I=I[H[J]],I==null){G=null;break a}G=I}var K=G&&G[610401301];F=K!=null?K:!1;var L,M=D.navigator;L=M?M.userAgentData||null:null;function N(a){return F?L?L.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}function O(a){var b;a:{if(b=D.navigator)if(b=b.userAgent)break a;b=""}return b.indexOf(a)!=-1};function P(a){return a!==void 0&&a||F?!!L&&L.brands.length>0:!1}function ba(){return O("Safari")&&!(Q()||(P()?0:O("Coast"))||(P()?0:O("Opera"))||(P()?0:O("Edge"))||(P()?N("Microsoft Edge"):O("Edg/"))||(P()?N("Opera"):O("OPR"))||O("Firefox")||O("FxiOS")||O("Silk")||O("Android"))}function Q(){return P()?N("Chromium"):(O("Chrome")||O("CriOS"))&&!(P()?0:O("Edge"))||O("Silk")};var ca=P()?!1:O("Trident")||O("MSIE");var da=function(a,b){return typeof b===r?a.getElementById(b):b},ea=function(a,b,c,d){a=d||a;return(b=b&&b!="*"?String(b).toUpperCase():"")||c?a.querySelectorAll(b+(c?"."+c:"")):a.getElementsByTagName("*")};var R=function(a){this.J=a};R.prototype.ia=function(a){var b=[];this.N(a,b);return b.join("")};
R.prototype.N=function(a,b){if(a==null)b.push("null");else{if(typeof a==q){if(Array.isArray(a)){this.ja(a,b);return}if(a instanceof String||a instanceof Number||a instanceof Boolean)a=a.valueOf();else{this.la(a,b);return}}switch(typeof a){case r:this.Z(a,b);break;case "number":this.ka(a,b);break;case "boolean":b.push(String(a));break;case p:b.push("null");break;default:throw Error("Unknown type: "+typeof a);}}};
var fa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},ha=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;R.prototype.Z=function(a,b){b.push('"',a.replace(ha,function(c){var d=fa[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),fa[c]=d);return d}),'"')};R.prototype.ka=function(a,b){b.push(isFinite(a)&&!isNaN(a)?String(a):"null")};
R.prototype.ja=function(a,b){var c=a.length;b.push("[");for(var d="",e=0;e<c;e++)b.push(d),d=a[e],this.N(this.J?this.J.call(a,String(e),d):d,b),d=",";b.push("]")};R.prototype.la=function(a,b){b.push("{");var c="",d;for(d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=a[d];typeof e!=p&&(b.push(c),this.Z(d,b),b.push(":"),this.N(this.J?this.J.call(a,d,e):e,b),c=",")}b.push("}")};var ia=function(a){if(a.A&&typeof a.A==p)return a.A();if(typeof Map!=="undefined"&&a instanceof Map||typeof Set!=="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a===r)return a.split("");if(E(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b},ja=function(a){if(a.K&&typeof a.K==p)return a.K();if(!a.A||typeof a.A!=p){if(typeof Map!=="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!=="undefined"&&a instanceof
Set)){if(E(a)||typeof a===r){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}},ka=function(a,b,c){if(a.forEach&&typeof a.forEach==p)a.forEach(b,c);else if(E(a)||typeof a===r)Array.prototype.forEach.call(a,b,c);else for(var d=ja(a),e=ia(a),h=e.length,m=0;m<h;m++)b.call(c,e[m],d&&d[m],a)};var la=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),ma=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(d>=0){var h=a[c].substring(0,d);e=a[c].substring(d+1)}else h=a[c];b(h,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};var S=function(a,b){this.F=this.I=this.v="";this.D=null;this.G=this.M="";this.j=this.ha=!1;var c;a instanceof S?(this.j=b!==void 0?b:a.j,this.U(a.v),this.V(a.I),this.O(a.F),this.S(a.D),this.setPath(a.getPath()),this.T(a.l.clone()),this.P(a.G)):a&&(c=String(a).match(la))?(this.j=!!b,this.U(c[1]||"",!0),this.V(c[2]||"",!0),this.O(c[3]||"",!0),this.S(c[4]),this.setPath(c[5]||"",!0),this.T(c[6]||"",!0),this.P(c[7]||"",!0)):(this.j=!!b,this.l=new T(null,this.j))};t=S.prototype;
t.toString=function(){var a=[],b=this.v;b&&a.push(U(b,na,!0),":");var c=this.F;if(c||b=="file")a.push("//"),(b=this.I)&&a.push(U(b,na,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.D,c!=null&&a.push(":",String(c));if(c=this.getPath())this.L()&&c.charAt(0)!="/"&&a.push("/"),a.push(U(c,c.charAt(0)=="/"?oa:pa,!0));(c=this.X())&&a.push("?",c);(c=this.G)&&a.push("#",U(c,qa));return a.join("")};
t.resolve=function(a){var b=this.clone(),c=a.fa();c?b.U(a.v):c=a.ga();c?b.V(a.I):c=a.L();c?b.O(a.F):c=a.da();var d=a.getPath();if(c)b.S(a.D);else if(c=a.Y()){if(d.charAt(0)!="/")if(this.L()&&!this.Y())d="/"+d;else{var e=b.getPath().lastIndexOf("/");e!=-1&&(d=b.getPath().slice(0,e+1)+d)}e=d;if(e==".."||e==".")d="";else if(e.indexOf("./")!=-1||e.indexOf("/.")!=-1){d=e.lastIndexOf("/",0)==0;e=e.split("/");for(var h=[],m=0;m<e.length;){var f=e[m++];f=="."?d&&m==e.length&&h.push(""):f==".."?((h.length>
1||h.length==1&&h[0]!="")&&h.pop(),d&&m==e.length&&h.push("")):(h.push(f),d=!0)}d=h.join("/")}else d=e}c?b.setPath(d):c=a.ea();c?b.T(a.l.clone()):c=a.ca();c&&b.P(a.G);return b};t.clone=function(){return new S(this)};t.U=function(a,b){this.m();if(this.v=b?V(a,!0):a)this.v=this.v.replace(/:$/,"");return this};t.fa=function(){return!!this.v};t.V=function(a,b){this.m();this.I=b?V(a):a;return this};t.ga=function(){return!!this.I};t.O=function(a,b){this.m();this.F=b?V(a,!0):a;return this};t.L=function(){return!!this.F};
t.S=function(a){this.m();if(a){a=Number(a);if(isNaN(a)||a<0)throw Error("Bad port number "+a);this.D=a}else this.D=null;return this};t.da=function(){return this.D!=null};t.getPath=function(){return this.M};t.setPath=function(a,b){this.m();this.M=b?V(a,!0):a;return this};t.Y=function(){return!!this.M};t.ea=function(){return this.l.toString()!==""};t.T=function(a,b){this.m();a instanceof T?(this.l=a,this.l.R(this.j)):(b||(a=U(a,ra)),this.l=new T(a,this.j));return this};t.X=function(){return this.l.toString()};
t.getQuery=function(){return this.X()};t.ma=function(a,b){this.m();this.l.set(a,b);return this};t.ba=function(a){return this.l.get(a)};t.P=function(a,b){this.m();this.G=b?V(a):a;return this};t.ca=function(){return!!this.G};t.removeParameter=function(a){this.m();this.l.remove(a);return this};t.m=function(){if(this.ha)throw Error("Tried to modify a read-only Uri");};t.R=function(a){this.j=a;this.l&&this.l.R(a);return this};
var V=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},U=function(a,b,c){return typeof a===r?(a=encodeURI(a).replace(b,sa),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},sa=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},na=/[#\/\?@]/g,pa=/[#\?:]/g,oa=/[#\?]/g,ra=/[#\?@]/g,qa=/#/g,T=function(a,b){this.h=this.g=null;this.u=a||null;this.j=!!b};t=T.prototype;
t.o=function(){if(!this.g&&(this.g=new Map,this.h=0,this.u)){var a=this;ma(this.u,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)})}};t.add=function(a,b){this.o();this.C();a=this.B(a);var c=this.g.get(a);c||this.g.set(a,c=[]);c.push(b);this.h+=1;return this};t.remove=function(a){this.o();a=this.B(a);return this.g.has(a)?(this.C(),this.h-=this.g.get(a).length,this.g.delete(a)):!1};t.clear=function(){this.C();this.g=null;this.h=0};t.isEmpty=function(){this.o();return this.h==0};
t.W=function(a){this.o();a=this.B(a);return this.g.has(a)};t.forEach=function(a,b){this.o();this.g.forEach(function(c,d){c.forEach(function(e){a.call(b,e,d,this)},this)},this)};t.K=function(){this.o();for(var a=Array.from(this.g.values()),b=Array.from(this.g.keys()),c=[],d=0;d<b.length;d++)for(var e=a[d],h=0;h<e.length;h++)c.push(b[d]);return c};
t.A=function(a){this.o();var b=[];if(typeof a===r)this.W(a)&&(b=b.concat(this.g.get(this.B(a))));else{a=Array.from(this.g.values());for(var c=0;c<a.length;c++)b=b.concat(a[c])}return b};t.set=function(a,b){this.o();this.C();a=this.B(a);this.W(a)&&(this.h-=this.g.get(a).length);this.g.set(a,[b]);this.h+=1;return this};t.get=function(a,b){if(!a)return b;a=this.A(a);return a.length>0?String(a[0]):b};
t.setValues=function(a,b){this.remove(a);if(b.length>0){this.C();var c=this.g,d=c.set;a=this.B(a);var e=b.length;if(e>0){for(var h=Array(e),m=0;m<e;m++)h[m]=b[m];e=h}else e=[];d.call(c,a,e);this.h+=b.length}};
t.toString=function(){if(this.u)return this.u;if(!this.g)return"";for(var a=[],b=Array.from(this.g.keys()),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.A(d);for(var h=0;h<d.length;h++){var m=e;d[h]!==""&&(m+="="+encodeURIComponent(String(d[h])));a.push(m)}}return this.u=a.join("&")};t.C=function(){this.u=null};t.clone=function(){var a=new T;a.u=this.u;this.g&&(a.g=new Map(this.g),a.h=this.h);return a};t.B=function(a){a=String(a);this.j&&(a=a.toLowerCase());return a};
t.R=function(a){a&&!this.j&&(this.o(),this.C(),this.g.forEach(function(b,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.setValues(d,b))},this));this.j=a};t.extend=function(a){for(var b=0;b<arguments.length;b++)ka(arguments[b],function(c,d){this.add(d,c)},this)};function ta(a,b,c){a:{var d=b.nodeType==9?b:b.ownerDocument||b.document;if(d.defaultView&&d.defaultView.getComputedStyle&&(d=d.defaultView.getComputedStyle(b,null))){d=d[a]||d.getPropertyValue(a)||"";break a}d=""}d=d||(b.currentStyle?b.currentStyle[a]:null)||b.style&&b.style[a];return d==null||d=="inherit"||d=="transparent"||d=="rgba(0, 0, 0, 0)"?b!=(b.nodeType==9?b:b.ownerDocument||b.document).body&&b.parentNode?W(a,b.parentNode):c:d}function W(a,b){return ta(a,b,"rgb(0, 0, 0)")}
function ua(){for(var a=ea(document,"IFRAME","blogger-iframe-colorize",void 0),b=0;b<a.length;b++){var c=a[b],d=da(document,c.id+"-src"),e=d.href;if(!(new S(e)).ba("skin")){var h=W("color",c),m=W("backgroundColor",c),f=ta("fontFamily",c,"serif");d.href="https://www.blogger.com/unvisited-link-"+(new Date).valueOf();var g=W("color",d);d=d.href=e;e=encodeURIComponent;h=(new R(void 0)).ia({color:h,backgroundColor:m,unvisitedLinkColor:g,fontFamily:f});e=d+("#"+e(h))}c.src=e}};!O("Android")||Q();Q();ba();var va=!ca&&!ba();var wa=-1,xa=/\.(blogger|google)\.com($|:)/;var ya=function(){wa=Math.floor(Math.random()*1E7);for(var a=ea(document,"iframe","blogger-comment-from-post",void 0),b=0;b<a.length;b++){var c=da(document,a[b].id+"-src"),d=new S(c.href);d.ma("blogspotRpcToken",wa);c.href=d.toString()}ua();a=function(e){if(xa.test(e.origin)&&typeof e.data===r&&e.data.indexOf("set-comment-editor-height")==0){var h=document.getElementById("comment-editor");h.height=e.data.substring(26);if(va&&h.dataset)h.dataset.resized=!0;else{if(/-[a-z]/.test("resized"))throw Error("");
h.setAttribute("data-"+"resized".replace(/([A-Z])/g,"-$1").toLowerCase(),!0)}}};window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)},X=["BLOG_CMT_createIframe"],Y=D;X[0]in Y||typeof Y.execScript=="undefined"||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||ya===void 0?Y=Y[Z]&&Y[Z]!==Object.prototype[Z]?Y[Z]:Y[Z]={}:Y[Z]=ya;}).call(this);"
 https://www.blogger.com/static/v1/jsbin/2315299244-comment_from_post_iframe.js#:~:text=(function()%7B/*%0A%0A%20Copyright,ya%3B%7D).call(this)%3B