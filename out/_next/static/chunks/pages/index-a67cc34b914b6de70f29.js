(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2516:function(e,n,t){"use strict";t.d(n,{A:function(){return a}});var r=t(5893),o=(0,t(9163).ZP)("header").withConfig({displayName:"Layout__Header",componentId:"sc-8jgw0a-0"})(["padding:200px;"]),a=function(e){var n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{children:"Hello world"}),n]})}},2167:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var a=o(t(7294)),c=t(9414),u=t(4651),i=t(7426),l={};function s(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=(0,u.useRouter)(),f=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,g=e.shallow,y=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var _=(n=a.Children.only(v))&&"object"===typeof n&&n.ref,w=(0,i.useIntersection)({rootMargin:"200px"}),E=r(w,2),m=E[0],L=E[1],x=a.default.useCallback((function(e){m(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,m]);(0,a.useEffect)((function(){var e=L&&t&&(0,c.isLocalURL)(d),n="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(o,d,p,{locale:n})}),[p,d,L,b,t,o]);var j={ref:x,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,o,d,p,h,g,y,b)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof b?b:o&&o.locale,C=o&&o.isLocaleDomain&&(0,c.getDomainLocale)(p,k,o&&o.locales,o&&o.domainLocales);j.href=C||(0,c.addBasePath)((0,c.addLocale)(p,k,o&&o.defaultLocale))}return a.default.cloneElement(n,j)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var u=new Map},6124:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(5893),o=t(1664),a=t(2516);function c(){return(0,r.jsxs)(a.A,{children:["Hello World."," ",(0,r.jsx)(o.default,{href:"/1",as:"/goteal-docs/1",children:(0,r.jsx)("a",{children:"Page 1"})}),(0,r.jsx)(o.default,{href:"/2",as:"/goteal-docs/2",children:(0,r.jsx)("a",{children:"Page 2"})}),(0,r.jsx)(o.default,{href:"/about",as:"/goteal-docs/about",children:(0,r.jsx)("a",{children:"About"})})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6124)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);