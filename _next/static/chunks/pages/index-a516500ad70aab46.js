(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2890)}])},2890:function(e,n,t){"use strict";function r(e,n,t,r,a,i,o){try{var s=e[i](o),u=s.value}catch(c){return void t(c)}s.done?n(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,i){var o=e.apply(n,t);function s(e){r(o,a,i,s,u,"next",e)}function u(e){r(o,a,i,s,u,"throw",e)}s(void 0)}))}}t.r(n),t.d(n,{__N_SSG:function(){return w},default:function(){return C}});var i=t(1799),o=t(9396);function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=t(414),l=t(5893),d=t(9008),f=t.n(d),h=t(5675),p=t.n(h),_=t(214),m=t.n(_),v=t(7754),g=t.n(v),x=t(1664),A=t.n(x),b=t(5697),j=t.n(b),y={src:"/Webshop/_next/static/media/imagenotfound.0bcd5e1b.png",height:430,width:353,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAP1BMVEX////+/v79/f38/P37+/v5+fr4+fj39/f19vX19fX09PTz8/Pz8vLx8fHu7u7s7O3s7Ozq6urp6eni4uLb2tuALCs2AAAAM0lEQVR42i3Bhw3AIBAEwb03jm8y/deKkJghJD9BfKPnQwLUCttbeKpHs8D1325sElrQBCnzAQyCoIBNAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8},S=t(7294);C.propTypes={data:j().array};var w=!0;function C(e){var n=e.data,t=function(e){switch(e.target.id){case"min":L((0,o.Z)((0,i.Z)({},Z),{value:e.target.value})),Z.value>=I.value-1&&T((0,o.Z)((0,i.Z)({},I),{value:parseInt(Z.value,10)+1}));break;case"max":T((0,o.Z)((0,i.Z)({},I),{value:e.target.value})),I.value<=Z.value+1&&L((0,o.Z)((0,i.Z)({},Z),{value:parseInt(I.value,10)-1}))}},r=(0,S.useState)(n),s=r[0],d=r[1],h=(0,S.useState)(!1),_=h[0],v=h[1],x=(0,S.useState)("beer_name"),b=x[0],j=x[1],w=(0,S.useState)(""),C=w[0],E=w[1],H=(0,S.useState)("name"),P=H[0],k=H[1],M=(0,S.useRef)(),O=(0,S.useState)({id:"min",value:30}),Z=O[0],L=O[1],B=(0,S.useState)({id:"max",value:70}),I=B[0],T=B[1];(0,S.useEffect)((function(){_||function(e){var n=u(s);switch(e){case"ibu":case"id":d(n.sort((function(n,t){return n[e]-t[e]})));break;default:d(n.sort((function(n,t){return n[e].localeCompare(t[e])})))}}(P),v(!0)}),[_]),(0,S.useEffect)(a((function(){var e;return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return[4,N(b,C,Z.value,I.value)];case 1:return e=n.sent(),d(e),v(!1),[2]}}))})),[C,b,P,Z,I]);return(0,S.useEffect)((function(){M.current.focus()}),[]),(0,l.jsxs)("div",{className:m().container,children:[(0,l.jsx)(f(),{children:(0,l.jsx)("title",{children:"Brewdog"})}),(0,l.jsxs)("main",{className:m().main,children:[(0,l.jsx)("h2",{children:"SEARCH"}),(0,l.jsx)("input",{type:"text",ref:M,placeholder:"Search...",value:C,onChange:function(e){E(e.target.value)}}),(0,l.jsx)("div",{children:"Search for"}),(0,l.jsxs)("select",{value:b,onChange:function(e){j(e.target.value)},children:[(0,l.jsx)("option",{value:"beer_name",children:"Name"}),(0,l.jsx)("option",{value:"hops",children:"Hops"}),(0,l.jsx)("option",{value:"malt",children:"Malt"}),(0,l.jsx)("option",{value:"food",children:"Food pairings"})]}),(0,l.jsx)("div",{children:"Sort by"}),(0,l.jsxs)("select",{value:P,onChange:function(e){k(e.target.value)},children:[(0,l.jsx)("option",{value:"name",children:"Name"}),(0,l.jsx)("option",{value:"ibu",children:"Price"})]}),(0,l.jsx)("div",{children:"Price range"}),(0,l.jsxs)("div",{children:["From $",Z.value," to $",I.value]}),(0,l.jsxs)("div",{className:g().slidercontainer,children:[(0,l.jsx)("input",{type:"range",min:"0",max:"99",value:Z.value,className:g().sliderMin,onChange:t,id:Z.id}),(0,l.jsx)("input",{type:"range",min:"1",max:"100",value:I.value,className:g().sliderMax,onChange:t,id:I.id})]}),(0,l.jsx)("div",{className:m().grid,children:s&&s.map((function(e){return(0,l.jsx)(A(),{href:"/product/".concat(e.id.toString()),children:(0,l.jsxs)("div",{className:m().card,children:[(0,l.jsx)(p(),{unoptimized:!0,loader:function(){return e.image_url},src:e.image_url?e.image_url:y,width:100,height:250,alt:e.name}),(0,l.jsx)("p",{className:"text-3xl font-semibold text-s-700",children:e.name}),(0,l.jsxs)("p",{className:"text-2xl font-semibold text-green-500",children:["$",e.ibu]})]},e.id)},e.id)}))})]})]})}function N(e,n,t,r){return E.apply(this,arguments)}function E(){return(E=a((function(e,n,t,r){var a,i;return(0,c.__generator)(this,(function(o){switch(o.label){case 0:return i="&ibu_gt=".concat(t,"&ibu_lt=").concat(r),0!==n.length?[3,2]:[4,fetch("https://api.punkapi.com/v2/beers?page1&per_page=32".concat(i))];case 1:return a=o.sent(),[3,4];case 2:return[4,fetch("https://api.punkapi.com/v2/beers?".concat(e,"=").concat(n).concat(i))];case 3:a=o.sent(),o.label=4;case 4:return[4,a.json()];case 5:return[2,o.sent()]}}))}))).apply(this,arguments)}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",shoppingcard:"Home_shoppingcard__PygeZ",logo:"Home_logo__27_tb"}},7754:function(e){e.exports={slidercontainer:"sliderStyle_slidercontainer__xkhY9",sliderMin:"sliderStyle_sliderMin__O6Z6L",sliderMax:"sliderStyle_sliderMax__stWYE"}},9008:function(e,n,t){e.exports=t(5443)}},function(e){e.O(0,[774,888,179],(function(){return n=5728,e(e.s=n);var n}));var n=e.O();_N_E=n}]);