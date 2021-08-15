(this["webpackJsonpgoteal-docs"]=this["webpackJsonpgoteal-docs"]||[]).push([[0],{80:function(t,e,n){"use strict";n.r(e);var c,o,a,r,i,l,s=n(0),j=n.n(s),h=n(28),d=n.n(h),b=n(26),m=n(8),x=n(11),O=n(88),g=n(3),u=n(85),f=n(82),p=n(83),v=n(84),y={initial:{opacity:0,x:-50,y:0},animate:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:300},transition:{duration:.6}},w=n(2),k=function(){return Object(w.jsx)(f.a,{children:Object(w.jsx)(p.a,{className:"justify-content-center my-5",children:Object(w.jsx)(v.a,{md:8,children:Object(w.jsxs)(u.a.div,Object(g.a)(Object(g.a)({},y),{},{children:[Object(w.jsx)("h1",{children:" Welcome to goteal"}),Object(w.jsx)("p",{children:"goteal exists to simplify the process of authoring and testing Algorand Smart Contracts for people that are familiar with the Go programming language."}),Object(w.jsx)("p",{children:"Those familiar with Go know that the language and surrounding ecosystem offers many helpful tools. goteal exists to bridge the Go ecosystem with the Algorand Smart Contract ecosystem."})]}))})})})},S=n(22),_=n(86),z=n(87),C=n(51),N=Object(s.createContext)(),F=function(t){var e=Object(s.useState)("light"),n=Object(C.a)(e,2),c=n[0],o=n[1],a=Object(s.useState)(!1),r=Object(C.a)(a,2),i=r[0],l=r[1],j=function(t){window.localStorage.setItem("theme",t),o(t)};return Object(s.useEffect)((function(){var t=window.localStorage.getItem("theme");window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&!t?j("dark"):t?o(t):j("light"),l(!0)}),[]),Object(w.jsx)(N.Provider,Object(g.a)({value:{theme:c,toggleTheme:function(){console.log("clicked"),j("light"===c?"dark":"light")},appMounted:i}},t))},L=function(){return Object(s.useContext)(N)},T=n(62),A=n(61),E=n(58),G=Object(x.default)(_.a)(c||(c=Object(S.a)(["\n    background-color: ",";\n    border-bottom: 1px solid ",";\n    ",";\n\n    .navbar-brand {\n        img {\n            width: 100px;\n        }\n    }\n    .nav-link {\n        text-transform: uppercase;\n        font-weight: 500;\n        font-size: 16px;\n        svg {\n            width:15px;\n        }\n    }\n\n\n"])),(function(t){return t.theme.colors.off}),(function(t){return t.theme.colors.off}),(function(t){return"light"===t.ctheme&&"border-bottom: 1px solid #ddd;"})),I=Object(x.default)(z.a)(o||(o=Object(S.a)(["\n        \n    \n"]))),M=Object(x.default)("div")(a||(a=Object(S.a)(["\n    margin: 5px 10px;\n    width: 1px;\n    background-color: ",";\n\n"])),(function(t){return t.theme.colors.title})),B=function(){var t=L(),e=t.theme,n=t.toggleTheme;return Object(w.jsx)(G,{expand:"lg",ctheme:e,children:Object(w.jsxs)(f.a,{children:[Object(w.jsx)(G.Brand,{as:b.b,to:"/",children:"light"===e?Object(w.jsx)("img",{src:"".concat("/goteal-docs","/img/goteal_horizontal.png"),alt:"go teal"}):Object(w.jsx)("img",{src:"".concat("/goteal-docs","/img/goteal_horizontal_white.png"),alt:"go teal"})}),Object(w.jsx)(G.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(w.jsx)(G.Collapse,{id:"basic-navbar-nav",children:Object(w.jsxs)(I,{className:"ms-auto",children:[Object(w.jsx)(I.Link,{as:b.b,to:"/about",children:"About"}),Object(w.jsx)(I.Link,{as:b.b,to:"/docs",children:"Docs"}),Object(w.jsx)(M,{}),Object(w.jsx)(I.Link,{href:"https://github.com/tmc/goteal",target:"_blank",children:Object(w.jsx)(E.a,{})}),Object(w.jsx)(M,{}),Object(w.jsx)(I.Link,{onClick:n,children:"light"===e?Object(w.jsx)(A.a,{}):Object(w.jsx)(T.a,{})})]})})]})})},D=Object(x.default)("footer")(r||(r=Object(S.a)(["\n    padding: 100px 0px;\n    border-top: 1px solid ",";\n    ",";\n    .footer-logo {\n        display: block;\n        width: 200px;\n        max-width: 100%;\n        margin: 15px auto;\n    }\n"])),(function(t){return t.theme.colors.off}),(function(t){return"light"===t.ctheme&&"border-top: 1px solid #ddd;"})),J=function(){var t=L().theme;return Object(w.jsx)(D,{ctheme:t,children:"light"===t?Object(w.jsx)("img",{className:"footer-logo",src:"".concat("/goteal-docs","/img/goteal_vertical.png"),alt:"go teal"}):Object(w.jsx)("img",{className:"footer-logo",src:"".concat("/goteal-docs","/img/goteal_vertical_white.png"),alt:"go teal"})})},P=Object(x.default)("main")(i||(i=Object(S.a)(["\ndisplay: flex;\nmin-height: 100vh;\n"]))),H=function(t){var e=t.children;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("header",{children:Object(w.jsx)(B,{})}),Object(w.jsx)(P,{children:e}),Object(w.jsx)(J,{})]})},W=n(63),q={colors:{body:"#171717",title:"#5db6a6",font:"#ecf0f1",off:"#383838"}},K={colors:{body:"#ecf0f1",title:"#5db6a6",font:"#171717",off:"#F7F7F7"}},Q=Object(x.createGlobalStyle)(l||(l=Object(S.a)(["\n    ","\n    *:focus {\n        outline: none !important;\n        box-shadow: none !important;\n    } \n    body {\n        background: ",";\n        color: ",";\n        font-family: Overpass, sans-serif;\n        transition: all 0.25s linear;\n        font-size: 20px;\n        line-height: 1.45;\n    }\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6,\n    legend,\n    a,\n    label {\n        color: ",";\n    }\n    .logo {\n        font-size:24px;fill:#5db6a6;font-family:Overpass-ExtraLightItalic, Overpass;font-weight:200;font-style:italic;\n    }\n    .navbar {\n        .navbar-nav {\n            \n            .nav-link {\n                color: ",";\n            }\n            .nav-link:hover,\n            .nav-link:focus,\n            .nav-link.active,\n            .nav-link:active {\n                color: ",";\n            }\n            .show {\n                .nav-link {\n                    color: ",";\n                }\n            }\n        }\n    }\n"])),W.normalize,(function(t){return t.theme.colors.body}),(function(t){return t.theme.colors.font}),(function(t){return t.theme.colors.title}),(function(t){return t.theme.colors.title}),(function(t){return t.theme.colors.font}),(function(t){return t.theme.colors.title})),R=[{path:"/about",component:function(){return Object(w.jsx)(f.a,{children:Object(w.jsx)(p.a,{className:"justify-content-center my-5",children:Object(w.jsx)(v.a,{md:8,children:Object(w.jsxs)(u.a.div,Object(g.a)(Object(g.a)({},y),{},{children:[Object(w.jsx)("h1",{children:" About "}),Object(w.jsx)("p",{children:" probably don't need this page....."})]}))})})})}},{path:"/docs",component:function(){return Object(w.jsx)(f.a,{children:Object(w.jsx)(p.a,{className:"justify-content-center my-5",children:Object(w.jsx)(v.a,{md:8,children:Object(w.jsxs)(u.a.div,Object(g.a)(Object(g.a)({},y),{},{children:[Object(w.jsx)("h1",{children:" Docs "}),Object(w.jsx)("p",{children:" Here's some documentation... "})]}))})})})}}],U=function(){var t=Object(m.f)(),e="light"===L().theme?K:q;return Object(w.jsx)(x.ThemeProvider,{theme:e,children:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Q,{}),Object(w.jsx)(O.a,{exitBeforeEnter:!0,initial:!1,children:Object(w.jsx)(H,{children:Object(w.jsxs)(m.c,{location:t,children:[Object(w.jsx)(m.a,{exact:!0,path:"/",children:Object(w.jsx)(k,{})}),R.map((function(t,e){return Object(w.jsx)(m.a,{path:t.path,component:t.component},e)}))]},t.pathname)})})]})})};n(79);d.a.render(Object(w.jsx)(j.a.StrictMode,{children:Object(w.jsx)(b.a,{children:Object(w.jsx)(F,{children:Object(w.jsx)(U,{})})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.fa6c4f23.chunk.js.map