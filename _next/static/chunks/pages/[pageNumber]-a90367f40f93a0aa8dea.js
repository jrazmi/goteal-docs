(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[629],{2516:function(e,n,r){"use strict";r.d(n,{A:function(){return a}});var t=r(5893),o=(0,r(9163).ZP)("header").withConfig({displayName:"Layout__Header",componentId:"sc-8jgw0a-0"})(["padding:200px;"]),a=function(e){var n=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{children:"Hello world"}),n]})}},2167:function(e,n,r){"use strict";var t=r(3038),o=r(862);n.default=void 0;var a=o(r(7294)),c=r(9414),u=r(4651),i=r(7426),l={};function s(e,n,r,t){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=(0,u.useRouter)(),f=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),r=t(n,2),a=r[0],u=r[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,g=e.shallow,y=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=(n=a.Children.only(v))&&"object"===typeof n&&n.ref,_=(0,i.useIntersection)({rootMargin:"200px"}),w=t(_,2),E=w[0],L=w[1],k=a.default.useCallback((function(e){E(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,E]);(0,a.useEffect)((function(){var e=L&&r&&(0,c.isLocalURL)(d),n="undefined"!==typeof b?b:o&&o.locale,t=l[d+"%"+p+(n?"%"+n:"")];e&&!t&&s(o,d,p,{locale:n})}),[p,d,L,b,r,o]);var x={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==u&&t.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](r,t,{shallow:a,locale:i,scroll:u}))}(e,o,d,p,h,g,y,b)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof b?b:o&&o.locale,M=o&&o.isLocaleDomain&&(0,c.getDomainLocale)(p,C,o&&o.locales,o&&o.domainLocales);x.href=M||(0,c.addBasePath)((0,c.addLocale)(p,C,o&&o.defaultLocale))}return a.default.cloneElement(n,x)};n.default=f},7426:function(e,n,r){"use strict";var t=r(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!c,i=(0,o.useRef)(),l=(0,o.useState)(!1),s=t(l,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),r||f||e&&e.tagName&&(i.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=u.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return u.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,c=t.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=r(7294),a=r(3447),c="undefined"!==typeof IntersectionObserver;var u=new Map},5444:function(e,n,r){"use strict";r.r(n);var t=r(5893),o=r(1163),a=r(1664),c=r(2516);n.default=function(){var e=(0,o.useRouter)().query.pageNumber;return(0,t.jsxs)(c.A,{children:[(0,t.jsxs)("h1",{children:[" Hi ",e," "]}),(0,t.jsxs)("div",{children:["Back to"," ",(0,t.jsx)(a.default,{href:"/",as:"/goteal-docs/",children:(0,t.jsx)("a",{children:"Home"})})]})]})}},1904:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[pageNumber]",function(){return r(5444)}])},1664:function(e,n,r){e.exports=r(2167)},1163:function(e,n,r){e.exports=r(4651)}},function(e){e.O(0,[774,888,179],(function(){return n=1904,e(e.s=n);var n}));var n=e.O();_N_E=n}]);