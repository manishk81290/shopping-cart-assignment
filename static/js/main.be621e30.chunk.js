(this["webpackJsonpshopping-cart-assignment"]=this["webpackJsonpshopping-cart-assignment"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(27),s=c.n(r),i=(c(87),c(88),c(25)),o=c(40),j=c(19),l=c(9),d=c(127),u=c(128),b=c(135),h=c(129),O=c(136),m=c(80),p=c.p+"static/media/logo_2x.81e3479e.png",x=c.p+"static/media/cart.55a8145b.svg",g=Object(n.createContext)(),f=(c(89),c(1)),v=function(e){var t=e.handleShow,c=a.a.useContext(g).cart;return Object(f.jsx)(b.a,{bg:"light",expand:"lg",className:"navbar",fixed:"top",children:Object(f.jsxs)(d.a,{className:"pos-rel",children:[Object(f.jsxs)(u.a,{children:[Object(f.jsx)(j.b,{to:"/",className:"navbar-brand",children:Object(f.jsx)(h.a,{src:p,alt:"React Bootstrap logo",className:"logo"})}),Object(f.jsxs)(O.a,{className:"mr-auto justify-content-center main-nav",children:[Object(f.jsx)(j.b,{to:"/",className:"nav-link",children:"Home"}),Object(f.jsx)(j.b,{to:"/products/all",className:"nav-link",children:"Products"})]}),Object(f.jsxs)(O.a,{className:"mr-auto justify-content-end auth-nav",children:[Object(f.jsx)(j.b,{to:"/signin",className:"nav-link",children:"SignIn"}),Object(f.jsx)(j.b,{to:"/register",className:"nav-link",children:"Register"})]})]}),Object(f.jsxs)(m.a,{variant:"primary",className:"cart-btn",onClick:t,children:[Object(f.jsx)(h.a,{src:x,alt:"cart"})," ",c.length&&c.reduce((function(e,t){return e+t.count}),0)," ","items"]})]})})},A=c(81),y=function(e){var t=e.copyright;return Object(f.jsx)(d.a,{fluid:!0,children:Object(f.jsx)(u.a,{md:12,className:"footer",children:Object(f.jsxs)(A.a,{children:["Copyright \xa9 2011-",(new Date).getFullYear()," ",t]})})})},C=c(134),E=function(){var e=a.a.useContext(g),t=e.getBanners,c=e.banners;return Object(n.useEffect)((function(){c.length||t()}),[]),Object(f.jsx)(u.a,{md:12,className:"mt-100- slider",children:Object(f.jsx)(A.a,{children:Object(f.jsx)(C.a,{interval:1e3,className:"bottom-shadow",children:c.map((function(e){return Object(f.jsx)(C.a.Item,{children:Object(f.jsx)(h.a,{src:"".concat("/shopping-cart-assignment").concat(e.bannerImageUrl),alt:e.bannerImageAlt})},e.id)}))})})})},N=function(e){var t=e.children;return Object(f.jsx)(u.a,{md:12,className:"cat-card align-items-center",children:t})},B=(c(97),function(){var e=Object(l.f)(),t=a.a.useContext(g),c=t.categories,r=t.getCategories;return Object(n.useEffect)((function(){c.length||r()}),[]),Object(f.jsx)(f.Fragment,{children:c.sort((function(e,t){return e.order-t.order})).filter((function(e){return-1!==e.order})).map((function(t,c){return c%2===0?Object(f.jsxs)(N,{children:[Object(f.jsx)(A.a,{md:6,className:"cat-card-img",children:Object(f.jsx)(h.a,{src:"".concat("/shopping-cart-assignment").concat(t.imageUrl),fluid:!0})}),Object(f.jsxs)(A.a,{md:6,className:"cat-card-desc",children:[Object(f.jsx)("h5",{children:t.name}),Object(f.jsx)("p",{children:t.description}),Object(f.jsxs)(m.a,{variant:"primary",className:"theme-button get-product",onClick:function(){e.push("/products/".concat(t.id))},children:["Explore ",t.key]})]})]},t.key):Object(f.jsxs)(N,{children:[Object(f.jsxs)(A.a,{md:6,className:"cat-card-desc",children:[Object(f.jsx)("h5",{children:t.name}),Object(f.jsx)("p",{children:t.description}),Object(f.jsxs)(m.a,{variant:"primary",className:"theme-button get-product",onClick:function(){e.push("/products/".concat(t.id))},children:["Explore ",t.key]})]}),Object(f.jsx)(A.a,{md:6,className:"cat-card-img",children:Object(f.jsx)(h.a,{src:"".concat("/shopping-cart-assignment").concat(t.imageUrl),fluid:!0})})]},t.key)}))})}),w=c(130),k=c(62),I=c(137),R=function(e){var t=e.item,c=t.name,n=t.imageURL,r=t.description,s=t.price,i=t.id,o=a.a.useContext(g),j=o.cart,l=o.updateCart,d=function(){var e=-1;j.filter((function(t,c){if(t.id===i)return e=c,!0}));var c=Object(k.a)(j);-1!==e?c[e].count+=1:(t.count=1,c.push(t)),l(c)};return Object(f.jsx)(A.a,{lg:3,md:6,sm:12,className:"pr-0",children:Object(f.jsxs)(I.a,{className:"brb-1-dashed",children:[Object(f.jsx)(I.a.Body,{children:Object(f.jsx)(I.a.Title,{children:c})}),Object(f.jsx)(A.a,{md:12,children:Object(f.jsx)(I.a.Img,{variant:"top",src:"".concat("/shopping-cart-assignment").concat(n)})}),Object(f.jsxs)(I.a.Body,{children:[Object(f.jsx)(I.a.Text,{children:r}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{className:"card-price lg",children:["MRP Rs.",s]}),Object(f.jsx)(m.a,{variant:"primary",className:"theme-button lg",onClick:d,children:"Buy Now"}),Object(f.jsxs)(m.a,{variant:"primary",className:"theme-button md buynow",onClick:d,children:["Buy Now @ Rs.",s]})]})]})]})})},T=(c(98),function(e){var t=e.match,c=a.a.useContext(g),r=c.products,s=c.getProducts,i=Object(n.useState)(r),j=Object(o.a)(i,2),l=j[0],d=j[1];return Object(n.useEffect)((function(){r.length||s()}),[]),Object(n.useEffect)((function(){"all"===t.params.productCategory?d((function(e){return r})):d((function(e){return r.filter((function(e){return e.category===t.params.productCategory}))})),console.log(l)}),[t.params.productCategory,r]),Object(f.jsx)(A.a,{lg:9,md:9,sm:12,children:Object(f.jsx)(u.a,{lg:9,md:12,sm:12,children:l.length?l.map((function(e){return Object(f.jsx)(R,{item:e},e.sku)})):Object(f.jsx)(w.a,{variant:"info",children:"No Product Found!!!!"})})})}),H=c(138),J=c(131),S=c(82),z=function(){var e=a.a.useContext(g),t=e.categories,c=e.getCategories;Object(n.useEffect)((function(){t.length||c()}),[]);var r=t.map((function(e){return{name:e.name,key:e.key,id:e.id,order:e.order}})).filter((function(e){return-1!==e.order}));return Object(f.jsxs)(A.a,{md:3,className:"bg-col-e8e8e8 pr-0 pl-0",children:[Object(f.jsx)(I.a,{style:{width:"100%"},className:"xs-hide",children:Object(f.jsx)(H.a,{variant:"flush",children:r.map((function(e){return Object(f.jsx)(H.a.Item,{children:Object(f.jsx)(j.b,{to:"/products/".concat(e.id),children:e.name})},e.key)}))})}),Object(f.jsx)(J.a,{id:"dropdown-basic-button",title:"Category Name",className:"xs-only",children:r.map((function(e){return Object(f.jsx)(S.a.Item,{children:Object(f.jsx)(j.b,{to:"/products/".concat(e.id),children:e.name})},e.key)}))})]})},Y=c(133),P=(c(100),function(){return Object(f.jsx)(d.a,{className:"mt-150-mb-20",children:Object(f.jsxs)(u.a,{className:"auth",children:[Object(f.jsx)(A.a,{md:2}),Object(f.jsxs)(A.a,{md:4,children:[Object(f.jsx)("h4",{children:"Login"}),Object(f.jsx)("p",{children:"Get access to your Orders, Wishlist and Recommendations."})]}),Object(f.jsx)(A.a,{md:4,children:Object(f.jsxs)(Y.a,{children:[Object(f.jsxs)("div",{class:"input-group",children:[Object(f.jsx)("input",{type:"email",required:!0}),Object(f.jsx)("label",{children:"Email"})]}),Object(f.jsxs)("div",{class:"input-group",children:[Object(f.jsx)("input",{type:"password",required:!0}),Object(f.jsx)("label",{children:"Password"})]}),Object(f.jsx)(m.a,{variant:"primary",type:"button",className:"theme-button w-100",children:"Login"})]})})]})})}),G=function(){return Object(f.jsx)(d.a,{className:"mt-150-mb-20",children:Object(f.jsxs)(u.a,{className:"auth",children:[Object(f.jsx)(A.a,{md:2}),Object(f.jsxs)(A.a,{md:4,children:[Object(f.jsx)("h4",{children:"Signup"}),Object(f.jsx)("p",{children:"We do not share your personal details with anyone."})]}),Object(f.jsx)(A.a,{md:4,children:Object(f.jsxs)(Y.a,{children:[Object(f.jsxs)("div",{class:"input-group",children:[Object(f.jsx)("input",{type:"text",required:!0}),Object(f.jsx)("label",{children:"Firstname"})]}),Object(f.jsxs)("div",{class:"input-group",children:[Object(f.jsx)("input",{type:"text",required:!0}),Object(f.jsx)("label",{children:"Lastname"})]}),Object(f.jsxs)("div",{class:"input-group",children:[Object(f.jsx)("input",{type:"email",required:!0}),Object(f.jsx)("label",{children:"Email"})]}),Object(f.jsxs)("div",{class:"input-group",children:[Object(f.jsx)("input",{type:"password",required:!0}),Object(f.jsx)("label",{children:"Password"})]}),Object(f.jsxs)("div",{class:"input-group",children:[Object(f.jsx)("input",{type:"password",required:!0}),Object(f.jsx)("label",{children:"Confirm Password"})]}),Object(f.jsx)(m.a,{variant:"primary",type:"button",className:"theme-button w-100",children:"Signup"})]})})]})})},F=c(132),Z=function(e){var t=e.item,c=e.index,n=e.updateQuantity;return Object(f.jsxs)(u.a,{xs:12,className:"cart-item",children:[Object(f.jsx)(A.a,{xs:3,children:Object(f.jsx)(h.a,{src:"".concat("/shopping-cart-assignment").concat(t.imageURL),thumbnail:!0})}),Object(f.jsxs)(A.a,{xs:9,className:"pl-0",children:[Object(f.jsx)("h5",{children:t.name}),Object(f.jsx)(m.a,{variant:"primary",className:"theme-button quantity-dec",onClick:function(){n("decrement",c)},children:"-"}),Object(f.jsx)("span",{children:t.count}),Object(f.jsx)(m.a,{variant:"primary",className:"theme-button quantity-inc",onClick:function(){n("increment",c)},children:"+"}),Object(f.jsx)("span",{children:"x"}),Object(f.jsxs)("span",{children:["Rs.",t.price]}),Object(f.jsxs)("span",{className:"total",children:["Rs.",t.price*t.count]})]})]})},L=(c(101),function(e){var t=e.show,c=e.handleClose,n=a.a.useContext(g),r=n.cart,s=n.updateCart,i=function(e,t){var c=Object(k.a)(r);"increment"===e?c[t].count+=1:(c[t].count-=1,0===c[t].count&&c.splice(t,1)),s(c)};return Object(f.jsxs)(F.a,{show:t,onHide:c,children:[Object(f.jsx)(F.a.Header,{closeButton:!0,children:Object(f.jsxs)(F.a.Title,{children:["My Cart"," ",Object(f.jsxs)("span",{children:["(",r.reduce((function(e,t){return e+t.count}),0)," ","item)"]})]})}),Object(f.jsx)(F.a.Body,{className:!r.length&&"no-item",children:Object(f.jsxs)(d.a,{fluid:!0,children:[r.length?r.map((function(e,t){return Object(f.jsx)(Z,{item:e,index:t,updateQuantity:i},e.id)})):Object(f.jsx)(u.a,{md:12,children:Object(f.jsxs)(A.a,{md:12,children:["No Item in the cart",Object(f.jsx)("span",{children:"Your favourite items are just a click away"})]})}),r.length&&Object(f.jsxs)(u.a,{xs:12,className:"lowest-price",children:[Object(f.jsx)(A.a,{xs:3,children:Object(f.jsx)(h.a,{src:"data:image/png;base64,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",thumbnail:!0})}),Object(f.jsx)(A.a,{xs:9,children:Object(f.jsx)("p",{children:"You won't find it cheaper anywhere"})})]})]})}),Object(f.jsxs)(F.a.Footer,{children:[Object(f.jsx)("p",{children:"Promocode can be applied on payment page"}),Object(f.jsxs)(m.a,{variant:"primary",className:"theme-button w-100",onClick:c,children:[Object(f.jsx)("span",{className:"btn-text",children:"Proceed to checkout"}),Object(f.jsxs)("span",{className:"total",children:["Rs.",r.reduce((function(e,t){return e+t.count*t.price}),0)," ",">"]})]})]})]})}),D="GET_BANNER",Q="GET_PRODUCT",M="GET_CATEGORY",W="UPDATE_CART",X=function(e,t){switch(t.type){case D:return Object(i.a)(Object(i.a)({},e),{},{banners:t.payload});case M:return Object(i.a)(Object(i.a)({},e),{},{categories:t.payload});case Q:return Object(i.a)(Object(i.a)({},e),{},{products:t.payload});case W:return Object(i.a)(Object(i.a)({},e),{},{cart:t.payload});default:return e}},U=c(14),V=c.n(U),K=c(29),q=c(69),_=c.n(q);function $(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(K.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.a.get("".concat("/shopping-cart-assignment").concat(t)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var te={getBanners:function(){var e=Object(K.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",$("/server/banners/index.get.json"));case 4:e.prev=4,e.t0=e.catch(0),console.log(e.t0);case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}()},ce={getCategories:function(){var e=Object(K.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",$("/server/categories/index.get.json"));case 4:e.prev=4,e.t0=e.catch(0),console.log(e.t0);case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}()},ne={getProducts:function(){var e=Object(K.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",$("/server/products/index.get.json"));case 4:e.prev=4,e.t0=e.catch(0),console.log(e.t0);case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}()},ae=function(e){var t=Object(n.useReducer)(X,{banners:[],products:[],categories:[],cart:[]}),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(f.jsx)(g.Provider,{value:{banners:a.banners,categories:a.categories,products:a.products,cart:a.cart,getBanners:function(){te.getBanners().then((function(e){var t=Object.assign({},e).data.sort((function(e,t){return e.order-t.order}));r({type:D,payload:t})}))},getCategories:function(){ce.getCategories().then((function(e){var t=Object.assign({},e).data.sort((function(e,t){return e.order-t.order}));r({type:M,payload:t})}))},getProducts:function(){ne.getProducts().then((function(e){var t=Object.assign({},e).data.sort((function(e,t){return e.order-t.order}));r({type:Q,payload:t})}))},updateCart:function(e){r({type:W,payload:e})}},children:e.children})};c(121);var re=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(f.jsx)(ae,{children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(L,{show:c,handleClose:function(){return a(!1)}}),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(v,{handleShow:function(){return a(!0)}}),Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/products/:productCategory",render:function(e){return Object(f.jsx)(d.a,{className:"mt-150-mb-20",children:Object(f.jsxs)(u.a,{children:[Object(f.jsx)(z,{}),Object(f.jsx)(T,Object(i.a)({},e))]})})}}),Object(f.jsx)(l.a,{exact:!0,path:"/signin",children:Object(f.jsx)(P,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/register",children:Object(f.jsx)(G,{})}),Object(f.jsx)(l.a,{path:["/","/home"],render:function(e){return Object(f.jsxs)(d.a,{fluid:!0,children:[Object(f.jsx)(E,{}),Object(f.jsx)(B,{})]})}})]}),Object(f.jsx)(y,{copyright:"Sabka Bazar Grocery Supplies Pvt Ltd"})]})]})})},se=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,139)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(re,{})}),document.getElementById("root")),se()},87:function(e,t,c){},89:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){}},[[122,1,2]]]);