(this["webpackJsonpgaleria-react-app"]=this["webpackJsonpgaleria-react-app"]||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t.n(r),c=(t(15),t(1)),o=t(2),i=t(4),m=t(3),d=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{id:"menu",className:"navbar navbar-default navbar-fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"}," ",l.a.createElement("span",{className:"sr-only"},"Toggle navigation")," ",l.a.createElement("span",{className:"icon-bar"})," ",l.a.createElement("span",{className:"icon-bar"})," ",l.a.createElement("span",{className:"icon-bar"})," "),l.a.createElement("a",{className:"navbar-brand page-scroll",href:"#page-top"},"galerIA")," "),l.a.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",null,l.a.createElement("a",{href:"#features",className:"page-scroll"},"Servicios")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about",className:"page-scroll"},"Sobre Nosotros")),l.a.createElement("li",null,l.a.createElement("a",{href:"#services",className:"page-scroll"},"Precios")),l.a.createElement("li",null,l.a.createElement("a",{href:"#team",className:"page-scroll"},"Informaci\xf3n")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact",className:"page-scroll"},"Cont\xe1ctanos"))))))}}]),t}(n.Component),u=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{id:"header"},l.a.createElement("div",{className:"intro"},l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 col-md-offset-2 intro-text"},l.a.createElement("h1",null,this.props.data?this.props.data.title:"Loading",l.a.createElement("span",null)),l.a.createElement("p",null,this.props.data?this.props.data.paragraph:"Loading"),l.a.createElement("a",{href:"#features",className:"btn btn-custom btn-lg page-scroll"},"Ver mas")," "))))))}}]),t}(n.Component),p=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"features",className:"text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-10 col-md-offset-1 section-title"},l.a.createElement("h2",null,"Nuestros Servicios")),l.a.createElement("div",{className:"row"},this.props.data?this.props.data.map((function(e,a){return l.a.createElement("div",{key:"".concat(e.title,"-").concat(a),className:"col-sm-6"}," ",l.a.createElement("i",{className:e.icon}),l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.text))})):"Loading...")))}}]),t}(n.Component),E=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-md-6"}," ",l.a.createElement("img",{src:"img/about.jpg",className:"img-responsive",alt:""})," "),l.a.createElement("div",{className:"col-xs-12 col-md-6"},l.a.createElement("div",{className:"about-text"},l.a.createElement("h2",null,"\xbfQui\xe9nes somos?"),l.a.createElement("p",null,this.props.data?this.props.data.paragraph:"loading..."),l.a.createElement("h3",null,"\xbfPor qu\xe9 nosotros?"),l.a.createElement("div",{className:"list-style"},l.a.createElement("div",{className:"col-lg-6 col-sm-6 col-xs-12"},l.a.createElement("ul",null,this.props.data?this.props.data.Why.map((function(e,a){return l.a.createElement("li",{key:"".concat(e,"-").concat(a)},e)})):"loading")),l.a.createElement("div",{className:"col-lg-6 col-sm-6 col-xs-12"},l.a.createElement("ul",null,this.props.data?this.props.data.Why2.map((function(e,a){return l.a.createElement("li",{key:"".concat(e,"-").concat(a)}," ",e)})):"loading"))))))))}}]),t}(n.Component),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"services",className:"text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h2",null,"Precios"),l.a.createElement("p",null,"En galer.IA nos preocupamos por ofrecerte los mejores precios del mercado, por eso te ofrecemos diferentes paquetes, para que elijas el que m\xe1s se acomode a tu presupuesto.")),l.a.createElement("div",{className:"row"},this.props.data?this.props.data.map((function(e,a){return l.a.createElement("div",{key:"".concat(e.name,"-").concat(a),className:"col-md-4"}," ",l.a.createElement("i",{className:e.icon}),l.a.createElement("div",{className:"service-desc"},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,e.text),l.a.createElement("p",null,e.text2),l.a.createElement("p",null,e.text3),l.a.createElement("p",null,e.text4),l.a.createElement("p",null,e.text5),l.a.createElement("p",null,e.text6),l.a.createElement("p",null,e.text7)))})):"loading")))}}]),t}(n.Component),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"team",className:"text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-8 col-md-offset-2 section-title"},l.a.createElement("h2",null,"Aprovecha las posibilidades que ofrece un agente virtual"),l.a.createElement("p",null,"Agrega un software de mensajer\xeda moderno con funciones de chat en vivo a tu sitio web o aplicaci\xf3n m\xf3vil para mantener conversaciones enriquecidas con los clientes y evitar que tengan que repetir siempre lo mismo.")),l.a.createElement("div",{id:"row"},this.props.data?this.props.data.map((function(e,a){return l.a.createElement("div",{key:"".concat(e.name,"-").concat(a),className:"col-md-3 col-sm-6 team"},l.a.createElement("div",{className:"thumbnail"}," ",l.a.createElement("img",{src:e.img,alt:"...",className:"team-img"}),l.a.createElement("div",{className:"caption"},l.a.createElement("h4",null,e.name),l.a.createElement("p",null,e.job))))})):"loading")))}}]),t}(n.Component),g=t(8),f=t(5),b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={UserName:"",UserEmail:"",UserMessage:"",UserSubmit:!1},n.handleChange=n.handleChange.bind(Object(f.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n}return Object(o.a)(t,[{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(g.a)({},t,n))}},{key:"handleSubmit",value:function(e){alert("Muchas gracias por brindarnos tu informacion, el correo fue "+this.state.value),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h2",null,"Cont\xe1ctanos"),l.a.createElement("p",null,"Por favor completa la siguiente informaci\xf3n para poder estar en contacto.")),l.a.createElement("form",{name:"sentMessage",id:"contactForm",noValidate:!0},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{name:"UserName",type:"text",id:"name",className:"form-control",placeholder:"Nombre",required:"required",value:this.state.UserName,onChange:this.handleChange}),l.a.createElement("p",{className:"help-block text-danger"}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{name:"UserEmail",type:"email",id:"email",className:"form-control",placeholder:"Email",required:"required",value:this.state.UserEmail,onChange:this.handleChange}),l.a.createElement("p",{className:"help-block text-danger"})))),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{name:"UserMessage",id:"message",className:"form-control",rows:"4",placeholder:"Mensaje",required:"required",value:this.state.UserMessage,onChange:this.handleChange}),l.a.createElement("p",{className:"help-block text-danger"})),l.a.createElement("div",{id:"success"}),l.a.createElement("button",{type:"submit",className:"btn btn-custom btn-lg",onSubmit:this.handleSubmit},"Enviar Mensaje")))),l.a.createElement("div",{className:"col-md-3 col-md-offset-1 contact-info"},l.a.createElement("div",{className:"contact-item"},l.a.createElement("h3",null,"Informaci\xf3n de Contacto"),l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-map-marker"})," Direcci\xf3n"),this.props.data?this.props.data.address:"loading")),l.a.createElement("div",{className:"contact-item"},l.a.createElement("p",null,l.a.createElement("span",null)," ",this.props.data?this.props.data.phone:"loading")),l.a.createElement("div",{className:"contact-item"},l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-envelope-o"})," E-mail")," ",this.props.data?this.props.data.email:"loading"))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:this.props.data?this.props.data.facebook:"/"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{href:this.props.data?this.props.data.instagram:"/"},l.a.createElement("i",{className:"fa fa-instagram"}))))))))),l.a.createElement("div",{id:"footer"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("p",null,"\xa9 2021  Design by"," ",l.a.createElement("a",{href:"http://www.galer-ia.com",rel:"nofollow"},"galerIA the company")))))}}]),t}(n.Component),N=t(9),y=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={landingPageData:{}},e}return Object(o.a)(t,[{key:"getlandingPageData",value:function(){this.setState({landingPageData:N})}},{key:"componentDidMount",value:function(){this.getlandingPageData()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(u,{data:this.state.landingPageData.Header}),l.a.createElement(p,{data:this.state.landingPageData.Features}),l.a.createElement(E,{data:this.state.landingPageData.About}),l.a.createElement(v,{data:this.state.landingPageData.Services}),l.a.createElement(h,{data:this.state.landingPageData.Team}),l.a.createElement(b,{data:this.state.landingPageData.Contact}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e){e.exports=JSON.parse('{"Header":{"title":"galerIA ","paragraph":"the company"},"About":{"paragraph":"En galerIA somos un equipo de entusiastas de la tecnolog\xeda, a quienes les emociona poder brindar soluciones inform\xe1ticas basadas en las nuevas arquitecturas de la Nube. Tenemos amplia experiencia integrando nuestras soluciones y ayudando a clientes en sus diferentes l\xedneas de negocio.","Why":["Amplia experiencia en el Mercado.","Soluciones basadas en la Nube.","Tecnolog\xeda de Punta."],"Why2":[]},"Services":[{"icon":"fa fa-car","name":"Plan Lite - $69/Mes","text":"Agente virtual entrenado en un \xe1rea de servicio del negocio.","text2":"Una plataforma (Facebook Messenger, P\xe1gina Web, Telegram)","text3":"Respuestas din\xe1micas","text4":"Env\xedo de correos (informaci\xf3n de productos, servicios, men\xfas, horarios) + 1 plantilla personalizada."},{"icon":"fa fa-truck","name":"Plan Standar - $129/mes","text":"Agente virtual entrenado en un \xe1rea de servicio del negocio.","text2":"Dos plataforma (messenger, website, telegram)","text3":"Respuestas din\xe1micas","text4":"Env\xedo de correos. (informaci\xf3n de productos, servicios, men\xfas, horarios) + 3 plantilla personalizadas.","text5":"Conexi\xf3n a Base de datos en la nube  (guardar informaci\xf3n de contacto,pedidos, solicitudes)"},{"icon":"fa fa-subway","name":"Plan Empresarial - $499","text":"Agente virtual entrenado en un \xe1rea de servicio del negocio.","text2":"Dos plataforma (messenger, website, telegram)","text3":"Respuestas din\xe1micas","text4":"Env\xedo de correos. (informaci\xf3n de productos, servicios, men\xfas, horarios) + 5 plantilla personalizadas.","text5":"Conexi\xf3n a Base de datos en la nube  (guardar informaci\xf3n de contacto,pedidos, solicitudes)","text6":"Integraci\xf3n con sistemas de inventario y Facturaci\xf3n","text7":"An\xe1lisis de datos estad\xedsticos y asesoramiento por parte de uno de nuestros expertos en Ciencia de Datos."}],"Testimonials":[],"Team":[],"Contact":{"address":"San Jose, Costa Rica","email":"info@galer-ia.com","facebook":"https://www.facebook.com/galer.ia.the.company/","instagram":"https://www.instagram.com/galer.ia_thecompany/"},"Features":[{"icon":"fa fa-comments-o","title":"Bot para Facebook Messenger","text":"Messenger alcanza 1300 millones de usuarios cada mes y es la herramienta m\xe1s usada para contactar a las empresas a nivel mundial."},{"icon":"fa fa-bullhorn","title":"Sistema Autom\xe1tico de Citas","text":"El sistema de citas puede ayudarte a organizar muy f\xe1cilmente la agenda de tu negocio, es tan sencillo que te sorprender\xe1."},{"icon":"fa fa-envelope","title":"Envio Autom\xe1tico de Correos","text":"Nuestros agentes virtuales est\xe1n completamente integrados con nuestro sistema de env\xedo autom\xe1tico de correos a tus clientes, muy \xfatil para mantenerte en contacto con tus clientes."},{"icon":"fa fa-bar-chart","title":"An\xe1lisis de Datos","text":"Si no tienes datos, no tienes nada. En galerIA te ofrecemos un servicio profesional en Data Analytics, para que puedas llevar a tu empresa al siguiente niveltomando decisiones con amplia visibilidad del comportamiento de tu negocio."}]}')}},[[10,1,2]]]);
//# sourceMappingURL=main.950a66cd.chunk.js.map