var e,r,t,o,n,a,i,u,l,f,s,d,p,h,c={707:(e,r,t)=>{var o={"./Module":()=>Promise.all([t.e(975),t.e(193),t.e(283)]).then((()=>()=>t(283)))},n=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var o="default",n=t.S[o];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>n,init:()=>a})}},v={};function b(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={exports:{}};return c[e](t,t.exports,b),t.exports}b.m=c,b.c=v,b.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return b.d(r,{a:r}),r},b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>e+"."+{193:"11b2c06eebc9fa2b",283:"9ba5b2ece6c4445e",784:"060b53cbd822ad76",975:"4d27bd439f2b1df8"}[e]+".js",b.miniCssF=e=>{},b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="about:",b.l=(t,o,n,a)=>{if(e[t])e[t].push(o);else{var i,u;if(void 0!==n)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+n){i=s;break}}i||(u=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,b.nc&&i.setAttribute("nonce",b.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[o];var d=(r,o)=>{i.onerror=i.onload=null,clearTimeout(p);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),r)return r(o)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{b.S={};var e={},r={};b.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];b.o(b.S,t)||(b.S[t]={});var a=b.S[t],i="about",u=[];return"default"===t&&((e,r,t,o)=>{var n=a[e]=a[e]||{},u=n[r];(!u||!u.loaded&&(1!=!u.eager?o:i>u.from))&&(n[r]={get:()=>b.e(784).then((()=>()=>b(784))),from:i,eager:!1})})("react","18.2.0"),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},o=(e,r)=>{e=t(e),r=t(r);for(var o=0;;){if(o>=e.length)return o<r.length&&"u"!=(typeof r[o])[0];var n=e[o],a=(typeof n)[0];if(o>=r.length)return"u"==a;var i=r[o],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;o++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,t+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return t}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():n(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var o=e[0],n=o<0;n&&(o=-o-1);for(var i=0,u=1,l=!0;;u++,i++){var f,s,d=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(s=(typeof(f=r[i]))[0]))return!l||("u"==d?u>o&&!n:""==d!=n);if("u"==s){if(!l||"u"!=d)return!1}else if(l)if(d==s)if(u<=o){if(f!=e[u])return!1}else{if(n?f>e[u]:f<e[u])return!1;f!=e[u]&&(l=!1)}else if("s"!=d&&"n"!=d){if(n||u<=o)return!1;l=!1,u--}else{if(u<=o||s<d!=n)return!1;l=!1}else"s"!=d&&"n"!=d&&(l=!1,u--)}}var p=[],h=p.pop.bind(p);for(i=1;i<e.length;i++){var c=e[i];p.push(1==c?h()|h():2==c?h()&h():c?a(c,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&o(e,r)?r:e),0)},u=(e,r,t,o)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(o)+")",l=(e,r,t,o)=>{var n=i(e,t);if(!a(o,n))throw new Error(u(e,t,n,o));return f(e[t][n])},f=e=>(e.loaded=1,e.get()),s=(e=>function(r,t,o,n){var a=b.I(r);return a&&a.then?a.then(e.bind(e,r,b.S[r],t,o,n)):e(0,b.S[r],t,o,n)})(((e,r,t,o,n)=>r&&b.o(r,t)?l(r,0,t,o):n())),d={},p={619:()=>s("default","react",[4,18,2,0],(()=>b.e(784).then((()=>()=>b(784)))))},h={193:[619]},b.f.consumes=(e,r)=>{b.o(h,e)&&h[e].forEach((e=>{if(b.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,b.m[e]=t=>{delete b.c[e],t.exports=r()}},o=r=>{delete d[e],b.m[e]=t=>{throw delete b.c[e],r}};try{var n=p[e]();n.then?r.push(d[e]=n.then(t).catch(o)):t(n)}catch(e){o(e)}}))},(()=>{var e={443:0};b.f.j=(r,t)=>{var o=b.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=b.p+b.u(r),i=new Error;b.l(a,(t=>{if(b.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[a,i,u]=t,l=0;if(a.some((r=>0!==e[r]))){for(o in i)b.o(i,o)&&(b.m[o]=i[o]);u&&u(b)}for(r&&r(t);l<a.length;l++)n=a[l],b.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkabout=self.webpackChunkabout||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var m=b(707),g=m.get,y=m.init;export{g as get,y as init};