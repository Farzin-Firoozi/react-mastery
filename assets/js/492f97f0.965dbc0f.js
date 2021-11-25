"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1811],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||l[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},238:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:3},s="What is JSX?",p={unversionedId:"Core React/what-is-jsx",id:"Core React/what-is-jsx",isDocsHomePage:!1,title:"What is JSX?",description:"JSX is a XML-like syntax extension to ECMAScript",source:"@site/docs/Core React/what-is-jsx.md",sourceDirName:"Core React",slug:"/Core React/what-is-jsx",permalink:"/react-mastery/docs/Core React/what-is-jsx",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Core React/what-is-jsx.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Major features of React",permalink:"/react-mastery/docs/Core React/major-features-of-react"},next:{title:"Element vs Component",permalink:"/react-mastery/docs/Core React/difference-between-element-and-component"}},u=[],l={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-jsx"},"What is JSX?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSX")," is a ",(0,o.kt)("strong",{parentName:"p"},"XML-like")," syntax extension to ECMAScript\n(the acronym stands for JavaScript XML). Basically it\njust provides syntactic sugar for the\n",(0,o.kt)("inlineCode",{parentName:"p"},"React.createElement()")," function, giving us\nexpressiveness of JavaScript along with HTML like\ntemplate syntax."),(0,o.kt)("p",null,"In the example below text inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"<h1>")," tag is\nreturned as a JavaScript function to the render\nfunction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'class App extends React.Component {\n  render() {\n    return (\n      <div>\n        <h1>"Welcome to React!"</h1>\n      </div>\n    );\n  }\n}\n')))}f.isMDXComponent=!0}}]);