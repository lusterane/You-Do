(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},37:function(e,t,a){},38:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){e.exports={navigation:"Navigation_navigation__2LIou","navigation-list":"Navigation_navigation-list__u_pdb","navigation-list-item":"Navigation_navigation-list-item__11ds7"}},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),i=a.n(o),s=(a(37),a(3)),c=a(4),l=a(6),u=a(5),m=a(7),p=(a(38),a(13)),d=a(14),h=a(28),b=a.n(h),f=a(21),g=a.n(f).a.initializeApp({apiKey:"AIzaSyCTJlU4Ajsdauoo44L8w3yr6CmrOsFq3P8",authDomain:"youdo-81603.firebaseapp.com",databaseURL:"https://youdo-81603.firebaseio.com",projectId:"youdo-81603",storageBucket:"youdo-81603.appspot.com",messagingSenderId:"528940061091",appId:"1:528940061091:web:8cc54fe7785fb5d5"}),v=b.a.createClass(g.database()),E=(a(50),a(52),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={quote:{message:"",uid:0},quoteInEdit:"",updated:!1},a.handleSubmit=function(e){e.preventDefault();var t=a.state.quoteInEdit;null==t||t==a.state.quote.message||t.length>30?alert("Header Change Unsuccessful"):(a.setState({quote:{message:a.state.quoteInEdit,uid:1}}),alert("Successfully Changed Header"))},a.updateQuote=function(e){a.setState({quoteInEdit:e.target.value})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.itemsRef=v.syncState("quote",{context:this,state:"quote"})}},{key:"componentDidUpdate",value:function(){null==this.state.quote||""==this.state.quote.message||this.state.updated||this.setState({quoteInEdit:this.state.quote.message,updated:!0})}},{key:"componentWillUnmount",value:function(){v.removeBinding(this.itemsRef)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"title"},"YOU-DO"),r.a.createElement("form",{onSubmit:this.handleSubmit},'"',r.a.createElement("input",{type:"text",className:"quote",value:this.state.quoteInEdit,placeholder:"Temporary texbox for quotes",onChange:this.updateQuote}),'"')))}}]),t}(n.Component)),y=(a(53),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getListStyle={textDecoration:"none",color:"#ffffff"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(p.b,{className:"navbar-brand",to:"/home"},"YOU-DO"),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link"},r.a.createElement(p.b,{className:"nav-link",to:"/home"},"Home"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link"},r.a.createElement(p.b,{className:"nav-link",to:"/signin"},"Sign In"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link"},r.a.createElement(p.b,{className:"nav-link",to:"/signup"},"Sign Up"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link"},r.a.createElement(p.b,{className:"nav-link",to:"/account"},"Account")))))}}]),t}(n.Component)),j=a(19),O=(a(58),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){var t=a.state;t.email,t.passwordOne},a.onChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.state={email:"",passwordOne:"",passwordTwo:"",error:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.passwordOne,n=e.passwordTwo,o=e.error,i=a!==n||""===a||""===t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,"SIGN UP"),r.a.createElement("form",{className:"form-group",onSubmit:this.onSubmit},r.a.createElement("input",{className:"form-control",name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Enter Email"}),r.a.createElement("input",{className:"form-control",name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{className:"form-control",name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary",id:"submit-btn",disabled:i},"SIGN UP"),o&&r.a.createElement("p",null,o.message)))))}}]),t}(n.Component)),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){var t=a.state;t.email,t.password},a.onChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.state={email:"",password:"",error:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,o=""==t||""==a;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,"SIGN IN"),r.a.createElement("form",{className:"form-group",onSubmit:this.onSubmit},r.a.createElement("input",{className:"form-control",name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Enter Email"}),r.a.createElement("input",{className:"form-control",name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary",id:"submit-btn",disabled:o},"SIGN IN"),n&&r.a.createElement("p",null,n.message)))))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getStyle=function(){return{border:"1px solid grey",padding:"10px",background:"#445358",color:"white",textDecoration:a.props.todo.isCompleted?"line-through":"none"}},a.getBtnStyle=function(){return{float:"right",color:"white",background:"#BCCC6B",borderRadius:"25px",border:"none",width:"25px",height:"25px",cursor:"pointer"}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title;return r.a.createElement("div",{style:this.getStyle()},r.a.createElement("input",{type:"checkbox",onChange:this.props.onChecked.bind(this,t)})," "," ",a,r.a.createElement("input",{style:this.getBtnStyle(),type:"submit",onClick:this.props.onDelete.bind(this,t),value:"X"}))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return(this.props.todo.length?this.props.todo.filter(function(e){return 10!==e.id}):[]).map(function(t){return r.a.createElement(k,{todo:t,key:t.id,onChecked:e.props.updateChecked,onDelete:e.props.onDelete.bind(e)})})}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateChecked=function(e){a.setState({items:a.state.items.map(function(t){return t.id===e&&(t.isCompleted=!t.isCompleted),t})})},a.updateDelete=function(e){1!==a.state.items.length?a.setState({items:a.state.items.filter(function(t){return t.id!==e})}):alert("Cannot delete last item")},a.handleSubmit=function(e){e.preventDefault(),a.setState({items:a.state.items.concat({id:a.state.items.length,title:a.state.text,isCompleted:!1})})},a.updateText=function(e){a.setState({text:e.target.value})},a.state={items:{},text:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.itemsRef=v.syncState("items",{context:this,state:"items"})}},{key:"componentWillUnmount",value:function(){v.removeBinding(this.itemsRef)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Add Todo",value:this.state.text,onChange:this.updateText})),r.a.createElement(w,{todo:this.state.items,updateChecked:this.updateChecked,onDelete:this.updateDelete.bind(this)}))}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),I=(a(59),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer-text"},r.a.createElement("div",null,"\xa9 2019 Toby Chow"),r.a.createElement("div",null,"All Rights Reserved.")))}}]),t}(n.Component)),q=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(y,null),r.a.createElement(E,null),r.a.createElement(d.a,{exact:!0,path:"/",component:S}),r.a.createElement(d.a,{path:"/home",component:S}),r.a.createElement(d.a,{path:"/signup",component:O}),r.a.createElement(d.a,{path:"/signin",component:C}),r.a.createElement(d.a,{path:"/pw-forget",component:N}),r.a.createElement(d.a,{path:"/account",component:x}),r.a.createElement(I,null)),r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossOrigin:"anonymous"}),r.a.createElement("script",{src:"https://www.gstatic.com/firebasejs/6.3.3/firebase-app.js"}),r.a.createElement("script",{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js",integrity:"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",crossOrigin:"anonymous"}),r.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",integrity:"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",crossOrigin:"anonymous"}),r.a.createElement("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",integrity:"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",crossOrigin:"anonymous"}))}}]),t}(r.a.Component);i.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.158c2352.chunk.js.map