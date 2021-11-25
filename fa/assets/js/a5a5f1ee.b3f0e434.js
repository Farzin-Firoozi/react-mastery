"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4482],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5993:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:8},c="What is the state?",p={unversionedId:"Core React/what-is-state",id:"Core React/what-is-state",isDocsHomePage:!1,title:"What is the state?",description:"State of a component is an object that holds some",source:"@site/docs/Core React/what-is-state.md",sourceDirName:"Core React",slug:"/Core React/what-is-state",permalink:"/react-mastery/fa/docs/Core React/what-is-state",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Core React/what-is-state.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"What are Pure Components?",permalink:"/react-mastery/fa/docs/Core React/pure-components"},next:{title:"What are props?",permalink:"/react-mastery/fa/docs/Core React/what-are-props"}},u=[],l={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-the-state"},"What is the state?"),(0,a.kt)("p",null,"State of a component is an object that holds some\ninformation that may change over the lifetime of the\ncomponent."),(0,a.kt)("p",null,"We should always try to make our state as ",(0,a.kt)("strong",{parentName:"p"},"simple")," as possible and ",(0,a.kt)("strong",{parentName:"p"},"minimize")," the number of stateful components."),(0,a.kt)("p",null,"Let's create a user component with message state,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'class User extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      message: "Welcome to React world",\n    };\n  }\n  render() {\n    return (\n      <div>\n        <h1>{this.state.message}</h1>\n      </div>\n    );\n  }\n}\n')),(0,a.kt)("p",null,"State is similar to props, but it is ",(0,a.kt)("strong",{parentName:"p"},"private")," and ",(0,a.kt)("strong",{parentName:"p"},"fully controlled")," by the component. i.e, It is not accessible to\nany other component until the owner component decides to pass it."))}m.isMDXComponent=!0}}]);