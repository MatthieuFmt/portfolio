(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{40:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(20),r=s.n(n),i=(s(40),s(3)),j=s(1),l=Object(c.createContext)(),o=function(e){var t=Object(c.useState)(0),s=Object(i.a)(t,2),a=s[0],n=s[1];return Object(j.jsx)(l.Provider,{value:{current:a,changeCurrent:function(e){n(e)}},children:e.children})};function b(){var e=Object(c.useContext)(l).current;return Object(j.jsxs)("nav",{children:[Object(j.jsx)("a",{href:"#home",className:1===e?"nav-active":"nav-link",children:"Accueil"}),Object(j.jsx)("a",{href:"#presentation",className:2===e?"nav-active":"nav-link",children:"Pr\xe9sentation"}),Object(j.jsx)("a",{href:"#projects",className:3===e?"nav-active":"nav-link",children:"Projets"}),Object(j.jsx)("a",{href:"#form",className:4===e?"nav-active":"nav-link",children:"Contact"}),Object(j.jsxs)("a",{href:"/portfolio/cv.pdf",download:!0,className:"download",children:["CV ",Object(j.jsx)("i",{className:"fas fa-file-download"})]})]})}var d=s(6),u=s(10),m=s(33);function O(){var e=Object(c.useContext)(l).changeCurrent,t=["Redux","GitHub","React-springs","Bootstrap","Type-Script","VS-Code","npm"],s=Object(u.useTrail)(t.length,{from:{opacity:0},to:{opacity:1}});return Object(j.jsxs)("div",{id:"home",className:"container container-home",children:[Object(j.jsx)(d.a,{bottomOffset:"90%",onEnter:function(){e(1)}}),Object(j.jsxs)("div",{className:"content-home",children:[Object(j.jsxs)("div",{className:"name",children:[Object(j.jsx)("h2",{children:"Matthieu FR\xc9MONT"}),Object(j.jsx)("h1",{children:"D\xe9veloppeur React.js/Next.js"})]}),Object(j.jsx)("div",{className:"skills",children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("h3",{children:"HTML"}),Object(j.jsx)("div",{className:"level html"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("h3",{children:"CSS"}),Object(j.jsx)("div",{className:"level css"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("h3",{children:"Sass"}),Object(j.jsx)("div",{className:"level sass"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("h3",{children:"Javascript"}),Object(j.jsx)("div",{className:"level js"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("h3",{children:"React.js"}),Object(j.jsx)("div",{className:"level react"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("h3",{children:"Next.js"}),Object(j.jsx)("div",{className:"level next"})]})]})}),Object(j.jsx)("ul",{className:"secondary-skills",children:s.map((function(e,s){return Object(j.jsx)(u.animated.li,{style:e,className:"card-skill",children:t[s]},Object(m.v4)())}))})]}),Object(j.jsx)(d.a,{bottomOffset:"70%",onEnter:function(){e(1)}})]})}function h(){var e=Object(c.useContext)(l).changeCurrent;return Object(j.jsxs)("div",{id:"presentation",className:"container container-presentation",children:[Object(j.jsx)(d.a,{bottomOffset:"70%",onEnter:function(){e(2)}}),Object(j.jsxs)("div",{className:"txt",children:[Object(j.jsx)("p",{children:"Passionn\xe9 depuis toujours par le monde de l'informatique et du web, j'ai d\xe9cid\xe9 de faire une reconversion professionnelle et de me former au m\xe9tier de d\xe9veloppeur web \xe0 l'\xe9cole WebForce3 de Bordeaux."}),Object(j.jsx)("p",{children:"Apr\xe8s avoir obtenu mon certificat de d\xe9veloppeur web, je me suis sp\xe9cialis\xe9 sur le langage JavaScript et en particulier sur les frameworks React.js et Next.js et certaines de leurs librairies."}),Object(j.jsxs)("p",{children:["Je continue de me perfectionner sur ces frameworks en cr\xe9ant r\xe9guli\xe8rement des nouveaux projets que je poste sur mon"," ",Object(j.jsx)("a",{className:"link",href:"https://github.com/MatthieuFmt",target:"_blank",children:"GitHub"}),"."]}),Object(j.jsx)("p",{children:"En voici quelques un :"})]})]})}var x=s.p+"static/media/projet1.50291b41.png",p=s.p+"static/media/projet2.6c8d0463.png",f=s.p+"static/media/projet3.1da62647.png",v=s.p+"static/media/projet4.256a86e3.png",g=s.p+"static/media/projet5.f0ff0cb9.png";function N(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!1),r=Object(i.a)(n,2),o=r[0],b=r[1],m=Object(c.useState)(!1),O=Object(i.a)(m,2),h=O[0],N=O[1],S=Object(c.useState)(!1),y=Object(i.a)(S,2),C=y[0],k=y[1],w=Object(c.useState)(!1),q=Object(i.a)(w,2),E=q[0],V=q[1],_=Object(u.useSpring)({opacity:s?1:0,transform:s?"translateY(0)":"translateY(50%)"}),A=Object(u.useSpring)({opacity:o?1:0,transform:o?"translateY(0)":"translateY(50%)"}),R=Object(u.useSpring)({opacity:h?1:0,transform:h?"translateY(0)":"translateY(50%)"}),F=Object(u.useSpring)({opacity:C?1:0,transform:C?"translateY(0)":"translateY(50%)"}),Y=Object(u.useSpring)({opacity:E?1:0,transform:E?"translateY(0)":"translateY(50%)"}),M=Object(c.useContext)(l).changeCurrent;return Object(j.jsxs)("div",{id:"projects",className:"container container-projects",children:[Object(j.jsx)(d.a,{bottomOffset:"80%",onEnter:function(){M(3)}}),Object(j.jsx)(d.a,{bottomOffset:"20%",onEnter:function(){E||V(!0)}}),Object(j.jsx)(u.animated.div,{style:Y,className:"project",children:Object(j.jsxs)("a",{href:"https://matthieufmt.github.io/hiit/",target:"_blank",children:[Object(j.jsxs)("div",{className:"project-img",children:[Object(j.jsx)("img",{src:g,alt:"screenshot du projet H.I.I.T"}),Object(j.jsx)("div",{className:"show",children:"Voir le projet sur GitHub"})]}),Object(j.jsx)("div",{className:"project-infos",children:Object(j.jsxs)("p",{children:["Cr\xe9ation d'une application qui chronom\xe8tre les s\xe9ances de cross fit ",Object(j.jsx)("br",{}),"avec l'utilisation de ",Object(j.jsx)("em",{children:"Redux"}),", ",Object(j.jsx)("em",{children:"useEffect "}),"pour utiliser la m\xe9thode ",Object(j.jsx)("em",{children:"setInterval()"})," ",Object(j.jsx)("br",{}),"et la possibilit\xe9 de param\xe9trer sa s\xe9ance."]})})]})}),Object(j.jsx)(d.a,{bottomOffset:"25%",onEnter:function(){C||k(!0)}}),Object(j.jsx)(u.animated.div,{style:F,className:"project",children:Object(j.jsxs)("a",{href:"https://e-commerce-nine-swart.vercel.app/",target:"_blank",children:[Object(j.jsxs)("div",{className:"project-img",children:[Object(j.jsx)("img",{src:v,alt:"screenshot du projet todo list"}),Object(j.jsx)("div",{className:"show",children:"Voir le projet sur Vercel"})]}),Object(j.jsx)("div",{className:"project-infos",children:Object(j.jsxs)("p",{children:["Cr\xe9ation de la partie front-end d'un site e-commerce avec"," ",Object(j.jsx)("em",{children:"Next.js"}),". ",Object(j.jsx)("br",{}),"En utilisant ",Object(j.jsx)("em",{children:"getStaticProps"})," pour faire appel \xe0 un tableau json pour afficher les produits en vente,",Object(j.jsx)("br",{}),"et ",Object(j.jsx)("em",{children:"getStaticPaths"})," pour g\xe9n\xe9r\xe9 une page personalis\xe9 pour chacun d'entre eux. ",Object(j.jsx)("br",{}),"Ainsi que de l'am\xe9lioration des images gr\xe2ce \xe0 ",Object(j.jsx)("em",{children:"next/image"}),"."]})})]})}),Object(j.jsx)(d.a,{bottomOffset:"25%",onEnter:function(){s||a(!0)}}),Object(j.jsx)(u.animated.div,{style:_,className:"project",children:Object(j.jsxs)("a",{href:"https://matthieufmt.github.io/Clone-Netflix/",target:"_blank",children:[Object(j.jsxs)("div",{className:"project-img",children:[Object(j.jsx)("img",{src:x,alt:"screenshot du projet netflix"}),Object(j.jsx)("div",{className:"show",children:"Voir le projet sur GitHub"})]}),Object(j.jsx)("div",{className:"project-infos",children:Object(j.jsxs)("p",{children:["Reproduction du site NETFLIX responsive avec ",Object(j.jsx)("em",{children:"Sass"}),"."]})})]})}),Object(j.jsx)(d.a,{bottomOffset:"25%",onEnter:function(){o||b(!0)}}),Object(j.jsx)(u.animated.div,{style:A,className:"project",children:Object(j.jsxs)("a",{href:"https://matthieufmt.github.io/API-Meteo/",target:"_blank",children:[Object(j.jsxs)("div",{className:"project-img",children:[Object(j.jsx)("img",{src:p,alt:"screenshot du projet m\xe9t\xe9o"}),Object(j.jsx)("div",{className:"show",children:"Voir le projet sur GitHub"})]}),Object(j.jsx)("div",{className:"project-infos",children:Object(j.jsxs)("p",{children:["Cr\xe9ation d'une application m\xe9t\xe9o avec l'",Object(j.jsx)("em",{children:"api open weather"}),Object(j.jsx)("br",{}),"qui utilise la position que renvoi le navigateur,",Object(j.jsx)("br",{}),"et l'utilisation de svg anim\xe9es qui changent dynamiquement."]})})]})}),Object(j.jsx)(d.a,{bottomOffset:"25%",onEnter:function(){h||N(!0)}}),Object(j.jsx)(u.animated.div,{style:R,className:"project",children:Object(j.jsxs)("a",{href:"https://matthieufmt.github.io/React-Blog/",target:"_blank",children:[Object(j.jsxs)("div",{className:"project-img",children:[Object(j.jsx)("img",{src:f,alt:"screenshot du projet blog"}),Object(j.jsx)("div",{className:"show",children:"Voir le projet sur GitHub"})]}),Object(j.jsx)("div",{className:"project-infos",children:Object(j.jsxs)("p",{children:["Cr\xe9ation d'un blog avec",Object(j.jsx)("em",{children:" Redux "}),"et",Object(j.jsx)("em",{children:" react-router-dom "}),",",Object(j.jsx)("br",{}),"avec l'api ",Object(j.jsx)("em",{children:"JSONPlaceholder"})," qui g\xe9n\xe8re des articles en lorem ipsum, ",Object(j.jsx)("br",{}),"ainsi que d'un formulaire qui permet de cr\xe9er de nouveaux articles."]})})]})}),Object(j.jsx)(d.a,{bottomOffset:"80%",onEnter:function(){M(4)},onLeave:function(){M(3)}})]})}var S=s(34);function y(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),r=Object(i.a)(n,2),o=r[0],b=r[1],u=Object(c.useState)(""),m=Object(i.a)(u,2),O=m[0],h=m[1],x=Object(c.useState)(""),p=Object(i.a)(x,2),f=p[0],v=p[1],g=document.querySelector(".form-message"),N=function(){return!!s.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)};var y=Object(c.useContext)(l).changeCurrent;return Object(j.jsxs)("div",{className:"container container-form",children:[Object(j.jsxs)("form",{id:"form",onSubmit:function(e){e.preventDefault(),o&&N()&&O?S.a.sendForm("service_fu48bdq","template_tqyg10g",e.target,"user_tA0NlVdWK5QvT1mzo2A58").then((function(e){"OK"===e.text&&(v("Le message a bien \xe9t\xe9 envoy\xe9."),a(""),b(""),h(""))}),(function(e){g.style.color="#e20000",v("Une erreur s'est produite, veuillez r\xe9essayer.")})):N()?v("Veuillez remplir tous les champs."):v("Veuillez entrer un email valide."),setTimeout((function(){v("")}),4e3)},children:[Object(j.jsx)("label",{htmlFor:"mail",children:"Votre email"}),Object(j.jsx)("input",{type:"email",id:"mail",name:"email",placeholder:"adresse@mail.com",onChange:function(e){return a(e.target.value)},value:s}),Object(j.jsx)("label",{htmlFor:"name",children:"Votre nom"}),Object(j.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Nom, Pr\xe9nom",onChange:function(e){return b(e.target.value)},value:o}),Object(j.jsx)("label",{htmlFor:"message",children:"Votre message"}),Object(j.jsx)("textarea",{id:"message",name:"message",cols:"30",rows:"10",onChange:function(e){return h(e.target.value)},value:O}),Object(j.jsx)("button",{type:"submit",children:"envoyer"}),""!==f&&Object(j.jsx)("div",{className:"form-message",children:f})]}),Object(j.jsx)(d.a,{bottomOffset:"10%",onEnter:function(){y(4)},onLeave:function(){y(3)}})]})}function C(){return Object(j.jsxs)("footer",{children:[Object(j.jsxs)("div",{className:"icones",children:[Object(j.jsx)("a",{href:"https://www.linkedin.com/in/matthieu-fr%C3%A9mont-b3b021211/",target:"_blank",children:Object(j.jsx)("i",{className:"fab fa-linkedin"})}),Object(j.jsx)("a",{href:"https://github.com/MatthieuFmt",target:"_blank",children:Object(j.jsx)("i",{className:"fab fa-github-square"})})]}),Object(j.jsx)("div",{className:"copyright",children:"Matthieu FR\xc9MONT - 2021"})]})}var k=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(O,{}),Object(j.jsxs)("main",{children:[Object(j.jsx)(h,{}),Object(j.jsx)(N,{}),Object(j.jsx)(y,{})]}),Object(j.jsx)(C,{})]})})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.45ead7c4.chunk.js.map