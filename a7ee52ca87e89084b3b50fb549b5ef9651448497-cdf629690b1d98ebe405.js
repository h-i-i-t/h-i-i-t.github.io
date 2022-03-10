"use strict";(self.webpackChunkhi1t0_blog=self.webpackChunkhi1t0_blog||[]).push([[619],{9408:function(e,t,n){function r(e,t,n){var r={};return Object.keys(e).forEach((function(i){r[i]=e[i].reduce((function(e,r){return r&&(n&&n[r]&&e.push(n[r]),e.push(t(r))),e}),[]).join(" ")})),r}n.d(t,{Z:function(){return r}})},6756:function(e,t){var n,r=function(e){return e},i=(n=r,{configure:function(e){n=e},generate:function(e){return n(e)},reset:function(){n=r}});t.Z=i},8416:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(6756),i={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function o(e,t){return i[t]||"".concat(r.Z.generate(e),"-").concat(t)}},2194:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(8416);function i(e,t){var n={};return t.forEach((function(t){n[t]=(0,r.Z)(e,t)})),n}},6449:function(e,t,n){n.d(t,{Z:function(){return o}});n(7294);var r=n(8377),i=n(9552);function o(){return(0,r.Z)(i.Z)}},9240:function(e,t,n){var r=n(6550);t.Z=r.Z},2067:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(7462),i=n(7294),o=n(3366),a=n(5505),u=n(9408),c=n(9240),l=n(7761),f=n(7774),d=n(8416);function s(e){return(0,d.Z)("MuiSvgIcon",e)}(0,n(2194).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var m=n(5893),v=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],p=(0,f.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"inherit"!==n.color&&t["color".concat((0,c.Z)(n.color))],t["fontSize".concat((0,c.Z)(n.fontSize))]]}})((function(e){var t,n,r,i,o,a,u,c,l,f,d,s,m,v,p,h,b,w=e.theme,g=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(t=w.transitions)||null==(n=t.create)?void 0:n.call(t,"fill",{duration:null==(r=w.transitions)||null==(i=r.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(o=w.typography)||null==(a=o.pxToRem)?void 0:a.call(o,20))||"1.25rem",medium:(null==(u=w.typography)||null==(c=u.pxToRem)?void 0:c.call(u,24))||"1.5rem",large:(null==(l=w.typography)||null==(f=l.pxToRem)?void 0:f.call(l,35))||"2.1875"}[g.fontSize],color:null!=(d=null==(s=w.palette)||null==(m=s[g.color])?void 0:m.main)?d:{action:null==(v=w.palette)||null==(p=v.action)?void 0:p.active,disabled:null==(h=w.palette)||null==(b=h.action)?void 0:b.disabled,inherit:void 0}[g.color]}})),h=i.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiSvgIcon"}),i=n.children,f=n.className,d=n.color,h=void 0===d?"inherit":d,b=n.component,w=void 0===b?"svg":b,g=n.fontSize,y=void 0===g?"medium":g,Z=n.htmlColor,S=n.inheritViewBox,x=void 0!==S&&S,M=n.titleAccess,E=n.viewBox,k=void 0===E?"0 0 24 24":E,z=(0,o.Z)(n,v),L=(0,r.Z)({},n,{color:h,component:w,fontSize:y,inheritViewBox:x,viewBox:k}),I={};x||(I.viewBox=k);var R=function(e){var t=e.color,n=e.fontSize,r=e.classes,i={root:["root","inherit"!==t&&"color".concat((0,c.Z)(t)),"fontSize".concat((0,c.Z)(n))]};return(0,u.Z)(i,s,r)}(L);return(0,m.jsxs)(p,(0,r.Z)({as:w,className:(0,a.Z)(R.root,f),ownerState:L,focusable:"false",color:Z,"aria-hidden":!M||void 0,role:M?"img":void 0,ref:t},I,z,{children:[i,M?(0,m.jsx)("title",{children:M}):null]}))}));h.muiName="SvgIcon";var b=h;function w(e,t){var n=function(n,i){return(0,m.jsx)(b,(0,r.Z)({"data-testid":"".concat(t,"Icon"),ref:i},n,{children:e}))};return n.muiName=b.muiName,i.memo(i.forwardRef(n))}},4026:function(e,t,n){var r=n(6164);t.Z=r.Z},7093:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),i=n(6164);var o=function(e){var t=r.useRef(e);return(0,i.Z)((function(){t.current=e})),r.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}},743:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),i=n(6386);var o=function(e,t){return r.useMemo((function(){return null==e&&null==t?null:function(n){(0,i.Z)(e,n),(0,i.Z)(t,n)}}),[e,t])}},93:function(e,t,n){n.d(t,{Z:function(){return s}});var r,i=n(7294),o=!0,a=!1,u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function l(){o=!1}function f(){"hidden"===this.visibilityState&&a&&(o=!0)}function d(e){var t,n,r,i=e.target;try{return i.matches(":focus-visible")}catch(a){}return o||(n=(t=i).type,!("INPUT"!==(r=t.tagName)||!u[n]||t.readOnly)||"TEXTAREA"===r&&!t.readOnly||!!t.isContentEditable)}var s=function(){var e=i.useCallback((function(e){var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",c,!0),t.addEventListener("mousedown",l,!0),t.addEventListener("pointerdown",l,!0),t.addEventListener("touchstart",l,!0),t.addEventListener("visibilitychange",f,!0))}),[]),t=i.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!d(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(a=!0,window.clearTimeout(r),r=window.setTimeout((function(){a=!1}),100),t.current=!1,!0)},ref:e}}},6386:function(e,t,n){function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:function(){return r}})},6164:function(e,t,n){var r=n(7294),i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.Z=i},5505:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})},6405:function(e,t,n){var r=n(7294),i=n(845),o=n(396);t.Z=function(){var e,t,a=(0,i.useStaticQuery)("3257411868"),u=null===(e=a.site.siteMetadata)||void 0===e?void 0:e.author,c=null===(t=a.site.siteMetadata)||void 0===t?void 0:t.social;return r.createElement("div",{className:"bio"},r.createElement(o.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:n(1550)}),(null==u?void 0:u.name)&&r.createElement("p",null,"Written by ",r.createElement("strong",null,u.name)," ",(null==u?void 0:u.summary)||null," ",r.createElement("a",{href:"https://twitter.com/"+((null==c?void 0:c.twitter)||"")},"You should follow them on Twitter")))}},4482:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7294),i=n.t(r,2),o=n(845),a=n(396),u=n(7774),c=n(885),l=n(2665),f=n(3888),d=n(4026);function s(e,t,n,i,o){var a="undefined"!=typeof window&&void 0!==window.matchMedia,u=r.useState((function(){return o&&a?n(e).matches:i?i(e).matches:t})),l=(0,c.Z)(u,2),f=l[0],s=l[1];return(0,d.Z)((function(){var t=!0;if(a){var r=n(e),i=function(){t&&s(r.matches)};return i(),r.addListener(i),function(){t=!1,r.removeListener(i)}}}),[e,n,a]),f}var m=i.useSyncExternalStore;function v(e,t,n,i){var o=r.useCallback((function(){return t}),[t]),a=r.useMemo((function(){if(null!==i){var t=i(e).matches;return function(){return t}}return o}),[o,e,i]),u=r.useMemo((function(){if(null===n)return[o,function(){return function(){}}];var t=n(e);return[function(){return t.matches},function(e){return t.addListener(e),function(){t.removeListener(e)}}]}),[o,n,e]),l=(0,c.Z)(u,2),f=l[0],d=l[1];return m(d,f,a)}var p=n(6449),h=(0,u.ZP)("article")((function(e){var t=e.theme;return Object.assign({},t.mixins.blogContainer)})),b=(0,u.ZP)("div")((function(e){var t=e.theme;return Object.assign({},t.mixins.blogImage)})),w=(0,u.ZP)("div")((function(e){var t=e.theme;return Object.assign({},t.mixins.blogTitle)})),g=function(e){var t=e.posts,n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,l.Z)(),r="undefined"!=typeof window&&void 0!==window.matchMedia,i=(0,f.Z)({name:"MuiUseMediaQuery",props:t,theme:n}),o=i.defaultMatches,a=void 0!==o&&o,u=i.matchMedia,c=void 0===u?r?window.matchMedia:null:u,d=i.ssrMatchMedia,p=void 0===d?null:d,h=i.noSsr,b="function"==typeof e?e(n):e;return b=b.replace(/^@media( ?)/m,""),(void 0!==m?v:s)(b,a,c,p,h)}((0,p.Z)().breakpoints.down("xs"));return r.createElement("ol",{style:{listStyle:"none"}},t.map((function(e){var t,i=e.frontmatter.title||e.fields.slug;return r.createElement(h,{key:e.fields.slug},e.frontmatter.hero?r.createElement(b,null,r.createElement(a.G,{style:{borderRadius:8},image:(0,a.d)(null===(t=e.frontmatter.hero)||void 0===t?void 0:t.childImageSharp.gatsbyImageData),alt:e.frontmatter.title})):"",r.createElement(w,null,r.createElement(o.Link,{to:""+e.fields.slug,style:{textDecoration:"none"}},i)),!e.frontmatter.hero||n?r.createElement("small",null,e.frontmatter.date):"",r.createElement("section",null,r.createElement("p",{style:{overflow:"hidden"},dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})))})))}},1550:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#b8b808","images":{"fallback":{"src":"/static/092b9849a75dfcd09db85d825ba599fe/e5610/profile-pic.png","srcSet":"/static/092b9849a75dfcd09db85d825ba599fe/e5610/profile-pic.png 50w,\\n/static/092b9849a75dfcd09db85d825ba599fe/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/092b9849a75dfcd09db85d825ba599fe/d4bf4/profile-pic.avif 50w,\\n/static/092b9849a75dfcd09db85d825ba599fe/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/092b9849a75dfcd09db85d825ba599fe/3faea/profile-pic.webp 50w,\\n/static/092b9849a75dfcd09db85d825ba599fe/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);