"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9272],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(b,i(i({ref:n},d),{},{components:t})):r.createElement(b,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4398:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={sidebar_position:12},l="Binding",s={unversionedId:"Core React/binding",id:"Core React/binding",isDocsHomePage:!1,title:"Binding",description:"How to bind methods or event handlers in JSX callbacks?",source:"@site/docs/Core React/binding.md",sourceDirName:"Core React",slug:"/Core React/binding",permalink:"/react-mastery/docs/Core React/binding",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Core React/binding.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Event handling",permalink:"/react-mastery/docs/Core React/event-handling"},next:{title:"Passing parameters",permalink:"/react-mastery/docs/Core React/pass-parameters"}},d=[{value:"How to bind methods or event handlers in JSX callbacks?",id:"how-to-bind-methods-or-event-handlers-in-jsx-callbacks",children:[{value:"Note:",id:"note",children:[],level:3}],level:2}],p={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"binding"},"Binding"),(0,a.kt)("h2",{id:"how-to-bind-methods-or-event-handlers-in-jsx-callbacks"},"How to bind methods or event handlers in JSX callbacks?"),(0,a.kt)("p",null,"There are 3 possible ways to achieve this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Binding in Constructor: In JavaScript classes,\nthe methods are not bound by default. The\nsame thing applies for React event handlers\ndefined as class methods. Normally we bind\nthem in the constructor.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'class Foo extends Component {\n  constructor(props) {\n    super(props);\n    this.handleClick = this.handleClick.bind(this);\n  }\n  handleClick() {\n    console.log("Click happened");\n  }\n  render() {\n    return <button onClick={this.handleClick}>Click Me</button>;\n  }\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Public class fields syntax: If you don't like to\nuse bind approach then public class fields\nsyntax can be used to correctly bind callbacks.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'handleClick = () => {\n  console.log("this is:", this);\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<button onClick={this.handleClick}>{"Click me"}</button>\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Arrow functions in callbacks: You can use\narrow functions ",(0,a.kt)("strong",{parentName:"li"},"directly")," in the callbacks.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"handleClick() {\n    console.log('Click happened');\n}\n.\n.\n.\nrender() {\n    return <button onClick={() =>this.handleClick()}>Click Me</button>;\n}\n")),(0,a.kt)("h3",{id:"note"},"Note:"),(0,a.kt)("p",null,"If the callback is passed as prop to child\ncomponents, those components might do an extra\nre-rendering.\nIn those cases, it is preferred to go with\n",(0,a.kt)("inlineCode",{parentName:"p"},".bind()")," or public class fields syntax approach\nconsidering performance."))}u.isMDXComponent=!0}}]);