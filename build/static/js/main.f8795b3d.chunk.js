(this.webpackJsonpownrest=this.webpackJsonpownrest||[]).push([[0],{13:function(e,t,s){},19:function(e,t,s){},28:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(21),r=s.n(a),i=(s(13),s(2)),o=s(3),l=(s(28),s(5)),h=s(6),j=s(8),d=s(7),m=(s(19),s(0)),b=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).product=function(e,t){return e*t},e.handle1submit=function(e){var t={_id:e};console.log(e),fetch("https://amazon1543.herokuapp.com/removeItem",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},e.cart=function(t){return t?t.map((function(t){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"cart",children:[Object(m.jsx)("img",{className:"img",src:t.image1}),Object(m.jsx)("div",{className:"name",children:Object(m.jsx)("h1",{style:{fontSize:"800%"},children:t.name1})}),Object(m.jsx)("div",{className:"price",children:Object(m.jsxs)("h2",{style:{fontSize:"800%"},children:["Price : $",t.cost1,"   ",Object(m.jsx)(i.b,{to:"/orders",children:Object(m.jsx)("button",{style:{marginLeft:"46%",backgroundColor:"green",color:"white"},children:"Proceed to checkout"})})]})}),Object(m.jsx)("div",{className:"authname",children:Object(m.jsxs)("h2",{style:{fontSize:"800%"},children:["Qty : ",t.keyword1," ",Object(m.jsx)("button",{style:{marginLeft:"50%",backgroundColor:"red",color:"white"},onClick:function(){return e.handle1submit(t._id)},children:"remove"})]})}),Object(m.jsx)("div",{className:"price",children:Object(m.jsxs)("h2",{style:{fontSize:"800%"},children:["total price : $",e.product(t.keyword1,t.cost1)," "]})})]})})})):Object(m.jsx)("img",{src:"/images/loader.gif",style:{height:"320px",width:"420px",marginTop:"2%"}})},e.state={carts:""},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("name");fetch("".concat("https://amazon1543.herokuapp.com/cart1?login1=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({carts:t})}))}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{style:{font:"status-bar",fontSize:"200%",color:"white",backgroundColor:"#203840",width:"100%"},children:"Your Carts"}),this.cart(this.state.carts)]})}}]),s}(c.Component);s(35);var u=function(e){return Object(m.jsx)(n.a.Fragment,{children:Object(m.jsx)("div",{className:"carosal",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{id:"myCarousel",className:"carousel slide","data-ride":"carousel",children:[Object(m.jsxs)("ol",{className:"carousel-indicators",children:[Object(m.jsx)("li",{"data-target":"#myCarousel","data-slide-to":"0",className:"active"}),Object(m.jsx)("li",{"data-target":"#myCarousel","data-slide-to":"1"}),Object(m.jsx)("li",{"data-target":"#myCarousel","data-slide-to":"2"})]}),Object(m.jsxs)("div",{className:"carousel-inner",children:[Object(m.jsx)("div",{className:"item active",children:Object(m.jsx)(i.b,{to:"/home",children:Object(m.jsx)("img",{src:"http://bangaknitwear.com/blog/wp-content/uploads/2018/09/Rellin-T-shirt-Banner.jpg",alt:"Shirts",style:{width:"85%",height:"100%"}})})}),Object(m.jsx)("div",{className:"item",children:Object(m.jsxs)(i.b,{to:"/home1",children:[" ",Object(m.jsx)("img",{src:"https://www.arlisman.com/wp-content/uploads/2019/02/Pants-Series-Banner.jpg",alt:"Pants",style:{width:"73%",height:"100%"}})]})}),Object(m.jsx)("div",{className:"item",children:Object(m.jsx)(i.b,{to:"/home",children:Object(m.jsx)("img",{src:"https://s3-ap-southeast-1.amazonaws.com/sailor-prod/images/thumbs/0000556.jpeg",alt:"Shirts",style:{width:"88%",height:"95%"}})})}),Object(m.jsx)("h2",{style:{marginLeft:"30%"},children:"YOUR SHOPPING ITEMS"}),Object(m.jsxs)("div",{className:"img1",children:[Object(m.jsx)(i.b,{to:"/home",children:Object(m.jsx)("img",{className:"img2",src:"/images/d1.jpg",style:{width:"100%",height:"40%"}})}),Object(m.jsx)("div",{className:"desc",children:"Branded Shirts"})]}),Object(m.jsxs)("div",{className:"img1",children:[Object(m.jsx)(i.b,{to:"/home1",children:Object(m.jsx)("img",{className:"img2",src:"http://cdn.shopify.com/s/files/1/0231/8024/7118/products/Me-002020_Approach_Pant_Me-01011_Shadow_Grey_grande.png?v=1585664778",style:{width:"300px",height:"436px"}})}),Object(m.jsx)("div",{className:"desc",children:"Branded Pants"})]})]}),Object(m.jsxs)("a",{className:"left carousel-control",href:"#myCarousel","data-slide":"prev",children:[Object(m.jsx)("span",{className:"glyphicon glyphicon-chevron-left"}),Object(m.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(m.jsxs)("a",{className:"right carousel-control",href:"#myCarousel","data-slide":"next",children:[Object(m.jsx)("span",{className:"glyphicon glyphicon-chevron-right"}),Object(m.jsx)("span",{classNameName:"sr-only",children:"Next"})]})]})})})})},O=function(e){return Object(m.jsx)(m.Fragment,{children:function(e){var t=e.shirts;return t?t.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{className:"products",children:Object(m.jsx)("li",{children:Object(m.jsxs)("div",{className:"product",children:[Object(m.jsx)(i.b,{to:"/home/product/"+e._id,children:Object(m.jsx)("img",{className:"product-image",src:e.image,alt:"product"})}),Object(m.jsx)("div",{className:"product-name",children:Object(m.jsx)(i.b,{to:"/home/product/"+e._id,children:e.name})}),Object(m.jsx)("div",{className:"product-brand",children:e.brand}),Object(m.jsxs)("div",{className:"product-price",children:["$",e.cost]}),Object(m.jsxs)("div",{className:"product-rating",children:[e.rating,"Stars (",e.numReviews,")Reviews"]})]})})})})})):Object(m.jsx)("img",{src:"/images/loader.gif",height:"320px",width:"420px"})}(e)})},g="https://amazon1543.herokuapp.com/shirts/",p=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).handleSubmit=function(){console.log(e.state),fetch("https://amazon1543.herokuapp.com/cart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.state.cart)}).then(e.props.history.push("/cart"))},e.handleChange=function(t){console.log(t.target.value);var s=t.target.value;e.setState({keyword:s});var c=e.state.shirts1[0].name,n=sessionStorage.getItem("name"),a=sessionStorage.getItem("name1");console.log(n),console.log(a),console.log("trrrrttrgrgtgrhrr",e.state.shirts1[0].name),e.setState({cart:{keyword1:t.target.value,name1:c,image1:e.state.shirts1[0].image,cost1:e.state.shirts1[0].cost,login1:n,authname:a}})},e.handleImg=function(t){e.setState({image:t}),console.log("??????",t)},e.handleName=function(t){e.setState({name:t})},e.shirt=function(t){return t?t.map((function(t){return Object(m.jsxs)(n.a.Fragment,{children:[Object(m.jsx)("div",{className:"back-to-result",children:Object(m.jsx)(i.b,{to:"/home",children:"Back to result"})}),Object(m.jsxs)("div",{className:"details",children:[Object(m.jsx)("div",{className:"details-image",children:Object(m.jsx)("img",{style:{height:"50%"},src:t.image,onLoad:function(){e.handleImg(t.image)}})}),Object(m.jsx)("div",{className:"details-info",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsxs)("h4",{onLoad:function(){e.handleName(t.name)},children:[t.name," "]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("b",{children:["$",t.cost,"  "]})}),Object(m.jsxs)("li",{children:[t.rating," stars (",t.numReviews," Reviews)"]}),Object(m.jsxs)("li",{children:["Description:",Object(m.jsx)("div",{children:t.description})]})]})}),Object(m.jsx)("div",{className:"details-action",children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:["Price:$",t.cost]}),Object(m.jsxs)("li",{children:["Status:",t.status]}),Object(m.jsxs)("li",{children:["Qty: ",Object(m.jsx)("input",{type:"text",onChange:e.handleChange})]}),Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/carts",children:Object(m.jsx)("button",{className:"button",onClick:e.handleSubmit,children:"Add to Cart"})})})]})})]})]})})):Object(m.jsx)("img",{src:"/images/loader.gif",style:{height:"320px",width:"420px",marginTop:"10%"}})},e.state={shirts1:"",keyword:"",name:"",image:"",cost:"",login:"",cart:{keyword1:"",name1:"",image1:"",cost1:"",login1:""}},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params.id),console.log("wwwwwww",this.state.cart.login1);var t=this.props.match.params.id;console.log("".concat(g).concat(t)),fetch("".concat(g).concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({shirts1:t})}))}},{key:"render",value:function(){return console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",this.state.cart.image),Object(m.jsx)(m.Fragment,{children:this.shirt(this.state.shirts1)})}}]),s}(c.Component),x="https://amazon1543.herokuapp.com/pants/",f=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).handleSubmit=function(){console.log(e.state),fetch("https://amazon1543.herokuapp.com/cart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.state.cart)}).then(e.props.history.push("/cart"))},e.handleChange=function(t){console.log(t.target.value);var s=t.target.value;e.setState({keyword:s});var c=e.state.shirts1[0].name,n=sessionStorage.getItem("name"),a=sessionStorage.getItem("name1");console.log(n),console.log(a),console.log("trrrrttrgrgtgrhrr",e.state.shirts1[0].name),e.setState({cart:{keyword1:t.target.value,name1:c,image1:e.state.shirts1[0].image,cost1:e.state.shirts1[0].cost,login1:n,authname:a}})},e.handleImg=function(t){e.setState({image:t}),console.log("??????",t)},e.handleName=function(t){e.setState({name:t})},e.pant=function(t){return t?t.map((function(t){return Object(m.jsxs)(n.a.Fragment,{children:[Object(m.jsx)("div",{className:"back-to-result",children:Object(m.jsx)(i.b,{to:"/home1/:id",children:"Back to result"})}),Object(m.jsxs)("div",{className:"details",children:[Object(m.jsx)("div",{className:"details-image",children:Object(m.jsx)("img",{style:{height:"20%"},src:t.image,onLoad:function(){e.handleImg(t.image)}})}),Object(m.jsx)("div",{className:"details-info",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsxs)("h4",{onLoad:function(){e.handleName(t.name)},children:[t.name," "]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("b",{children:["$",t.cost,"  "]})}),Object(m.jsxs)("li",{children:[t.rating," stars (",t.numReviews," Reviews)"]}),Object(m.jsxs)("li",{children:["Description:",Object(m.jsx)("div",{children:t.description})]})]})}),Object(m.jsx)("div",{className:"details-action",children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:["Price:$",t.cost]}),Object(m.jsxs)("li",{children:["Status:",t.status]}),Object(m.jsxs)("li",{children:["Qty: ",Object(m.jsx)("input",{type:"text",onChange:e.handleChange})]}),Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/carts",children:Object(m.jsx)("button",{className:"button",onClick:e.handleSubmit,children:"Add to Cart"})})})]})})]})]})})):Object(m.jsx)("img",{src:"/images/loader.gif",style:{height:"320px",width:"420px",marginTop:"2%"}})},e.state={shirts1:"",keyword:"",name:"",image:"",cost:"",login:"",cart:{keyword1:"",name1:"",image1:"",cost1:"",login1:"",authname:"",authimg:""}},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params.id),console.log("wwwwwww",this.state.cart.login1);var t=this.props.match.params.id;console.log("".concat(x).concat(t)),fetch("".concat(x).concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({shirts1:t})}))}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:this.pant(this.state.shirts1)})}}]),s}(c.Component),v=function(e){return Object(m.jsx)(m.Fragment,{children:function(e){var t=e.pants;return t?t.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{className:"products",children:Object(m.jsx)("li",{children:Object(m.jsxs)("div",{className:"product",children:[Object(m.jsx)(i.b,{to:"/home1/pant/"+e._id,children:Object(m.jsx)("img",{className:"product-image",src:e.image,alt:"product"})}),Object(m.jsx)("div",{className:"product-name",children:Object(m.jsx)(i.b,{to:"/home1/pant/"+e._id,children:e.name})}),Object(m.jsx)("div",{className:"product-brand",children:e.brand}),Object(m.jsxs)("div",{className:"product-price",children:["$",e.cost]}),Object(m.jsxs)("div",{className:"product-rating",children:[e.rating,"Stars (",e.numReviews,")Reviews"]})]})})})})})):Object(m.jsx)("img",{src:"/images/loader.gif",style:{height:"320px",width:"420px",marginTop:"2%"}})}(e)})},y=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={shirts:""},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://amazon1543.herokuapp.com/shirts",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({shirts:t})}))}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(O,{shirts:this.state.shirts})})}}]),s}(c.Component),N=s(23),w=s.n(N),S=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).responseGoogle=function(t){e.setState({User:t.profileObj}),console.log("this is the user data",e.state.User);var s=t.profileObj.googleId;localStorage.setItem("document",JSON.stringify(t.profileObj)),sessionStorage.setItem("GID",s),console.log("this is ",t.profileObj.googleId)},e.state={User:""},e}return Object(h.a)(s,[{key:"render",value:function(){return""==this.state.User?Object(m.jsx)("div",{children:Object(m.jsx)("ul",{class:"nav navbar-nav navbar-right",children:Object(m.jsx)("li",{children:Object(m.jsx)(w.a,{clientId:"664272560437-t627f8um65f411fl2008vreaipovco22.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"})})})}):Object(m.jsx)("div",{className:"",children:Object(m.jsx)("img",{style:{borderRadius:"50%",height:"40%",width:"40%",marginLeft:"60%"},src:this.state.User.imageUrl})})}}]),s}(n.a.Component),k=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={pants:""},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://amazon1543.herokuapp.com/pants",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({pants:t})}))}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(v,{pants:this.state.pants})})}}]),s}(c.Component),C=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).product=function(e,t){return e*t},e.handle1submit=function(e){var t={_id:e};console.log(e),fetch("https://amazon1543.herokuapp.com/removeItem",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},e.cart=function(t){return t?t.map((function(t){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"cart",children:[Object(m.jsx)("img",{className:"img",src:t.image1}),Object(m.jsx)("div",{className:"name",children:Object(m.jsx)("h1",{style:{fontSize:"800%"},children:t.name1})}),Object(m.jsx)("div",{className:"price",children:Object(m.jsxs)("h2",{style:{fontSize:"800%"},children:["Price : $",t.cost1]})}),Object(m.jsx)("div",{className:"authname",children:Object(m.jsxs)("h2",{style:{fontSize:"800%"},children:["Qty : ",t.keyword1," ",Object(m.jsx)("button",{style:{marginLeft:"50%",backgroundColor:"red",color:"white"},onClick:function(){return e.handle1submit(t._id)},children:"cancel"})]})}),Object(m.jsx)("div",{className:"price",children:Object(m.jsxs)("h2",{style:{fontSize:"800%"},children:["total price : $",e.product(t.keyword1,t.cost1)," "]})})]})})})):Object(m.jsx)("img",{src:"/images/loader.gif",style:{height:"320px",width:"420px",marginTop:"2%"}})},e.state={carts:""},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("name");fetch("".concat("https://amazon1543.herokuapp.com/cart1?login1=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({carts:t})}))}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{style:{marginTop:"1%"},children:Object(m.jsx)(i.b,{to:"/cart",children:"Back to result"})}),Object(m.jsx)("h1",{style:{font:"status-bar",fontSize:"200%",color:"white",backgroundColor:"#203840",width:"100%"},children:"Your Order"}),this.cart(this.state.carts)]})}}]),s}(c.Component);var T=function(){return Object(m.jsx)(i.a,{children:Object(m.jsxs)("div",{className:"grid-container",children:[Object(m.jsxs)("header",{className:"header",children:[Object(m.jsxs)("div",{className:"brand",children:[Object(m.jsx)("button",{onClick:function(){document.querySelector(".sidebar").classList.add("open")},children:"\u2630"}),Object(m.jsx)("span",{children:Object(m.jsx)(i.b,{to:"/",children:"bandaru"})})]}),Object(m.jsx)("p",{style:{marginLeft:"80%",marginTop:".5%"},children:Object(m.jsx)(o.a,{exact:!0,path:"/",component:S})}),Object(m.jsx)("div",{className:"header-links",children:Object(m.jsx)("a",{href:"/cart",style:{marginTop:"10%"},children:"Cart"})})]}),Object(m.jsxs)("aside",{className:"sidebar",children:[Object(m.jsx)("h3",{children:"Shopping Categories"}),Object(m.jsx)("button",{className:"sidebar-close-button",onClick:function(){document.querySelector(".sidebar").classList.remove("open")},children:"x"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/home1",children:"Pants"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/home",children:"Shirts"})})]})]}),Object(m.jsx)("main",{className:"main",children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)(o.a,{exact:!0,path:"/home/product/:id",component:p}),Object(m.jsx)(o.a,{path:"/home1/pant/:id",component:f}),Object(m.jsx)(o.a,{exact:!0,path:"/home",component:y}),Object(m.jsx)(o.a,{exact:!0,path:"/home1",component:k}),Object(m.jsx)(o.a,{exact:!0,path:"/",component:u}),Object(m.jsx)(o.a,{path:"/carts",component:b}),Object(m.jsx)(o.a,{path:"/orders",component:C})]})}),Object(m.jsx)("footer",{className:"footer",children:"All right reserved"})]})})};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.f8795b3d.chunk.js.map