(this.webpackJsonpluandeveloper=this.webpackJsonpluandeveloper||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/about-me-luan-rodrigues.8de6fca2.svg"},33:function(e){e.exports=JSON.parse('[{"id":"1","social":"facebook","social_url":"https://www.facebook.com/luanlrs96","icon":"FaFacebookF"},{"id":"2","social":"linkedin","social_url":"https://www.linkedin.com/in/luanlrs/","icon":"FaLinkedinIn"},{"id":"3","social":"instagram","social_url":"https://www.instagram.com/luanrodrigues.py/","icon":"FaInstagram"},{"id":"4","social":"github","social_url":"https://github.com/lrs96","icon":"FaGithubAlt"},{"id":"5","social":"behance","social_url":"https://www.behance.net/luandeveloper","icon":"FaBehance"}]')},34:function(e){e.exports=JSON.parse('[{"id":1,"image_url":"comite-da-hackathon-brasil.svg","funcao":"Organizador","name_work":"Membro do comite da Hachathon Brasil","description":"Ajuda na organiza\xe7\xe3o de hackathon, palestras e workshops pela comunidade.","site":"https://hackathonbrasil.com.br/home/"},{"id":2,"image_url":"wordcamp-2019-luan-rodrigues.svg","funcao":"Volunt\xe1rio","name_work":"WordCamp S\xe3o Paulo 2019","description":"Respons\xe1vel por auxiliar os palestrantes e participantes do eventos, cuidar do tempo das palestras ou quaisquer necessidades que surgissem durante o evento.","site":"https://2019.saopaulo.wordcamp.org/"},{"id":3,"image_url":"wordcamp-2018.svg","funcao":"Volunt\xe1rio","name_work":"WordCamp S\xe3o Paulo 2018","description":"Respons\xe1vel por auxiliar os palestrantes e participantes do eventos, cuidar do tempo das palestras ou quaisquer necessidades que surgissem durante o evento.","site":"https://2018.saopaulo.wordcamp.org/"}]')},36:function(e,a,t){e.exports=t.p+"static/media/luan-rodrigues-da-silva.0aff19be.svg"},40:function(e,a,t){e.exports=t(73)},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},64:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(30),r=t.n(c),o=(t(45),t(37)),s=t(1),m=t(7),i=(t(46),function(){return l.a.createElement("header",{className:"header"},l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,"Sobre mim"),l.a.createElement("li",null,"Trabalhos Volunt\xe1rios"),l.a.createElement("li",null,"Skill"),l.a.createElement("li",null,"Trabalhos")),l.a.createElement("a",{href:"#tak_me",className:"btn btn-bs-outline-blue"},"Fale Comigo")))}),u=t(31),d=t.n(u),p=(t(47),t(32)),E=t.n(p).a.create({baseURL:"https://luan-developer-ws.herokuapp.com/"}),f=t(33),b=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)((function(){E.get("personal-data").then((function(e){t(e.data),console.log(e.data)}))}),[]),l.a.createElement("div",{className:"component-social"},l.a.createElement("div",{className:"social mt-3"},f.map((function(e){return l.a.createElement("a",{className:"social-item",key:e.id,title:e.social,href:e.social_url,rel:"noreferrer",target:"_blank"})}))))},g=function(){return l.a.createElement("section",{className:"container-fluid",id:"about_me"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-12 col-md-5 col-lg-4"},l.a.createElement("img",{src:d.a,className:"img-fluid",alt:"Foto Sobre Luan Rodrigues da Silva"})),l.a.createElement("div",{className:"col-12 col-md-7 col-lg-5 offset-lg-3"},l.a.createElement("div",{className:"infos"},l.a.createElement("h2",{className:"mb-2 h1 title"},"Sobre",l.a.createElement("span",{className:"text-bs-blue d-block"},"mim",l.a.createElement("span",{className:"text-dark"},"."))),l.a.createElement("p",{className:"mb-1 subtitle"},"Front End, UI desginer,  palestrante, membro do comit\xea da Hackathon Brasil e organizador da comunidade WordPress S\xe3o Paulo. Sou apaixonado por tecnologia, livros, s\xe9ries e muito ativo em comunidades de tecnologia."),l.a.createElement("p",{className:"mb-0 subtitle"},"Amo cultivar a arte de compartilhar conhecimento e experi\xeancias com as pessoas, afim de conseguir impactar o cotidiano e a vida delas de alguma forma."),l.a.createElement(b,null))))))},v=t(39),h=t(34),N=(t(64),function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)((function(){E.get("voluntter-work").then((function(e){t(e.data)}))}),[]),l.a.createElement("section",{className:"container-fluid",id:"voluntter_work"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"mb-4 h1 mb-lg-5 d-block text-center"},"Trabalhos ",l.a.createElement("span",{className:"text-bs-blue"},"volunt\xe1rios"),"."),l.a.createElement("div",{className:"row"},h.map((function(e){return l.a.createElement("div",{className:"col-12 col-sm-6 col-md-4",key:e.id},l.a.createElement("div",{className:"card-work rounded"},l.a.createElement("img",{src:"/static/media/".concat(e.image_url),className:"img-fluid",alt:e.name_work}),l.a.createElement("div",{className:"infos-card"},l.a.createElement("p",{className:"mb-0 work"},l.a.createElement("span",{className:"custom"},e.funcao)),l.a.createElement("h3",{className:"h5 mb-2 text-white title"},e.name_work),l.a.createElement("p",{className:"mb-2"},e.description),l.a.createElement("a",{href:e.site,className:"d-flex align-items-center",target:"_blank"},l.a.createElement("span",{className:"pr-3"},"Saber mais")," ",l.a.createElement(v.a,null)))))})))))}),w=function(){return l.a.createElement("section",{id:"work"})},k=t(13),x=t.n(k),_=t(35),O=t(10),S=t(14),j=t(15),F=t.n(j),q=(t(67),function(){var e=Object(n.useState)({nome:"",email:"",telefone:""}),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(),o=Object(m.a)(r,2),s=o[0],i=o[1];function u(e){var a=e.target,n=a.name,l=a.value;c(Object(S.a)(Object(S.a)({},t),{},Object(O.a)({},n,l)))}function d(){return(d=Object(_.a)(x.a.mark((function e(a){var n,l,r,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=t.nome,l=t.email,r=t.telefone,o={nome:n,email:l,telefone:r,mensagem:s},e.prev=4,e.next=7,E.post("send-mail",o);case 7:F()("Enviado com sucesso","Assim que puder, eu entro em contato via e-mail ou telefone","success"),c({nome:"",email:"",telefone:""}),i(""),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),F()("Ops","Parece que algo deu errado. Tente novamente","danger"),console.log("Erro ao enviar o e-mail: ".concat(e.t0));case 18:case"end":return e.stop()}}),e,null,[[4,14]])})))).apply(this,arguments)}return l.a.createElement("section",{className:"container-fluid",id:"talk_me"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-4 col-lg-5"},l.a.createElement("div",{className:"infos"},l.a.createElement("h2",{className:"mb-2 h1 title"},"Fale ",l.a.createElement("span",{className:"d-block text-bs-blue"},"Comigo ",l.a.createElement("span",{className:"text-dark"},"."))),l.a.createElement(b,null))),l.a.createElement("div",{className:"col-12 col-md-8 col-lg-7"},l.a.createElement("form",{className:"bg-white p-3 rounded",onSubmit:function(e){return d.apply(this,arguments)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Seu nome"),l.a.createElement("input",{type:"text",name:"nome",id:"name",required:!0,className:"form-control",onChange:u})),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-12 col-md-7"},l.a.createElement("label",{htmlFor:"email"},"E-mail"),l.a.createElement("input",{type:"email",name:"email",id:"email",required:!0,className:"form-control",onChange:u})),l.a.createElement("div",{className:"form-group col-12 col-md-5"},l.a.createElement("label",{htmlFor:"email"},"Telefone"),l.a.createElement("input",{type:"text",name:"telefone",id:"telefone",required:!0,className:"form-control",onChange:u}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"message"},"No que eu posso ajudar?"),l.a.createElement("textarea",{className:"form-control",id:"message",name:"message",rows:3,required:!0,onChange:function(e){var a=e.target,t=(a.name,a.value);i(t)}})),l.a.createElement("button",{type:"submit",className:"btn btn-bs-blue py-2"},"Entrar em contato"))))))}),y=(t(68),t(36)),C=t.n(y),I=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){E.get("personal-data").then((function(e){c(e.data)}))}),[]),l.a.createElement("main",null,l.a.createElement(i,null),l.a.createElement("div",{className:"container-fluid header-content"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-12 col-lg-4"},t.map((function(e){return l.a.createElement("div",{className:"infos",key:1},l.a.createElement(b,null),l.a.createElement("h1",{className:"mb-3 text-white"},e.name," ",l.a.createElement("span",{className:"text-bs-blue d-block"},e.lastname,l.a.createElement("span",{className:"text-white"}," ."))),l.a.createElement("p",{className:"mb-3"},"Front-end, UI Designer, palestrante, amante de  s\xe9ries, livros e comunidades de tecnologia."),l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("a",{href:"#tak_me",className:"btn btn-bs-outline-blue mr-2 mr-md-3"},"Fale comigo")))}))),l.a.createElement("div",{className:"d-none d-lg-flex col-lg-5 offset-lg-3"},l.a.createElement("img",{src:C.a,alt:"Luan Rodrigues da Silva",className:"img-fluid"}))))),l.a.createElement(g,null),l.a.createElement(N,null),l.a.createElement(w,null),l.a.createElement(q,null))},P=function(){return l.a.createElement(o.a,null,l.a.createElement(s.a,{component:I,path:"/",exact:!0}))};var R=function(){return l.a.createElement(P,null)};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.43800e3b.chunk.js.map