"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2330],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||c;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6790:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),a=["components"],s={sidebar_position:6},i="Class vs Function",u={unversionedId:"Core React/class-vs-function",id:"Core React/class-vs-function",isDocsHomePage:!1,title:"Class vs Function",description:"If the component needs state or lifecycle methods",source:"@site/docs/Core React/class-vs-function.md",sourceDirName:"Core React",slug:"/Core React/class-vs-function",permalink:"/react-mastery/fa/docs/Core React/class-vs-function",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Core React/class-vs-function.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Creating components",permalink:"/react-mastery/fa/docs/Core React/create-components"},next:{title:"What are Pure Components?",permalink:"/react-mastery/fa/docs/Core React/pure-components"}},l=[],p={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"class-vs-function"},"Class vs Function"),(0,c.kt)("p",null,"If the component needs state or lifecycle methods\nthen use the class component otherwise use the\nfunction component."),(0,c.kt)("p",null,"However, from React ",(0,c.kt)("strong",{parentName:"p"},"16.8")," with\nthe addition of ",(0,c.kt)("strong",{parentName:"p"},"Hooks"),", you could use ",(0,c.kt)("strong",{parentName:"p"},"state")," , ",(0,c.kt)("strong",{parentName:"p"},"lifecycle")," methods and other features that were only available in the class component right in your function component."))}f.isMDXComponent=!0}}]);