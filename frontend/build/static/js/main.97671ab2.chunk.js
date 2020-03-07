(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"name":{"en":"Name","de":"Name"},"address":{"en":"Address","de":"Adresse"},"postcode":{"en":"Postcode","de":"Postleitzahl"},"city":{"en":"City","de":"Stadt"},"phone":{"en":"Phone Number","de":"Telefonnummer"},"email":{"en":"Email","de":"E-mail"},"return":{"en":"Return to Discover","de":"Zur\xfcck zu Entdecke"},"suburb":{"en":"Suburb","de":"Stadteil"}}')},17:function(e){e.exports=JSON.parse('{"title":{"en":"Discover","de":"Entdecken"},"neighborhood":{"en":"District","de":"Bezirk"},"add":{"en":"Add New Kita","de":"Neue Kita hinzuf\xfcgen"},"suburb":{"en":"Suburb","de":"Stadteil"},"name":{"en":"Kita","de":"Kita"}}')},21:function(e){e.exports=JSON.parse('{"home":{"en":"Home","de":"Startseite"},"login":{"en":"Login","de":"Anmelden"},"signup":{"en":"Sign Up","de":"Registrieren"},"data":{"en":"The Problem","de":"Das Problem"},"map":{"en":"View Map","de":"Karte anschauen"},"discover":{"en":"Discover","de":"Entdecken"},"logout":{"en":"Log Out","de":"Abmelden"}}')},26:function(e){e.exports=JSON.parse('{"view":{"en":"View Map","de":"Karte Anschauen"},"signup":{"en":"Create Account","de":"Konto Erstellen"},"login":{"en":"Do you already have an account? Click here to log in.","de":"Haben Sie bereits ein Konto? Loggen Sie sich ein."},"connect":{"en":"We want to help you connect with open kita spots in your city.","de":"Wir m\xf6chten Ihnen helfen, mit offenen Kita-Spots in Ihrer Stadt in Verbindung zu setzen."},"welcome":{"en":"Welcome to KitaSchl\xfcssel!","de":"Wilkommen bei KitaSchl\xfcssel!"}}')},27:function(e){e.exports=JSON.parse('{"title":{"en":"Login","de":"Anmelden"},"prompt":{"en":"Welcome back! Please log in to continue.","de":"Willkommen zur\xfcck! Bitte loggen Sie sich ein."},"email":{"en":"Email","de":"E-Mail Adresse"},"password":{"en":"Password","de":"Passwort"},"login":{"en":"Login","de":"Weiter"}}')},28:function(e){e.exports=JSON.parse('{"greeting":{"en":"Welcome Back","de":"Willkommen"},"article":{"en":"Check out what\'s new!","de":"Schauen Sie, was neu ist an!"},"discover":{"en":"Discover Berlin","de":"Entdecke Berlin"},"map":{"en":"View City Maps","de":"Stadtkarten anzeigen"},"hamburg":{"en":"Discover Hamburg","de":"Entdecke Hamburg"}}')},31:function(e){e.exports=JSON.parse('{"title":{"en":"Map","de":"Karte"},"kitas":{"en":"Kita Spots","de":"Kitapl\xe4tze"},"move":{"en":"Missing Kita Spots","de":"Fehlende Kitapl\xe4tze"}}')},33:function(e){e.exports=JSON.parse('{"title":{"en":"Create New Account","de":"Konto Erstellen"},"welcome":{"en":"Welcome! Please create an account","de":"Willkommen! Bitte erstellen Sie ein Konto. "},"submit":{"en":"Submit","de":"Weiter"}}')},54:function(e){e.exports=JSON.parse('{"title":{"en":"The problem in Berlin","de":"Das Problem in Berlin"},"hamburg":{"en":"The problem in Hamburg","de":"Das Problem in Hamburg"}}')},55:function(e,t,a){e.exports=a(83)},60:function(e,t,a){},61:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(50),s=a.n(l),i=(a(60),a(5)),o=a(4),c=a(7),m=a(6),u=a(8),h=a(22),p=(a(61),a(9)),d=a(26),b=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("lang");return r.a.createElement("div",{className:"home-component"},r.a.createElement("h1",null,d.welcome[e]),r.a.createElement("p",null,d.connect[e]),r.a.createElement("div",{className:"home-buttons"},r.a.createElement(p.b,{to:"/map"},r.a.createElement("button",{className:"home-map"},d.view[e])),r.a.createElement(p.b,{to:"/signup"},r.a.createElement("button",{className:"home-signup"},d.signup[e]))),r.a.createElement("p",null,r.a.createElement(p.b,{className:"login-link",to:"/login"},d.login[e])))}}]),t}(n.Component),g=a(24),E=(a(66),a(10)),v=a(11),f=a.n(v),k=a(21),y=function(e){var t=Object(n.useState)("/image/germany.png"),a=Object(E.a)(t,2),l=a[0],s=a[1],i=function(){var t=localStorage.getItem("lang");"en"===t?(s("/image/uk.png"),localStorage.setItem("lang","de")):"de"===t&&(s("/image/germany.png"),localStorage.setItem("lang","en")),e.updatePage()},o=localStorage.getItem("lang");return e.user?r.a.createElement("nav",{className:"navilink"},r.a.createElement(p.b,{className:"logo-link",to:"/"},r.a.createElement("img",{src:"/image/Logo.png",alt:"Kita Schl\xfcssel Logo",height:"85px"})),r.a.createElement("div",{className:"main-nav"},r.a.createElement(p.b,{to:"/problem"},k.data[o]),r.a.createElement(p.b,{to:"/map"},k.map[o]),r.a.createElement(p.b,{to:"/discover"},k.discover[o])),r.a.createElement("div",{className:"login-nav"},r.a.createElement(p.b,{onClick:function(){f.a.delete("/api/auth/logout").then((function(){e.setUser(null)}))},to:"/"},k.logout[o]),r.a.createElement("img",{onClick:i,height:"30px",src:l,alt:""}),r.a.createElement(p.b,{to:"/userportal"},r.a.createElement("img",{height:"30px",src:"/image/user.png",alt:"User Portal"})))):r.a.createElement("nav",{className:"navilink"},r.a.createElement(p.b,{className:"logo-link",to:"/"},r.a.createElement("img",{src:"/image/Logo.png",alt:"Kita Schl\xfcssel Logo",height:"85px"})),r.a.createElement("div",{className:"main-nav"},r.a.createElement(p.b,{to:"/problem"},k.data[o]),r.a.createElement(p.b,{to:"/map"},k.map[o]),r.a.createElement(p.b,{to:"/discover"},k.discover[o])),r.a.createElement("div",{className:"login-nav"},r.a.createElement(p.b,{to:"/login"},k.login[o]),r.a.createElement("img",{onClick:i,height:"30px",src:l,alt:"Language Switcher"})))},S=a(1),w=a(33),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",password:"",role:"parent",redirect:!1},a.handleSubmit=function(e){e.preventDefault(),f.a.post("/api/auth/signup",{name:a.state.name,email:a.state.email,password:a.state.password,role:a.state.role}).then((function(e){console.log("RSPONSE",e),a.props.history.push("/"),a.props.setUser(a.response.data),a.setState({redirect:!0})})).catch((function(e){a.setState({message:e.response.data.message})}))},a.setFormState=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.onChange=function(e){a.setState({role:e.target.value})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("lang");return this.state.redirect?r.a.createElement(h.a,{to:"/userportal"}):r.a.createElement("div",{className:"signup-component"},r.a.createElement("h1",null,w.title[e]),r.a.createElement("p",null,w.welcome[e]),r.a.createElement("div",{className:"signup-container"},r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{name:"name",id:"name",value:this.state.name,onChange:this.setFormState,type:"text"}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{name:"email",id:"email",type:"text",value:this.state.email,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"role"},"Role"),r.a.createElement("select",{name:"role",id:"role",value:this.state.role,onChange:this.onChange},r.a.createElement("option",null,"Parent"),r.a.createElement("option",null,"Government Official"),r.a.createElement("option",null,"Kita Owner")),r.a.createElement("button",{onClick:this.handleSubmit,type:"submit"},w.submit[e]))),this.state.message&&r.a.createElement("p",null,this.state.message))}}]),t}(n.Component),j=a(27),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),f.a.post("/api/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){a.props.setUser(e.data),a.props.history.push("userportal")})).catch((function(e){console.log(e)}))},a.setFormState=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("lang");return r.a.createElement("div",{className:"login"},r.a.createElement("h1",null,j.title[e]),r.a.createElement("p",null,j.prompt[e]),r.a.createElement("div",{className:"login-form"},r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"email"},j.email[e]),r.a.createElement("input",{type:"text",name:"email",id:"email",value:this.state.email,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"password"},j.password[e]),r.a.createElement("input",{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.setFormState}),r.a.createElement("button",{onClick:this.handleSubmit},j.login[e]))),this.state.message&&r.a.createElement("p",null,this.state.message))}}]),t}(n.Component),C=a(28),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("lang");return r.a.createElement("div",{className:"portal-container"},r.a.createElement("h1",null,C.greeting[e]," ",this.props.user.name,"!"),r.a.createElement("article",null,C.article[e]),r.a.createElement("p",null),r.a.createElement(p.b,{to:"/discover"},r.a.createElement("button",null,C.discover[e])),r.a.createElement(p.b,{to:"/map"},r.a.createElement("button",null,C.map[e])),r.a.createElement(p.b,{to:"/discover/hamburg"},r.a.createElement("button",null,C.hamburg[e])))}}]),t}(n.Component),F=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-flex"},r.a.createElement("div",{className:"social-icons"},r.a.createElement("span",{className:"Facebook"},r.a.createElement("img",{src:"../image/Facebook_White.png",alt:"Facebook"})),r.a.createElement("span",{className:"Twitter"},r.a.createElement("img",{src:"../image/Twitter_White.png",alt:"Twitter"})),r.a.createElement("span",{className:"Instagram"},r.a.createElement("img",{src:"../image/Instagram_White.png",alt:"Instagram"})))),r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 2020 KitaSchl\xfcssel")))},K=a(37),z=a(17),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={hamburgKitas:[],search:"",select:"--",searchedKita:[]},a.searchedKita=function(e){a.setState(Object(S.a)({},e.target.name,"select"===e.target.type?e.target.selected:e.target.value))},a.handleSelect=function(e){a.setState({select:e.state.value})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/discover/hamburg").then((function(t){e.setState({hamburgKitas:t.data.kitas}),console.log("RESPONSE",t.data)}))}},{key:"render",value:function(){var e=this;console.log(this.state.hamburgKitas);var t=localStorage.getItem("lang"),a=this.state.search.toLowerCase(),n=this.state.hamburgKitas.filter((function(t){return"--"===e.state.select||t.kita_suburb===e.state.select})).filter((function(e){return e.kita_name.toLowerCase().includes(a)})),l=new Set,s=n.map((function(e){return l.add(e.kita_suburb),r.a.createElement("tr",{key:e._id},r.a.createElement(p.b,{className:"kita-container",to:"/discoverHamburg/".concat(e._id)},r.a.createElement("td",null,e.kita_name)),r.a.createElement("td",null,e.kita_suburb))}));return"government"===this.props.user.role?r.a.createElement("div",null,r.a.createElement("h1",null,z.title[t]),r.a.createElement("label",{htmlFor:"searchbyname"},"Search Kita"),r.a.createElement("input",{type:"text",name:"search",value:this.state.search,onChange:this.searchedKita,placeholder:"search by name"}),r.a.createElement("label",{htmlFor:"filterbysuburb"},"Select your Suburb: "),r.a.createElement("select",{size:"3",name:"select",type:"select",value:this.state.select,onChange:this.searchedKita},Object(K.a)(l).map((function(e){return r.a.createElement("option",{value:e},e)}))),r.a.createElement(p.b,{to:"/discover"},r.a.createElement("button",null,"Discover Berlin")),r.a.createElement(p.b,{to:"/addkita/hamburg"},r.a.createElement("button",null,"Add new kita")),r.a.createElement("tbody",{className:"table"},r.a.createElement("th",null,z.name[t]),r.a.createElement("th",null,z.suburb[t]),s)):r.a.createElement("div",null,r.a.createElement("h1",null,z.title[t]),r.a.createElement("label",{htmlFor:"searchbyname"},"Search Kita"),r.a.createElement("input",{type:"text",name:"search",value:this.state.search,onChange:this.searchedKita,placeholder:"search by name"}),r.a.createElement("label",{htmlFor:"filterbysuburb"},"Select your Suburb: "),r.a.createElement("select",{size:"3",name:"select",type:"select",value:this.state.select,onChange:this.searchedKita},Object(K.a)(l).map((function(e){return r.a.createElement("option",{value:e},e)}))),r.a.createElement(p.b,{to:"/discover"},r.a.createElement("button",null,"Discover Berlin")),r.a.createElement("tbody",{className:"table"},r.a.createElement("th",null,z.name[t]),r.a.createElement("th",null,z.suburb[t]),s))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={kitas:[],search:"",select:"--",searchedKita:[]},a.searchedName=function(e){a.setState(Object(S.a)({},e.target.name,"select"===e.target.type?e.target.selected:e.target.value))},a.handleSelect=function(e){a.setState({select:e.target.value})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/discover").then((function(t){e.setState({kitas:t.data.kitas})}))}},{key:"render",value:function(){var e=this,t=this.state.search.toLowerCase(),a=this.state.kitas.filter((function(t){return"--"===e.state.select||t.viertel===e.state.select})).filter((function(e){return e.name.toLowerCase().includes(t)})),n=localStorage.getItem("lang"),l=a.map((function(e){return r.a.createElement("tbody",{className:"table",key:e._id},r.a.createElement("tr",null,r.a.createElement(p.b,{className:"kita-container",to:"/discover/".concat(e._id)},r.a.createElement("td",null,e.name)),r.a.createElement("td",null,e.viertel)))}));return"government"===this.props.user.role?r.a.createElement("div",null,r.a.createElement("h1",null,z.title[n]),r.a.createElement(p.b,{to:"/addkita"},r.a.createElement("button",null,z.add[n])),r.a.createElement("label",{htmlFor:"searchbyname"},"Search Kita: "),r.a.createElement("input",{type:"text",name:"search",value:this.state.search,onChange:this.searchedName,placeholder:"search by name"}),r.a.createElement("label",{htmlFor:"filterbyviertel"},"Select: "),r.a.createElement("select",{name:"select",type:"select",value:this.state.select,onChange:this.searchedName},r.a.createElement("option",{value:"--"},"select"),r.a.createElement("option",{value:"Charlottenburg-Wilmersdorf"},"Charlottenburg-Wilmersdorf"),r.a.createElement("option",{value:"Friedrichshain-Kreuzberg"},"Friedrichshain-Kreuzberg"),r.a.createElement("option",{value:"Lichtenberg"},"Lichtenberg"),r.a.createElement("option",{value:"Marzahn-Hellersdorf"},"Marzahn-Hellersdorf"),r.a.createElement("option",{value:"Mitte"},"Mitte"),r.a.createElement("option",{value:"Neukoelln"},"Neukoelln"),r.a.createElement("option",{value:"Pankow"},"Pankow"),r.a.createElement("option",{value:"Reinickendorf"},"Reinickendorf"),r.a.createElement("option",{value:"Spandau"},"Spandau"),r.a.createElement("option",{value:"Steglitz-Zehlendorf"},"Steglitz-Zehlendorf"),r.a.createElement("option",{value:"Tempelhof-Schoeneberg"},"Tempelhof-Schoeneberg"),r.a.createElement("option",{value:"Treptow-Koepenick"},"Treptow-Koepenick")),r.a.createElement(p.b,{to:"/discover/hamburg"},r.a.createElement("button",null,"Discover Hamburg")),r.a.createElement(p.b,{to:"/addkita"},r.a.createElement("button",null,"Add new kita")),r.a.createElement("table",{className:"table-container"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"50%"},"Kita Name"),r.a.createElement("th",{width:"50%"},z.neighborhood[n]))),l)):r.a.createElement("div",null,r.a.createElement("h1",null,z.title[n]),r.a.createElement("label",{htmlFor:"searchbyname"},"Search Kita: "),r.a.createElement("input",{type:"text",name:"search",value:this.state.search,onChange:this.searchedName,placeholder:"search by name"}),r.a.createElement("label",{htmlFor:"filterbyviertel"},"Select: "),r.a.createElement("select",{name:"select",type:"select",value:this.state.select,onChange:this.searchedName},r.a.createElement("option",{value:"--"},"select"),r.a.createElement("option",{value:"Charlottenburg-Wilmersdorf"},"Charlottenburg-Wilmersdorf"),r.a.createElement("option",{value:"Friedrichshain-Kreuzberg"},"Friedrichshain-Kreuzberg"),r.a.createElement("option",{value:"Lichtenberg"},"Lichtenberg"),r.a.createElement("option",{value:"Marzahn-Hellersdorf"},"Marzahn-Hellersdorf"),r.a.createElement("option",{value:"Mitte"},"Mitte"),r.a.createElement("option",{value:"Neukoelln"},"Neukoelln"),r.a.createElement("option",{value:"Pankow"},"Pankow"),r.a.createElement("option",{value:"Reinickendorf"},"Reinickendorf"),r.a.createElement("option",{value:"Spandau"},"Spandau"),r.a.createElement("option",{value:"Steglitz-Zehlendorf"},"Steglitz-Zehlendorf"),r.a.createElement("option",{value:"Tempelhof-Schoeneberg"},"Tempelhof-Schoeneberg"),r.a.createElement("option",{value:"Treptow-Koepenick"},"Treptow-Koepenick")),r.a.createElement(p.b,{to:"/discover/hamburg"},r.a.createElement("button",null,"Discover Hamburg")),r.a.createElement("table",{className:"table-container"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"50%"},"Kita Name"),r.a.createElement("th",{width:"50%"},z.neighborhood[n]))),l))}}]),t}(n.Component),D=a(13),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={kitas:!1},a.deleteKita=function(e){e.preventDefault();var t=a.props.match.params.id;f.a.delete("/api/discover/".concat(t,"/delete")).then((function(e){a.props.history.push("/discover")}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;f.a.get("/api/discover/:id").then((function(a){var n=a.data.kitas.find((function(e){return e._id===t}));e.setState({kitas:n})}))}},{key:"render",value:function(){var e=localStorage.getItem("lang");return this.state.kitas?"government"===this.props.user.role?r.a.createElement("div",{className:"detail-container"},r.a.createElement("img",{height:"200px",width:"200px",src:"/image/kindergarten.png",alt:""}),r.a.createElement("div",{className:"detail-container-text"},r.a.createElement("h1",null,this.state.kitas.name),r.a.createElement("h3",null,D.address[e]),r.a.createElement("p",null,this.state.kitas.adresse),r.a.createElement("h3",null,D.postcode[e],":"),r.a.createElement("p",null,this.state.kitas.postleitzahl),r.a.createElement("h3",null,D.city[e]),r.a.createElement("p",null,this.state.kitas.stadt),r.a.createElement("h3",null,D.phone[e]),r.a.createElement("p",null,r.a.createElement("a",{href:"tel:"+this.state.kitas.telefon},this.state.kitas.telefon)),r.a.createElement("h3",null,D.email[e]),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:"+this.state.kitas.email},this.state.kitas.email))),r.a.createElement("button",{onClick:this.deleteKita},"delete kita"),r.a.createElement(p.b,{to:"/discover"},r.a.createElement("button",null,D.return[e]))):r.a.createElement("div",{className:"detail-container"},r.a.createElement("h1",null,this.state.kitas.name),r.a.createElement("div",{className:"markus-container"},r.a.createElement("div",{className:"detail-image-container"},r.a.createElement("img",{height:"200px",width:"200px",src:"/image/kitaimage.png",alt:""})),r.a.createElement("div",{className:"detail-container-text"},r.a.createElement("h3",null,D.address[e]),r.a.createElement("p",null,this.state.kitas.adresse),r.a.createElement("h3",null,D.postcode[e],":"),r.a.createElement("p",null,this.state.kitas.postleitzahl),r.a.createElement("h3",null,D.city[e]),r.a.createElement("p",null,this.state.kitas.stadt),r.a.createElement("h3",null,D.phone[e]),r.a.createElement("p",null,r.a.createElement("a",{href:"tel:"+this.state.kitas.telefon},this.state.kitas.telefon)),r.a.createElement("h3",null,D.email[e]),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:"+this.state.kitas.email},this.state.kitas.email)))),r.a.createElement(p.b,{to:"/discover"},r.a.createElement("button",null,D.return[e]))):r.a.createElement("h1",null)}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={kitas:!1},a.deleteKita=function(e){e.preventDefault();var t=a.props.match.params.id;f.a.delete("/api/discover/hamburg".concat(t,"/delete")).then((function(e){a.props.history.push("/discover/hamburg")}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;f.a.get("/api/discover/hamburg/".concat(t)).then((function(t){console.log(t.data),e.setState({kitas:t.data})}))}},{key:"render",value:function(){var e=localStorage.getItem("lang");return this.state.kitas?(console.log(this.state.kitas),"government"===this.props.user.role?r.a.createElement("div",{className:"detail-container"},r.a.createElement("img",{height:"200px",width:"200px",src:"/image/kindergarten.png",alt:""}),r.a.createElement("h1",null,this.state.kitas.kita_name),r.a.createElement("h3",null,D.address[e]),r.a.createElement("p",null,this.state.kitas.kita_address),r.a.createElement("p",null,this.state.kitas.plz),r.a.createElement("p",null,this.state.kitas.kita_suburb),r.a.createElement("button",{onClick:this.deleteKita},"delete kita"),r.a.createElement(p.b,{to:"/discover/hamburg"},r.a.createElement("button",null,D.return[e]))):r.a.createElement("div",{className:"detail-container"},r.a.createElement("img",{height:"200px",width:"200px",src:"/image/kindergarten.png",alt:""}),r.a.createElement("h1",null,this.state.kitas.kita_name),r.a.createElement("h3",null,D.address[e]),r.a.createElement("p",null,this.state.kitas.kita_address),r.a.createElement("h3",null,D.postcode[e],":"),r.a.createElement("p",null,this.state.kitas.plz),r.a.createElement("h3",null,D.city[e]),r.a.createElement("p",null,"Hamburg"),r.a.createElement(p.b,{to:"/discover/hamburg"},r.a.createElement("button",null,D.return[e])))):r.a.createElement("h1",null,"LOADING")}}]),t}(n.Component),M=a(31),B={position:"absolute",top:0,left:0,padding:"10px",width:"30px"},L=["-260-100","100-200","200-400","400-600","600-800","800-1000","1000-1500","1500-2000","2000-2500","2500-4509"],T=["#daf5f4","#b5ecec","#89ecda","#40e0d0","#3acabb","#2d9d92","#007777","#005555","#003333","#000a0a"],H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).drawLegends=function(){return L.map((function(e,t){var a=T[t];return r.a.createElement("div",{style:{backgroundColor:"white",display:"flex",justifyContent:"space-between",width:120}},r.a.createElement("span",{className:"legend-key",style:{display:"inline-block",width:"25px",backgroundColor:a}}),r.a.createElement("span",{style:{color:"#003333"}},e))}))},a.state={viewport:{latitude:53.57532,longitude:10.01534,zoom:9.5,bearing:0,pitch:0,width:"100vw",height:"100vh"}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.viewport,a=localStorage.getItem("lang");return r.a.createElement(g.b,Object.assign({},t,{mapStyle:"mapbox://styles/akup21/ck7dbfd500pvk1ikikrq0r7eo",mapboxApiAccessToken:"pk.eyJ1IjoiYWt1cDIxIiwiYSI6ImNrNzd0bzJ2cTA5MWgzbG55Z3oxeGEwcXEifQ._STj0U9zQNrv2I1Stwicig",onViewportChange:function(t){return e.setState({viewport:t})}}),r.a.createElement("div",{className:"nav",style:B},r.a.createElement(g.a,null),r.a.createElement("div",null,r.a.createElement("div",{id:"map"}),r.a.createElement("div",{class:"map-overlay",id:"features",style:{display:"inline-block",width:200,height:80,backgroundColor:"white",border:20}},r.a.createElement("h3",null,"Hamburg ",M.move[a]),r.a.createElement("div",{class:"map-overlay",id:"legend"}),this.drawLegends()))))}}]),t}(n.Component),_={position:"absolute",top:0,left:0,padding:"10px",width:30},J=["-423-0","0-100","100-200","200-300","300-400","400-500","500-600","600-700","700-800","900-1109"],U=["#daf5f4","#b5ecec","#89ecda","#40e0d0","#3acabb","#2d9d92","#007777","#005555","#003333","#000a0a"],R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).drawLegends=function(){return J.map((function(e,t){var a=U[t];return r.a.createElement("div",{style:{backgroundColor:"white",display:"flex",justifyContent:"space-between",width:100}},r.a.createElement("span",{className:"legend-key",style:{display:"inline-block",width:"20px",backgroundColor:a}}),r.a.createElement("span",{style:{color:"#003333"}},e))}))},a.state={viewport:{latitude:52.52008,longitude:13.40495,zoom:9.5,bearing:0,pitch:0,width:"100vw",height:"100vh"}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.viewport,a=localStorage.getItem("lang");return r.a.createElement(g.b,Object.assign({},t,{mapStyle:"mapbox://styles/akup21/ck7an89si3ifj1iumt6579c0z",mapboxApiAccessToken:"pk.eyJ1IjoiYWt1cDIxIiwiYSI6ImNrNzd0bzJ2cTA5MWgzbG55Z3oxeGEwcXEifQ._STj0U9zQNrv2I1Stwicig",onViewportChange:function(t){return e.setState({viewport:t})}}),r.a.createElement("div",{className:"nav",style:_},r.a.createElement(g.a,null),r.a.createElement("div",null,r.a.createElement("div",{id:"map"}),r.a.createElement("div",{class:"map-overlay",id:"features",style:{display:"inline-block",width:150,height:100,backgroundColor:"white",border:20}},r.a.createElement("h3",null,"Berlin ",M.move[a])),r.a.createElement("div",{class:"map-overlay",id:"legend"},this.drawLegends()))))}}]),t}(n.Component),Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={displayBerlin:!0},a.handlechangeMap=function(e){e.preventDefault(),a.setState({displayBerlin:!a.state.displayBerlin})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handlechangeMap},this.state.displayBerlin?"Hamburg":"Berlin"),this.state.displayBerlin?r.a.createElement(R,null):r.a.createElement(H,null))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",district:"select",address:"",postcode:"",phoneNumber:"",email:"",spots:"",spotsforunderthree:"",spotsforoverthree:"",redirect:!1},a.setFormState=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.addNewKita=function(e){e.preventDefault(),f.a.post("/api/addkita",{name:a.state.name,district:a.state.district,address:a.state.address,postcode:a.state.postcode,phoneNumber:a.state.phoneNumber,email:a.state.email,spots:a.state.spots,spotsforunderthree:a.state.spotsforunderthree,spotsforoverthree:a.state.spotsforoverthree}).then((function(e){a.props.history.push("/discover"),console.log("this is response",e)})).catch((function(e){a.setState({message:e.response.data.message})}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(h.a,{to:"/discover"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Add a kita"),r.a.createElement("label",{htmlFor:"name"},"name:"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"district"},"District:"),r.a.createElement("select",{name:"district",type:"select",value:this.state.district,onChange:this.setFormState},r.a.createElement("option",{value:"--"},"select"),r.a.createElement("option",{value:"Charlottenburg-Wilmersdorf"},"Charlottenburg-Wilmersdorf"),r.a.createElement("option",{value:"Friedrichshain-Kreuzberg"},"Friedrichshain-Kreuzberg"),r.a.createElement("option",{value:"Lichtenberg"},"Lichtenberg"),r.a.createElement("option",{value:"Marzahn-Hellersdorf"},"Marzahn-Hellersdorf"),r.a.createElement("option",{value:"Mitte"},"Mitte"),r.a.createElement("option",{value:"Neukoelln"},"Neukoelln"),r.a.createElement("option",{value:"Pankow"},"Pankow"),r.a.createElement("option",{value:"Reinickendorf"},"Reinickendorf"),r.a.createElement("option",{value:"Spandau"},"Spandau"),r.a.createElement("option",{value:"Steglitz-Zehlendorf"},"Steglitz-Zehlendorf"),r.a.createElement("option",{value:"Tempelhof-Schoeneberg"},"Tempelhof-Schoeneberg"),r.a.createElement("option",{value:"Treptow-Koepenick"},"Treptow-Koepenick")),r.a.createElement("label",{htmlFor:"address"},"address:"),r.a.createElement("input",{type:"text",name:"address",value:this.state.address,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"postcode"},"postcode"),r.a.createElement("input",{type:"text",name:"postcode",value:this.state.postcode,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"phoneNumber"},"phone number:"),r.a.createElement("input",{type:"text",name:"phoneNumber",value:this.state.phoneNumber,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"email"},"email:"),r.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"spots"},"total spots:"),r.a.createElement("input",{type:"number",name:"spots",value:this.state.spots,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"spotsforunderthree"},"spots for under three:"),r.a.createElement("input",{type:"number",name:"spotsforunderthree",value:this.state.spotsforunderthree,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"spotsforoverthree"},"spots for over three"),r.a.createElement("input",{type:"number",name:"spotsforoverthree",value:this.state.spotsforoverthree,onChange:this.setFormState}),r.a.createElement("button",{type:"submit",onClick:this.addNewKita},"submit"),this.state.message&&r.a.createElement("p",null,this.state.message))}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",district:"",address:"",postcode:"",phoneNumber:"",email:"",spots:"",spotsforunderthree:"",spotsforoverthree:"",redirect:!1},a.setFormState=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.addNewKita=function(e){e.preventDefault(),f.a.post("/api/addkita/hamburg",{name:a.state.name,district:a.state.district,address:a.state.address,postcode:a.state.postcode,phoneNumber:a.state.phoneNumber,email:a.state.email,spots:a.state.spots,spotsforunderthree:a.state.spotsforunderthree,spotsforoverthree:a.state.spotsforoverthree}).then((function(e){a.props.history.push("/discover"),console.log("this is response",e)})).catch((function(e){a.setState({message:e.response.data.message})}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(h.a,{to:"/discover/hamburg"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Add a kita"),r.a.createElement("label",{htmlFor:"name"},"name:"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"district"},"District:"),r.a.createElement("input",{type:"text",name:"district",value:this.state.district,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"address"},"address:"),r.a.createElement("input",{type:"text",name:"address",value:this.state.address,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"postcode"},"postcode"),r.a.createElement("input",{type:"text",name:"postcode",value:this.state.postcode,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"phoneNumber"},"phone number:"),r.a.createElement("input",{type:"text",name:"phoneNumber",value:this.state.phoneNumber,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"email"},"email:"),r.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"spots"},"total spots:"),r.a.createElement("input",{type:"number",name:"spots",value:this.state.spots,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"spotsforunderthree"},"spots for under three:"),r.a.createElement("input",{type:"number",name:"spotsforunderthree",value:this.state.spotsforunderthree,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"spotsforoverthree"},"spots for over three"),r.a.createElement("input",{type:"number",name:"spotsforoverthree",value:this.state.spotsforoverthree,onChange:this.setFormState}),r.a.createElement("button",{type:"submit",onClick:this.addNewKita},"submit"),this.state.message&&r.a.createElement("p",null,this.state.message))}}]),t}(n.Component),Q=a(54),Y=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("lang");return r.a.createElement("div",{className:"problem-container"},r.a.createElement("h1",null,Q.title[e]),r.a.createElement("img",{width:"400px",src:"/image/relationber.png",alt:""}),r.a.createElement("img",{width:"400px",src:"/image/prognose_ber.png",alt:""}))}}]),t}(n.Component),X=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"problem in Hamburg"),r.a.createElement("img",{width:"400px",src:"/image/relationhh.png",alt:""}),r.a.createElement("img",{width:"400px",src:"/image/prognseHH.png",alt:""}))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={displayBerlin:!0},a.handlechangeProblem=function(e){e.preventDefault(),a.setState({displayBerlin:!a.state.displayBerlin})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handlechangeProblem},this.state.displayBerlin?"Hamburg":"Berlin"),this.state.displayBerlin?r.a.createElement(Y,null):r.a.createElement(X,null))}}]),t}(n.Component),$=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user},a.setUser=function(e){a.setState({user:e})},a.updatePage=function(){a.forceUpdate()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(y,{setUser:this.setUser,user:this.state.user,updatePage:this.updatePage}),r.a.createElement(h.b,{exact:!0,path:"/",component:b}),r.a.createElement(h.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(O,{history:t.history,user:e.state.user,setUser:e.setUser})}}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(N,{history:t.history,setUser:e.setUser})}}),r.a.createElement(h.b,{exact:!0,path:"/userportal",render:function(t){return r.a.createElement(x,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(h.b,{exact:!0,path:"/map",component:Z}),r.a.createElement(h.b,{exact:!0,path:"/discover",render:function(t){return r.a.createElement(A,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(h.b,{exact:!0,path:"/discover/hamburg",render:function(t){return r.a.createElement(I,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(h.b,{exact:!0,path:"/discover/:id",render:function(t){return r.a.createElement(P,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(h.b,{exact:!0,path:"/discoverHamburg/:id",render:function(t){return r.a.createElement(W,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(h.b,{exact:!0,path:"/addkita",component:G}),r.a.createElement(h.b,{exact:!0,path:"/addkita/hamburg",component:V}),r.a.createElement(h.b,{exaxt:!0,path:"/problem",component:q}),r.a.createElement(F,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));localStorage.getItem("lang")||localStorage.setItem("lang","de"),f.a.get("/api/auth/loggedin").then((function(e){s.a.render(r.a.createElement(p.a,null,r.a.createElement($,{user:e.data})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.97671ab2.chunk.js.map