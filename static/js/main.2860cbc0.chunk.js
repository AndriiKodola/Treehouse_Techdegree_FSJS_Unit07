(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(64)},36:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),l=a.n(r),o=(a(36),a(9)),i=a(10),s=a(12),m=a(11),u=a(13),p=a(3),h=a(27),f=a.n(h),E="c282cd9752ea42bc6f5994fdd96a8277",d=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).playerInput=c.a.createRef(),a.handleSubmit=function(e){e.preventDefault(),a.props.changeTopic(a.playerInput.current.value),e.currentTarget.reset()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},c.a.createElement("input",{type:"search",ref:this.playerInput,name:"search",placeholder:"Search",required:!0}),c.a.createElement("button",{type:"submit",className:"search-button"},c.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))}}]),t}(n.Component),g=a(28),v=a.n(g),b=function(e){return c.a.createElement("nav",{className:"main-nav"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(p.b,{to:"/initial"},c.a.createElement("span",null,"No Effects"))),c.a.createElement("li",null,c.a.createElement(p.b,{to:"/grayscale"},c.a.createElement("span",null,"Geyscale"))),c.a.createElement("li",null,c.a.createElement(p.b,{to:"/frames"},c.a.createElement("span",null,"Add Frames"))),c.a.createElement("li",null,c.a.createElement(p.b,{to:"/chaotic"},c.a.createElement("span",null,"A little chaos"))),c.a.createElement("li",null,c.a.createElement(p.b,{to:"/random",onClick:function(){return e.changeTopic(v()())}},c.a.createElement("span",null,"Don't know what I want...")))))},w=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{changeTopic:e.changeTopic}),c.a.createElement(b,{changeTopic:e.changeTopic}))},y=a(7),T=function(e){var t={transform:"rotate(".concat(20*Math.random()-10,"deg)")};return c.a.createElement("li",{className:e.effects},"chaotic"===e.effects?c.a.createElement("img",{style:t,src:e.url,alt:""}):c.a.createElement("img",{src:e.url,alt:""}))},k=function(e){return c.a.createElement("ul",null,e.pics.map(function(t){return c.a.createElement(T,{effects:e.effects,url:"https://farm".concat(t.farm,".staticflickr.com/").concat(t.server,"/").concat(t.id,"_").concat(t.secret,".jpg"),key:t.id})}))},j=function(e){return c.a.createElement("div",null,c.a.createElement("p",{className:"not-exist"},"Oops! This page doesn't exist."),c.a.createElement(p.b,{className:"not-exist",to:"/"},"Go back."))},N=function(e){var t,a=e.pics.length;return 0===a?t=c.a.createElement("span",{className:"no-matches"},"No matches found."):a<24&&(t=c.a.createElement("span",{className:"fewer-matches"},"Only ",a," matches found.")),c.a.createElement("div",{className:"photo-container"},c.a.createElement("h2",null,"Results"),t,c.a.createElement(y.c,null,c.a.createElement(y.a,{exact:!0,path:"/",render:function(){return c.a.createElement(k,{effects:null,pics:e.pics})}}),c.a.createElement(y.a,{path:"/initial",render:function(){return c.a.createElement(k,{effects:null,pics:e.pics})}}),c.a.createElement(y.a,{path:"/grayscale",render:function(){return c.a.createElement(k,{effects:"greyscale",pics:e.pics})}}),c.a.createElement(y.a,{path:"/frames",render:function(){return c.a.createElement(k,{effects:"with-frame",pics:e.pics})}}),c.a.createElement(y.a,{path:"/chaotic",render:function(){return c.a.createElement(k,{effects:"chaotic",pics:e.pics})}}),c.a.createElement(y.a,{path:"/random",render:function(){return c.a.createElement(k,{effects:null,pics:e.pics})}}),c.a.createElement(y.a,{render:function(){return c.a.createElement(j,{changeTopic:e.changeTopic})}})))},O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={topic:"owl",pics:[],loading:!0},a.handleChangeTopic=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.state.topic;f.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(E,"&tags=").concat(e,"&per_page=24&format=json&nojsoncallback=1")).then(function(e){a.setState({pics:e.data.photos.photo,loading:!1})}).catch(function(e){console.log("Error occured in fetching and parding data",e)})},a.changeTopic=function(e){a.setState({topic:e,loading:!0})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.handleChangeTopic()}},{key:"componentDidUpdate",value:function(e,t){this.state.topic!==t.topic&&this.handleChangeTopic()}},{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(w,{changeTopic:this.changeTopic}),this.state.loading?c.a.createElement("p",null,"Loading..."):c.a.createElement(N,{pics:this.state.pics,changeTopic:this.changeTopic})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.2860cbc0.chunk.js.map