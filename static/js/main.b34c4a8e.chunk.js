(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],[,,,,,,,,function(e,n,a){e.exports=a(17)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(3),c=a.n(o),l=(a(13),a(4)),i=a(5),m=a(7),s=a(6),d=(a(14),function(e){var n=e.onChange,a=e.markdownValue;return r.a.createElement("textarea",{id:"editor",value:a,onChange:n})}),u=a(1),h=a.n(u),p=function(e){var n=e.markdownValue,a=new h.a.Renderer;return a.link=function(e,n,a){return'<a target="_blank" href='.concat(e,">").concat(a,"</a>")},h.a.setOptions({breaks:!0}),r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:h()(n,{renderer:a})}})},w=(a(15),function(e){var n=e.children,a=e.title;return r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"Card-header"},r.a.createElement("div",{className:"Card-header-circles"},r.a.createElement("span",{className:"circle-1"}),r.a.createElement("span",{className:"circle-2"}),r.a.createElement("span",{className:"circle-3"})),r.a.createElement("span",{className:"Card-header-title"},a)),r.a.createElement("div",{className:"Card-content"},n))}),f=(a(16),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"\xa9 Anh Nguyen",r.a.createElement("span",null," "),r.a.createElement("span",null,"Repo Link: ","  ",r.a.createElement("a",{className:"footer-link",href:"https://github.com/anguyen0208/fcc-markdown-previewer",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})))))}),v="\n# Welcome to markdown previewer\n### Front End Libraries Projects at [freeCodeCamp](https://www.freecodecamp.org/)\n\nFront End Libraries Projects\n- Random Quote Machine\n- Markdown Previewer\n- Drum Machine\n- Javascript Calculator\n- Pomodoro Clock\n\nthis is a **bold** text, an _emphasis_ , a _**combined emphasis**_ , and a ~~strikethrough~~\n\nHead 1 | Head 2 | Head 3\n------ |--------| ------\nitem1 | item2 | item3\nitem4 | item5 | item6\nitem7 | item8 | item9\n\n> example of blockquote\n\nInline `code`\n\n```\n// code block\n\nfunction sum (x, y) {\n  return x + y;\n}\n```\n\n![Random Animals](https://loremflickr.com/320/240)\n",k=function(e){Object(m.a)(a,e);var n=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={markdownValue:v},e.handleChange=function(n){e.setState({markdownValue:n.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.markdownValue;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App-title"}," Markdown Previewer"),r.a.createElement("main",{className:"App-content"},r.a.createElement(w,{title:"Editor"},r.a.createElement(d,{onChange:this.handleChange,markdownValue:e})),r.a.createElement(w,{title:"Preview"},r.a.createElement(p,{markdownValue:e}))),r.a.createElement(f,null))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.b34c4a8e.chunk.js.map