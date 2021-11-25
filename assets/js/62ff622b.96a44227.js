"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6437],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1773:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],c={sidebar_position:20},i="Controlled components",s={unversionedId:"Core React/controlled-components",id:"Core React/controlled-components",isDocsHomePage:!1,title:"Controlled components",description:"What are controlled components?",source:"@site/docs/Core React/controlled-components.md",sourceDirName:"Core React",slug:"/Core React/controlled-components",permalink:"/react-mastery/docs/Core React/controlled-components",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Core React/controlled-components.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"What is React Fiber?",permalink:"/react-mastery/docs/Core React/react-fiber"},next:{title:"create-vs-clone",permalink:"/react-mastery/docs/Core React/create-vs-clone"}},u=[{value:"What are controlled components?",id:"what-are-controlled-components",children:[],level:2},{value:"What are uncontrolled components?",id:"what-are-uncontrolled-components",children:[],level:2}],p={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"controlled-components"},"Controlled components"),(0,a.kt)("h2",{id:"what-are-controlled-components"},"What are controlled components?"),(0,a.kt)("p",null,"A component that controls the input elements within\nthe forms on subsequent user input is called\nControlled Component, i.e, every state mutation will\nhave an associated handler function.\nFor example, to write all the names in uppercase\nletters, we use handleChange as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'handleChange(event) {\n    this.setState({value:\n    event.target.value.toUpperCase()})\n}\n\n// controlled\n<input value={someState} type="text" onChange={handleChange} />\n\n// not controlled\n<input type="text" onChange={handleChange} />\n\n')),(0,a.kt)("h2",{id:"what-are-uncontrolled-components"},"What are uncontrolled components?"),(0,a.kt)("p",null,"The Uncontrolled Components are the ones that store\ntheir own state internally, and you query the DOM\nusing a ref to find its current value when you need it.\nThis is a bit more like traditional HTML.\nIn the below UserProfile component, the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," input is\naccessed using ref."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'class UserProfile extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleSubmit = this.handleSubmit.bind(this);\n    this.input = React.createRef();\n  }\n  handleSubmit(event) {\n    alert("A name was submitted: " + this.input.current.value);\n    event.preventDefault();\n  }\n  render() {\n    return (\n      <form onSubmit={this.handleSubmit}>\n        <label>\n          {"Name:"}\n          <input type="text" ref={this.input} />\n        </label>\n        <input type="submit" value="Submit" />\n      </form>\n    );\n  }\n}\n')),(0,a.kt)("p",null,"In most cases, it's recommended to use controlled\ncomponents to implement forms.In a controlled\ncomponent, form data is handled by a React\ncomponent. The alternative is uncontrolled\ncomponents, where form data is handled by the\nDOM itself."))}m.isMDXComponent=!0}}]);