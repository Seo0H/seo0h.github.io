(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7484:function(e){var t,n,r,u,i,o,s,a,c,l,f,d,h,p,y,g,v,$,m,_,b;e.exports=(t="millisecond",n="second",r="minute",u="hour",i="week",o="month",s="quarter",a="year",c="date",l="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},(y={})[p="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}},g=function(e){return e instanceof _},v=function e(t,n,r){var u;if(!t)return p;if("string"==typeof t){var i=t.toLowerCase();y[i]&&(u=i),n&&(y[i]=n,u=i);var o=t.split("-");if(!u&&o.length>1)return e(o[0])}else{var s=t.name;y[s]=t,u=s}return!r&&u&&(p=u),u||!r&&p},$=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new _(n)},(m={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),u=t.clone().add(r,o),i=n-u<0,s=t.clone().add(r+(i?-1:1),o);return+(-(r+(n-u)/(i?u-s:s-u))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:o,y:a,w:i,d:"day",D:c,h:u,m:r,s:n,ms:t,Q:s})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=v,m.i=g,m.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},b=(_=function(){function e(e){this.$L=v(e.locale,null,!0),this.parse(e)}var h=e.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(m.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(f);if(r){var u=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],u,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],u,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return m},h.isValid=function(){return this.$d.toString()!==l},h.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return $(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<$(e)},h.$g=function(e,t,n){return m.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var s=this,l=!!m.u(t)||t,f=m.p(e),d=function(e,t){var n=m.w(s.$u?Date.UTC(s.$y,t,e):new Date(s.$y,t,e),s);return l?n:n.endOf("day")},h=function(e,t){return m.w(s.toDate()[e].apply(s.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),s)},p=this.$W,y=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case a:return l?d(1,0):d(31,11);case o:return l?d(1,y):d(0,y+1);case i:var $=this.$locale().weekStart||0,_=(p<$?p+7:p)-$;return d(l?g-_:g+(6-_),y);case"day":case c:return h(v+"Hours",0);case u:return h(v+"Minutes",1);case r:return h(v+"Seconds",2);case n:return h(v+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,i){var s,l=m.p(e),f="set"+(this.$u?"UTC":""),d=((s={}).day=f+"Date",s[c]=f+"Date",s[o]=f+"Month",s[a]=f+"FullYear",s[u]=f+"Hours",s[r]=f+"Minutes",s[n]=f+"Seconds",s[t]=f+"Milliseconds",s)[l],h="day"===l?this.$D+(i-this.$W):i;if(l===o||l===a){var p=this.clone().set(c,1);p.$d[d](h),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[m.p(e)]()},h.add=function(e,t){var s,c=this;e=Number(e);var l=m.p(t),f=function(t){var n=$(c);return m.w(n.date(n.date()+Math.round(t*e)),c)};if(l===o)return this.set(o,this.$M+e);if(l===a)return this.set(a,this.$y+e);if("day"===l)return f(1);if(l===i)return f(7);var d=((s={})[r]=6e4,s[u]=36e5,s[n]=1e3,s)[l]||1,h=this.$d.getTime()+e*d;return m.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=e||"YYYY-MM-DDTHH:mm:ssZ",u=m.z(this),i=this.$H,o=this.$m,s=this.$M,a=n.weekdays,c=n.months,f=n.meridiem,h=function(e,n,u,i){return e&&(e[n]||e(t,r))||u[n].slice(0,i)},p=function(e){return m.s(i%12||12,e,"0")},y=f||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(d,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return m.s(t.$y,4,"0");case"M":return s+1;case"MM":return m.s(s+1,2,"0");case"MMM":return h(n.monthsShort,s,c,3);case"MMMM":return h(c,s);case"D":return t.$D;case"DD":return m.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(n.weekdaysMin,t.$W,a,2);case"ddd":return h(n.weekdaysShort,t.$W,a,3);case"dddd":return a[t.$W];case"H":return String(i);case"HH":return m.s(i,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return y(i,o,!0);case"A":return y(i,o,!1);case"m":return String(o);case"mm":return m.s(o,2,"0");case"s":return String(t.$s);case"ss":return m.s(t.$s,2,"0");case"SSS":return m.s(t.$ms,3,"0");case"Z":return u}return null}(e)||u.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,t,c){var l,f=this,d=m.p(t),h=$(e),p=(h.utcOffset()-this.utcOffset())*6e4,y=this-h,g=function(){return m.m(f,h)};switch(d){case a:l=g()/12;break;case o:l=g();break;case s:l=g()/3;break;case i:l=(y-p)/6048e5;break;case"day":l=(y-p)/864e5;break;case u:l=y/36e5;break;case r:l=y/6e4;break;case n:l=y/1e3;break;default:l=y}return c?l:m.a(l)},h.daysInMonth=function(){return this.endOf(o).$D},h.$locale=function(){return y[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=v(e,t,!0);return r&&(n.$L=r),n},h.clone=function(){return m.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},e}()).prototype,$.prototype=b,[["$ms",t],["$s",n],["$m",r],["$H",u],["$W","day"],["$M",o],["$y",a],["$D",c]].forEach(function(e){b[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),$.extend=function(e,t){return e.$i||(e(t,_,$),e.$i=!0),$},$.locale=v,$.isDayjs=g,$.unix=function(e){return $(1e3*e)},$.en=y[p],$.Ls=y,$.p={},$)},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(85)}])},3991:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return u},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return o},ACTION_SERVER_PATCH:function(){return s},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return l}});let u="refresh",i="navigate",o="restore",s="server-patch",a="prefetch",c="fast-refresh",l="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(2387),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(2575),u=r._(n(7294)),i=n(4532),o=n(3353),s=n(1410),a=n(9064),c=n(370),l=n(9955),f=n(4224),d=n(508),h=n(1516),p=n(4266),y=n(3991),g=new Set;function v(e,t,n,r,u,i){if(!i&&!(0,o.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let u=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+u;if(g.has(i))return;g.add(i)}let s=i?e.prefetch(t,u):e.prefetch(t,n,r);Promise.resolve(s).catch(e=>{})}function $(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let m=u.default.forwardRef(function(e,t){let n,r;let{href:s,as:g,children:m,prefetch:_=null,passHref:b,replace:M,shallow:x,scroll:O,locale:S,onClick:w,onMouseEnter:D,onTouchStart:j,legacyBehavior:C=!1,...T}=e;n=m,C&&("string"==typeof n||"number"==typeof n)&&(n=u.default.createElement("a",null,n));let k=u.default.useContext(l.RouterContext),E=u.default.useContext(f.AppRouterContext),P=null!=k?k:E,I=!k,A=!1!==_,L=null===_?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:R,as:N}=u.default.useMemo(()=>{if(!k){let e=$(s);return{href:e,as:g?$(g):e}}let[e,t]=(0,i.resolveHref)(k,s,!0);return{href:e,as:g?(0,i.resolveHref)(k,g):t||e}},[k,s,g]),H=u.default.useRef(R),Y=u.default.useRef(N);C&&(r=u.default.Children.only(n));let U=C?r&&"object"==typeof r&&r.ref:t,[F,W,K]=(0,d.useIntersection)({rootMargin:"200px"}),V=u.default.useCallback(e=>{(Y.current!==N||H.current!==R)&&(K(),Y.current=N,H.current=R),F(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[N,U,R,K,F]);u.default.useEffect(()=>{P&&W&&A&&v(P,R,N,{locale:S},{kind:L},I)},[N,R,W,S,A,null==k?void 0:k.locale,P,I,L]);let z={ref:V,onClick(e){C||"function"!=typeof w||w(e),C&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,n,r,i,s,a,c,l,f){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l&&!(0,o.isLocalURL)(n)))return;e.preventDefault();let p=()=>{let e=null==a||a;"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:s,locale:c,scroll:e}):t[i?"replace":"push"](r||n,{forceOptimisticNavigation:!f,scroll:e})};l?u.default.startTransition(p):p()}(e,P,R,N,M,x,O,S,I,A)},onMouseEnter(e){C||"function"!=typeof D||D(e),C&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),P&&(A||!I)&&v(P,R,N,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:L},I)},onTouchStart(e){C||"function"!=typeof j||j(e),C&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),P&&(A||!I)&&v(P,R,N,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:L},I)}};if((0,a.isAbsoluteUrl)(N))z.href=N;else if(!C||b||"a"===r.type&&!("href"in r.props)){let e=void 0!==S?S:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,h.getDomainLocale)(N,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);z.href=t||(0,p.addBasePath)((0,c.addLocale)(N,e,null==k?void 0:k.defaultLocale))}return C?u.default.cloneElement(r,z):u.default.createElement("a",{...T,...z},n)}),_=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(7294),u=n(29),i="function"==typeof IntersectionObserver,o=new Map,s=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,c=a||!i,[l,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),h=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(i){if(c||l)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:u,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=s.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=o.get(r)))return t;let u=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=u.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:u},s.push(n),o.set(n,t),t}(n);return i.set(e,t),u.observe(e),function(){if(i.delete(e),u.unobserve(e),0===i.size){u.disconnect(),o.delete(r);let e=s.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!l){let e=(0,u.requestIdleCallback)(()=>f(!0));return()=>(0,u.cancelIdleCallback)(e)}},[c,n,t,l,d.current]);let p=(0,r.useCallback)(()=>{f(!1)},[]);return[h,l,p]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},85:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return y}});var r=n(6971),u=n(5893),i=n(7484),o=n.n(i),s=n(5675),a=n.n(s),c=n(1664),l=n.n(c),f=n(5816),d=n(9747);function h(){let e=(0,r._)(["\n  cursor: pointer;\n  border-radius: 18px;\n  border: 10px solid transparent;\n\n  &:hover {\n    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);\n  }\n"]);return h=function(){return e},e}var p=!0;function y(e){let{posts:t}=e;return(0,u.jsxs)(d.xu,{padding:"0 10px",children:[(0,u.jsx)(d.xu,{margin:"30px 0 25px 0",children:(0,u.jsx)("h1",{children:"Seo (young)"})}),(0,u.jsxs)(d.gC,{gap:"10px",margin:"0 0 100px 0",children:[(0,u.jsxs)("p",{children:["I am a front-end developer who loves design and coding.",(0,u.jsx)("br",{}),"This is a small space where I record the problems I faced while making the product."]}),"-",(0,u.jsxs)("p",{children:["디자인과 코딩을 사랑하는 프론트엔드 개발자입니다. 무언가를 만들어내는 것을 사랑하는 메이커이기도 해요.",(0,u.jsx)("br",{}),"이곳은 제가 메이킹을 하며 마주한 문제들을 기록해 둔 소소한 공간입니다."]})]}),t.map(e=>(0,u.jsx)(l(),{href:{pathname:"/blog/[slug]",query:{slug:e._id}},children:(0,u.jsxs)(g,{gap:"24px",alignItems:"center",children:[(0,u.jsx)(d.xu,{position:"relative",width:"240px",height:"240px",children:(0,u.jsx)(a(),{style:{objectFit:"cover",borderRadius:"10px"},src:e.image,alt:"img",fill:!0})}),(0,u.jsxs)(d.gC,{gap:"16px",children:[(0,u.jsx)("h2",{children:e.title}),(0,u.jsx)("p",{children:e.description}),(0,u.jsx)("p",{children:o()(e.date).format("YY.MM.DD")})]})]})},e._id))]})}let g=(0,f.zo)(d.Ug)(h())},1664:function(e,t,n){e.exports=n(5569)}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);