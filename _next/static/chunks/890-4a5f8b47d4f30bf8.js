(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{568:function(){},563:function(e,t,r){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(e){n(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===i(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}function s(e,t){n(2,arguments);var r=o(e),i=o(t),s=r.getTime()-i.getTime();return s>0?-1:s<0?1:s}r.d(t,{Z:function(){return s}})},8872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let i=r(2575),n=r(821),o=n._(r(7294)),s=r(3935),l=i._(r(2636)),a=r(5471),u=r(3735),c=r(3341);r(4210);let d=r(9955),f=i._(r(7746)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,r,i,n,o){let s=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===s)return;e["data-loaded-src"]=s;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function m(e){let[t,r]=o.version.split("."),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:s,width:l,decoding:a,className:u,style:c,fetchPriority:d,placeholder:f,loading:g,unoptimized:h,fill:b,onLoadRef:y,onLoadingCompleteRef:v,setBlurComplete:w,setShowAltText:S,onLoad:_,onError:j,...C}=e;return o.default.createElement("img",{...C,...m(d),loading:g,width:l,height:s,decoding:a,"data-nimg":b?"fill":"1",className:u,style:c,sizes:n,srcSet:i,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&p(e,f,y,v,w,h))},[r,f,y,v,w,j,h,t]),onLoad:e=>{let t=e.currentTarget;p(t,f,y,v,w,h)},onError:e=>{S(!0),"empty"!==f&&w(!0),j&&j(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&s.preload?((0,s.preload)(r.src,i),null):o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...i}))}let y=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(d.RouterContext),i=(0,o.useContext)(c.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=g||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:s,onLoadingComplete:l}=e,p=(0,o.useRef)(s);(0,o.useEffect)(()=>{p.current=s},[s]);let m=(0,o.useRef)(l);(0,o.useEffect)(()=>{m.current=l},[l]);let[y,v]=(0,o.useState)(!1),[w,S]=(0,o.useState)(!1),{props:_,meta:j}=(0,a.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:y,showAltText:w});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{..._,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:p,onLoadingCompleteRef:m,setBlurComplete:v,setShowAltText:S,ref:t}),j.priority?o.default.createElement(b,{isAppRouter:!r,imgAttributes:_}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(4210);let i=r(7757),n=r(3735);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,a,u,{src:c,sizes:d,unoptimized:f=!1,priority:g=!1,loading:p,className:m,quality:h,width:b,height:y,fill:v=!1,style:w,onLoad:S,onLoadingComplete:_,placeholder:j="empty",blurDataURL:C,fetchPriority:E,layout:P,objectFit:z,objectPosition:x,lazyBoundary:O,lazyRoot:I,...k}=e,{imgConf:R,showAltText:M,blurComplete:D,defaultLoader:N}=t,A=R||n.imageConfigDefault;if("allSizes"in A)l=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);l={...A,allSizes:e,deviceSizes:t}}let G=k.loader||N;delete k.loader,delete k.srcSet;let B="__next_img_default"in G;if(B){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=G;G=t=>{let{config:r,...i}=t;return e(i)}}if(P){"fill"===P&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!d&&(d=t)}let L="",T=s(b),F=s(y);if("object"==typeof(r=c)&&(o(r)||void 0!==r.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,L=e.src,!v){if(T||F){if(T&&!F){let t=T/e.width;F=Math.round(e.height*t)}else if(!T&&F){let t=F/e.height;T=Math.round(e.width*t)}}else T=e.width,F=e.height}}let W=!g&&("lazy"===p||void 0===p);(!(c="string"==typeof c?c:L)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,W=!1),l.unoptimized&&(f=!0),B&&c.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),g&&(E="high");let U=s(h),q=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:x}:{},M?{}:{color:"transparent"},w),V=D||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:T,heightInt:F,blurWidth:a,blurHeight:u,blurDataURL:C||"",objectFit:q.objectFit})+'")':'url("'+j+'")',J=V?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},Y=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:s,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,s),c=a.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:a.map((e,i)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:l({config:t,src:r,quality:o,width:a[c]})}}({config:l,src:c,unoptimized:f,width:T,quality:U,sizes:d,loader:G}),H={...k,loading:W?"lazy":p,fetchPriority:E,width:T,height:F,decoding:"async",className:m,style:{...q,...J},sizes:Y.sizes,srcSet:Y.srcSet,src:Y.src},Z={unoptimized:f,priority:g,placeholder:j,fill:v};return{props:H,meta:Z}}},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:s}=e,l=i?40*i:t,a=n?40*n:r,u=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},unstable_getImgProps:function(){return a}});let i=r(2575),n=r(5471),o=r(4210),s=r(8872),l=i._(r(7746)),a=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=s.Image},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},5675:function(e,t,r){e.exports=r(2555)}}]);