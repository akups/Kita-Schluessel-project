(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"name":{"en":"Name","de":"Name"},"address":{"en":"Address","de":"Adresse"},"postcode":{"en":"Postcode","de":"Postleitzahl"},"city":{"en":"City","de":"Stadt"},"phone":{"en":"Phone Number","de":"Telefonnummer"},"email":{"en":"Email","de":"E-mail"},"return":{"en":"Return to Discover","de":"Zur\xfcck zu Entdecke"}}')},19:function(e){e.exports=JSON.parse('{"home":{"en":"Home","de":"Startseite"},"login":{"en":"Login","de":"Anmelden"},"signup":{"en":"Sign Up","de":"Registrieren"},"data":{"en":"The Problem","de":"Das Problem"},"map":{"en":"View Map","de":"Karte anschauen"},"discover":{"en":"Discover","de":"Entdecken"},"logout":{"en":"Log Out","de":"Abmelden"}}')},25:function(e){e.exports=JSON.parse('{"title":{"en":"Map","de":"Karte"},"kitas":{"en":"Kita Spots","de":"Kitapl\xe4tze"},"move":{"en":"Hover over the neighborhoods!","de":"Bewegun \xfcber Stadtteile!"}}')},26:function(e){e.exports=JSON.parse('{"view":{"en":"View Map","de":"Karte Anschauen"},"signup":{"en":"Create Account","de":"Konto Erstellen"},"login":{"en":"Do you already have an account? Click here to log in.","de":"Haben Sie bereits ein Konto? Loggen Sie sich ein."},"connect":{"en":"Connect with open kita spots in your city!","de":"Verbinden Sie sich mit offenen Kita-Spots in Ihrer Stadt!"}}')},28:function(e){e.exports=JSON.parse('{"greeting":{"en":"Welcome Back","de":"Willkommen"},"article":{"en":"Check out what\'s new!","de":"Schauen Sie, was neu ist!"},"discover":{"en":"Discover","de":"Entdecke"},"map":{"en":"View City Maps","de":"Stadtpl\xe4ne anzeigen"}}')},29:function(e){e.exports=JSON.parse('{"title":{"en":"Discover","de":"Entdecken"},"neighborhood":{"en":"Neighborhood","de":"Bezirk"}}')},35:function(e){e.exports=JSON.parse('{"title":{"en":"Sign Up","de":"Registrieren"},"welcome":{"en":"Welcome! Please create an account","de":"Willkommen! Bitte erstellen Sie ein Konto. "}}')},36:function(e){e.exports=JSON.parse('{"title":{"en":"Login","de":"Anmelden"},"prompt":{"en":"Welcome back! Please log in","de":"Willkommen zur\xfcck! Bitte loggen Sie sich ein."}}')},53:function(e,t,a){e.exports=a(81)},58:function(e,t,a){},59:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(49),o=a.n(l),i=(a(58),a(5)),s=a(4),c=a(7),m=a(6),u=a(8),h=a(21),p=(a(59),a(9)),d=a(26),g=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("lang");return r.a.createElement("div",{className:"home-component"},r.a.createElement("h1",null,"KitaSchl\xfcssel"),r.a.createElement("p",null,d.connect[e]),r.a.createElement("div",{className:"home-buttons"},r.a.createElement(p.b,{to:"/map"},r.a.createElement("button",{className:"home-map"},d.view[e])),r.a.createElement(p.b,{to:"/signup"},r.a.createElement("button",{className:"home-signup"},d.signup[e]))),r.a.createElement("p",null,r.a.createElement(p.b,{className:"login-link",to:"/login"},d.login[e])))}}]),t}(n.Component),E=a(23),b=(a(64),a(10)),v=a(12),f=a.n(v),k=a(19),y=function(e){var t=Object(n.useState)("/image/germany.png"),a=Object(b.a)(t,2),l=a[0],o=a[1],i=function(){var t=localStorage.getItem("lang");"en"===t?(o("/image/uk.png"),localStorage.setItem("lang","de")):"de"===t&&(o("/image/germany.png"),localStorage.setItem("lang","en")),e.updatePage()},s=localStorage.getItem("lang");return e.user?r.a.createElement("nav",{className:"navilink"},r.a.createElement(p.b,{className:"logo-link",to:"/"},r.a.createElement("img",{src:"/image/Logo.png",alt:"Kita Schl\xfcssel Logo",height:"85px"})),r.a.createElement("div",{className:"main-nav"},r.a.createElement(p.b,{to:"/data"},k.data[s]),r.a.createElement(p.b,{to:"/map"},k.map[s]),r.a.createElement(p.b,{to:"/discover"},k.discover[s])),r.a.createElement("div",{className:"login-nav"},r.a.createElement(p.b,{onClick:function(){f.a.delete("/api/auth/logout").then((function(){e.setUser(null)}))},to:"/"},k.logout[s]),r.a.createElement("img",{onClick:i,height:"30px",src:l,alt:""}),r.a.createElement(p.b,{to:"/userportal"},r.a.createElement("img",{height:"30px",src:"/image/user.png",alt:"User Portal"})))):r.a.createElement("nav",{className:"navilink"},r.a.createElement(p.b,{className:"logo-link",to:"/"},r.a.createElement("img",{src:"/image/Logo.png",alt:"Kita Schl\xfcssel Logo",height:"85px"})),r.a.createElement("div",{className:"main-nav"},r.a.createElement(p.b,{to:"/data"},k.data[s]),r.a.createElement(p.b,{to:"/map"},k.map[s]),r.a.createElement(p.b,{to:"/discover"},k.discover[s])),r.a.createElement("div",{className:"login-nav"},r.a.createElement(p.b,{to:"/login"},k.login[s]),r.a.createElement(p.b,{to:"/signup"},k.signup[s]),r.a.createElement("img",{onClick:i,height:"30px",src:l,alt:"Language Switcher"})))},S=a(1),w=a(35),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",password:"",role:"parent",redirect:!1},a.handleSubmit=function(e){e.preventDefault(),f.a.post("/api/auth/signup",{name:a.state.name,email:a.state.email,password:a.state.password,role:a.state.role}).then((function(e){a.props.setUser(e.data),a.props.history.push("/userportal")})).catch((function(e){a.setState({message:e.response.data.message})}))},a.setFormState=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.onChange=function(e){a.setState({role:e.target.value})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("lang");return this.state.redirect?r.a.createElement(h.a,{to:"/userportal"}):r.a.createElement("div",{className:"signup-componenet"},r.a.createElement("h1",null,w.title[e]),r.a.createElement("p",null,w.welcome[e]),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{name:"name",id:"name",value:this.state.name,onChange:this.setFormState,type:"text"}),r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{name:"email",id:"email",type:"text",value:this.state.email,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"role"},"Role"),r.a.createElement("select",{name:"role",id:"role",value:this.state.role,onChange:this.onChange},r.a.createElement("option",null,"parent"),r.a.createElement("option",null,"government"),r.a.createElement("option",null,"owner")),r.a.createElement("button",{onClick:this.handleSubmit,type:"submit"},"Submit")),this.state.message&&r.a.createElement("p",null,this.state.message))}}]),t}(n.Component),j=a(36),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),f.a.post("/api/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){a.props.setUser(e.data),a.props.history.push("userportal")})).catch((function(e){console.log(e)}))},a.setFormState=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("lang");return r.a.createElement("div",null,r.a.createElement("h1",null,j.title[e]),r.a.createElement("p",null,j.prompt[e]),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"email"},"email:"),r.a.createElement("input",{type:"text",name:"email",id:"email",value:this.state.email,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.setFormState}),r.a.createElement("button",{onClick:this.handleSubmit},"Login")),this.state.message&&r.a.createElement("p",null,this.state.message))}}]),t}(n.Component),N=a(28),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("lang");return r.a.createElement("div",null,r.a.createElement("h1",null,N.greeting[e]," ",this.props.user.name,"!"),r.a.createElement("article",null,N.article[e]),r.a.createElement("p",null),r.a.createElement(p.b,{to:"/discover"},r.a.createElement("button",null,N.discover[e])),r.a.createElement(p.b,{to:"/map"},r.a.createElement("button",null,N.map[e])),r.a.createElement(p.b,{to:"/discover/hamburg"},r.a.createElement("button",null,"Click me")))}}]),t}(n.Component),F=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 2020 KitaSchl\xfcssel")))},K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={hamburgKitas:[],search:"",select:"--",searchedKita:[]},a.searchedKita=function(e){a.setState(Object(S.a)({},e.target.name,"select"===e.target.type?e.target.selected:e.target.value))},a.handleSelect=function(e){a.setState({select:e.state.value})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/discover/hamburg").then((function(t){e.setState({hamburgKitas:t.data.kitas}),console.log("RESPONSE",t.data)}))}},{key:"render",value:function(){var e=this;console.log(this.state.hamburgKitas);var t=this.state.search.toLowerCase(),a=this.state.hamburgKitas.filter((function(t){return"--"===e.state.select||t.kita_suburb===e.state.select})).filter((function(e){return e.kita_name.toLowerCase().includes(t)})).map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement(p.b,{className:"kita-container",to:"/discoverHamburg/".concat(e._id)},r.a.createElement("td",null,e.kita_name)),r.a.createElement("td",null,e.kita_suburb))}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Discover"),r.a.createElement("label",{htmlFor:"searchbyname"},"Search Kita"),r.a.createElement("input",{type:"text",name:"search",value:this.state.search,onChange:this.searchedKita,placeholder:"search by name"}),r.a.createElement("label",{htmlFor:"filterbysuburb"},"Select: "),r.a.createElement("select",{name:"select",type:"select",value:this.state.select,onChange:this.searchedKita},["Berlin","Bonn"].map((function(e){return r.a.createElement("option",{value:e},e)}))),r.a.createElement("tbody",{className:"table"},a))}}]),t}(n.Component),z=a(29),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={kitas:[],search:"",select:"--",searchedKita:[]},a.searchedName=function(e){a.setState(Object(S.a)({},e.target.name,"select"===e.target.type?e.target.selected:e.target.value))},a.handleSelect=function(e){a.setState({select:e.target.value})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/discover").then((function(t){e.setState({kitas:t.data.kitas})}))}},{key:"render",value:function(){var e=this,t=this.state.search.toLowerCase(),a=this.state.kitas.filter((function(t){return"--"===e.state.select||t.viertel===e.state.select})).filter((function(e){return e.name.toLowerCase().includes(t)})),n=localStorage.getItem("lang"),l=a.map((function(e){return r.a.createElement("tbody",{className:"table",key:e._id},r.a.createElement("tr",null,r.a.createElement(p.b,{className:"kita-container",to:"/discover/".concat(e._id)},r.a.createElement("td",null,e.name)),r.a.createElement("td",null,e.viertel)))}));return"government"===this.props.user.role?r.a.createElement("div",null,r.a.createElement("h1",null,z.title[n]),r.a.createElement(p.b,{to:"/addkita"},r.a.createElement("button",null,"Add new kita")),r.a.createElement("label",{htmlFor:"searchbyname"},"Search Kita: "),r.a.createElement("input",{type:"text",name:"search",value:this.state.search,onChange:this.searchedName,placeholder:"search by name"}),r.a.createElement("label",{htmlFor:"filterbyviertel"},"Select: "),r.a.createElement("select",{name:"select",type:"select",value:this.state.select,onChange:this.searchedName},r.a.createElement("option",{value:"--"},"select"),r.a.createElement("option",{value:"Charlottenburg-Wilmersdorf"},"Charlottenburg-Wilmersdorf"),r.a.createElement("option",{value:"Friedrichshain-Kreuzberg"},"Friedrichshain-Kreuzberg"),r.a.createElement("option",{value:"Lichtenberg"},"Lichtenberg"),r.a.createElement("option",{value:"Marzahn-Hellersdorf"},"Marzahn-Hellersdorf"),r.a.createElement("option",{value:"Mitte"},"Mitte"),r.a.createElement("option",{value:"Neukoelln"},"Neukoelln"),r.a.createElement("option",{value:"Pankow"},"Pankow"),r.a.createElement("option",{value:"Reinickendorf"},"Reinickendorf"),r.a.createElement("option",{value:"Spandau"},"Spandau"),r.a.createElement("option",{value:"Steglitz-Zehlendorf"},"Steglitz-Zehlendorf"),r.a.createElement("option",{value:"Tempelhof-Schoeneberg"},"Tempelhof-Schoeneberg"),r.a.createElement("option",{value:"Treptow-Koepenick"},"Treptow-Koepenick")),r.a.createElement("table",{className:"table-container"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"50%"},"Kita Name"),r.a.createElement("th",{width:"50%"},z.neighborhood[n]))),l)):r.a.createElement("div",null,r.a.createElement("h1",null,z.title[n]),r.a.createElement("label",{htmlFor:"searchbyname"},"Search Kita: "),r.a.createElement("input",{type:"text",name:"search",value:this.state.search,onChange:this.searchedName,placeholder:"search by name"}),r.a.createElement("label",{htmlFor:"filterbyviertel"},"Select: "),r.a.createElement("select",{name:"select",type:"select",value:this.state.select,onChange:this.searchedName},r.a.createElement("option",{value:"--"},"select"),r.a.createElement("option",{value:"Charlottenburg-Wilmersdorf"},"Charlottenburg-Wilmersdorf"),r.a.createElement("option",{value:"Friedrichshain-Kreuzberg"},"Friedrichshain-Kreuzberg"),r.a.createElement("option",{value:"Lichtenberg"},"Lichtenberg"),r.a.createElement("option",{value:"Marzahn-Hellersdorf"},"Marzahn-Hellersdorf"),r.a.createElement("option",{value:"Mitte"},"Mitte"),r.a.createElement("option",{value:"Neukoelln"},"Neukoelln"),r.a.createElement("option",{value:"Pankow"},"Pankow"),r.a.createElement("option",{value:"Reinickendorf"},"Reinickendorf"),r.a.createElement("option",{value:"Spandau"},"Spandau"),r.a.createElement("option",{value:"Steglitz-Zehlendorf"},"Steglitz-Zehlendorf"),r.a.createElement("option",{value:"Tempelhof-Schoeneberg"},"Tempelhof-Schoeneberg"),r.a.createElement("option",{value:"Treptow-Koepenick"},"Treptow-Koepenick")),r.a.createElement("table",{className:"table-container"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"50%"},"Kita Name"),r.a.createElement("th",{width:"50%"},z.neighborhood[n]))),l))}}]),t}(n.Component),A=a(16),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={kitas:!1},a.deleteKita=function(e){e.preventDefault();var t=a.props.match.params.id;f.a.delete("/api/discover/".concat(t,"/delete")).then((function(e){a.props.history.push("/discover")}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;f.a.get("/api/discover/:id").then((function(a){var n=a.data.kitas.find((function(e){return e._id===t}));e.setState({kitas:n})}))}},{key:"render",value:function(){var e=localStorage.getItem("lang");return this.state.kitas?"government"===this.props.user.role?r.a.createElement("div",{className:"detail-container"},r.a.createElement("img",{height:"200px",width:"200px",src:"/image/kitaimage.png",alt:""}),r.a.createElement("h1",null,this.state.kitas.name),r.a.createElement("h3",null,A.address[e]),r.a.createElement("p",null,this.state.kitas.adresse),r.a.createElement("h3",null,A.postcode[e],":"),r.a.createElement("p",null,this.state.kitas.postleitzahl),r.a.createElement("h3",null,A.city[e]),r.a.createElement("p",null,this.state.kitas.stadt),r.a.createElement("h3",null,A.phone[e]),r.a.createElement("p",null,r.a.createElement("a",{href:"tel:"+this.state.kitas.telefon},this.state.kitas.telefon)),r.a.createElement("h3",null,A.email[e]),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:"+this.state.kitas.email},this.state.kitas.email)),r.a.createElement("button",{onClick:this.deleteKita},"delete kita"),r.a.createElement(p.b,{to:"/discover"},r.a.createElement("button",null,A.return[e]))):r.a.createElement("div",{className:"detail-container"},r.a.createElement("img",{height:"200px",width:"200px",src:"/image/kitaimage.png",alt:""}),r.a.createElement("h1",null,this.state.kitas.name),r.a.createElement("h3",null,A.address[e]),r.a.createElement("p",null,this.state.kitas.adresse),r.a.createElement("h3",null,A.postcode[e],":"),r.a.createElement("p",null,this.state.kitas.postleitzahl),r.a.createElement("h3",null,A.city[e]),r.a.createElement("p",null,this.state.kitas.stadt),r.a.createElement("h3",null,A.phone[e]),r.a.createElement("p",null,r.a.createElement("a",{href:"tel:"+this.state.kitas.telefon},this.state.kitas.telefon)),r.a.createElement("h3",null,A.email[e]),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:"+this.state.kitas.email},this.state.kitas.email)),r.a.createElement(p.b,{to:"/discover"},r.a.createElement("button",null,A.return[e]))):r.a.createElement("h1",null,"LOADING")}}]),t}(n.Component),M=a(25),P={position:"absolute",top:0,left:0,padding:"10px"},T=["-260-100","100-200","200-400","400-600","600-800","800-1000","1000-1500","1500-2000","2000-2500","2500-4509"],D=["#daf5f4","#b5ecec","#89ecda","#40e0d0","#3acabb","#2d9d92","#007777","#005555","#003333","#000a0a"],W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).drawLegends=function(){return T.map((function(e,t){var a=D[t];return r.a.createElement("div",{style:{backgroundColor:"white",display:"flex",justifyContent:"space-between",width:120}},r.a.createElement("span",{className:"legend-key",style:{display:"inline-block",width:"25px",backgroundColor:a}}),r.a.createElement("span",null,e))}))},a.state={viewport:{latitude:53.57532,longitude:10.01534,zoom:9.5,bearing:0,pitch:0,width:1e3,height:800}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.viewport,a=localStorage.getItem("lang");return r.a.createElement(E.b,Object.assign({},t,{mapStyle:"mapbox://styles/akup21/ck7dbfd500pvk1ikikrq0r7eo",mapboxApiAccessToken:"pk.eyJ1IjoiYWt1cDIxIiwiYSI6ImNrNzd0bzJ2cTA5MWgzbG55Z3oxeGEwcXEifQ._STj0U9zQNrv2I1Stwicig",onViewportChange:function(t){return e.setState({viewport:t})}}),r.a.createElement("div",{className:"nav",style:P},r.a.createElement(E.a,null),r.a.createElement("div",null,r.a.createElement("div",{id:"map"}),r.a.createElement("div",{class:"map-overlay",id:"features",style:{display:"inline-block",width:200,height:150,backgroundColor:"white",border:20}},r.a.createElement("h2",null,"Hamburg ",M.kitas[a]),r.a.createElement("div",{id:"pd"},r.a.createElement("p",null,M.move[a]))),r.a.createElement("div",{class:"map-overlay",id:"legend"},this.drawLegends()))))}}]),t}(n.Component),U={position:"absolute",top:0,left:0,padding:"10px",width:30},B=["-423-0","0-100","100-200","200-300","300-400","400-500","500-600","600-700","700-800","900-1109"],J=["#daf5f4","#b5ecec","#89ecda","#40e0d0","#3acabb","#2d9d92","#007777","#005555","#003333","#000a0a"],H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onloadMap=function(e){for(var t=0;t<B.length;t++){var a=B[t],n=J[t],r=document.createElement("div"),l=document.createElement("span");l.className="legend-key",l.style.backgroundColor=n;var o=document.createElement("span");o.innerHTML=a,r.appendChild(l),r.appendChild(o),(void 0).appendChild(r)}},a.drawLegends=function(){return B.map((function(e,t){var a=J[t];return r.a.createElement("div",{style:{backgroundColor:"white",display:"flex",justifyContent:"space-between",width:100}},r.a.createElement("span",{className:"legend-key",style:{display:"inline-block",width:"20px",backgroundColor:a}}),r.a.createElement("span",null,e))}))},a.state={viewport:{latitude:52.52008,longitude:13.40495,zoom:9.5,bearing:0,pitch:0,width:1e3,height:800}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.viewport,a=localStorage.getItem("lang");return r.a.createElement(E.b,Object.assign({},t,{mapStyle:"mapbox://styles/akup21/ck7an89si3ifj1iumt6579c0z",mapboxApiAccessToken:"pk.eyJ1IjoiYWt1cDIxIiwiYSI6ImNrNzd0bzJ2cTA5MWgzbG55Z3oxeGEwcXEifQ._STj0U9zQNrv2I1Stwicig",onViewportChange:function(t){return e.setState({viewport:t})}}),r.a.createElement("div",{className:"nav",style:U},r.a.createElement(E.a,null),r.a.createElement("div",null,r.a.createElement("div",{id:"map"}),r.a.createElement("div",{class:"map-overlay",id:"features",style:{display:"inline-block",width:150,height:100,backgroundColor:"white",border:20}},r.a.createElement("div",{id:"pd"},r.a.createElement("p",null,M.move[a]))),r.a.createElement("div",{class:"map-overlay",id:"legend"},this.drawLegends()))))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={displayBerlin:!0},a.handlechangeMap=function(e){e.preventDefault(),a.setState({displayBerlin:!a.state.displayBerlin})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handlechangeMap},this.state.displayBerlin?"Hamburg":"Berlin"),this.state.displayBerlin?r.a.createElement(H,null):r.a.createElement(W,null))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",district:"select",address:"",postcode:"",phoneNumber:"",email:"",spots:"",spotsforunderthree:"",spotsforoverthree:"",redirect:!1},a.setFormState=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.addNewKita=function(e){e.preventDefault(),f.a.post("/api/addkita",{name:a.state.name,district:a.state.district,address:a.state.address,postcode:a.state.postcode,phoneNumber:a.state.phoneNumber,email:a.state.email,spots:a.state.spots,spotsforunderthree:a.state.spotsforunderthree,spotsforoverthree:a.state.spotsforoverthree}).then((function(e){a.props.history.push("/discover"),console.log("this is response",e)})).catch((function(e){a.setState({message:e.response.data.message})}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(h.a,{to:"/discover"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Add a kita"),r.a.createElement("label",{htmlFor:"name"},"name:"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"district"},"District:"),r.a.createElement("select",{name:"district",type:"select",value:this.state.district,onChange:this.setFormState},r.a.createElement("option",{value:"--"},"select"),r.a.createElement("option",{value:"Charlottenburg-Wilmersdorf"},"Charlottenburg-Wilmersdorf"),r.a.createElement("option",{value:"Friedrichshain-Kreuzberg"},"Friedrichshain-Kreuzberg"),r.a.createElement("option",{value:"Lichtenberg"},"Lichtenberg"),r.a.createElement("option",{value:"Marzahn-Hellersdorf"},"Marzahn-Hellersdorf"),r.a.createElement("option",{value:"Mitte"},"Mitte"),r.a.createElement("option",{value:"Neukoelln"},"Neukoelln"),r.a.createElement("option",{value:"Pankow"},"Pankow"),r.a.createElement("option",{value:"Reinickendorf"},"Reinickendorf"),r.a.createElement("option",{value:"Spandau"},"Spandau"),r.a.createElement("option",{value:"Steglitz-Zehlendorf"},"Steglitz-Zehlendorf"),r.a.createElement("option",{value:"Tempelhof-Schoeneberg"},"Tempelhof-Schoeneberg"),r.a.createElement("option",{value:"Treptow-Koepenick"},"Treptow-Koepenick")),r.a.createElement("label",{htmlFor:"address"},"address:"),r.a.createElement("input",{type:"text",name:"address",value:this.state.address,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"postcode"},"postcode"),r.a.createElement("input",{type:"text",name:"postcode",value:this.state.postcode,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"phoneNumber"},"phone number:"),r.a.createElement("input",{type:"text",name:"phoneNumber",value:this.state.phoneNumber,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"email"},"email:"),r.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"spots"},"total spots:"),r.a.createElement("input",{type:"number",name:"spots",value:this.state.spots,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"spotsforunderthree"},"spots for under three:"),r.a.createElement("input",{type:"number",name:"spotsforunderthree",value:this.state.spotsforunderthree,onChange:this.setFormState}),r.a.createElement("label",{htmlFor:"spotsforoverthree"},"spots for over three"),r.a.createElement("input",{type:"number",name:"spotsforoverthree",value:this.state.spotsforoverthree,onChange:this.setFormState}),r.a.createElement("button",{type:"submit",onClick:this.addNewKita},"submit"),this.state.message&&r.a.createElement("p",null,this.state.message))}}]),t}(n.Component),Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user},a.setUser=function(e){a.setState({user:e})},a.updatePage=function(){a.forceUpdate()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(y,{setUser:this.setUser,user:this.state.user,updatePage:this.updatePage}),r.a.createElement(h.b,{exact:!0,path:"/",component:g}),r.a.createElement(h.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(O,{history:t.history,user:e.state.user,setUser:e.setUser})}}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(C,{history:t.history,setUser:e.setUser})}}),r.a.createElement(h.b,{exact:!0,path:"/userportal",render:function(t){return r.a.createElement(x,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(h.b,{exact:!0,path:"/map",component:R}),r.a.createElement(h.b,{exact:!0,path:"/discover",render:function(t){return r.a.createElement(I,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(h.b,{exact:!0,path:"/discover/hamburg",component:K}),r.a.createElement(h.b,{exact:!0,path:"/discover/:id",render:function(t){return r.a.createElement(L,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(h.b,{exact:!0,path:"/addkita",component:_}),r.a.createElement(F,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));localStorage.getItem("lang")||localStorage.setItem("lang","de"),f.a.get("/api/auth/loggedin").then((function(e){o.a.render(r.a.createElement(p.a,null,r.a.createElement(Z,{user:e.data})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.c9957fe1.chunk.js.map