"use strict";(self.webpackChunkmeridian_design=self.webpackChunkmeridian_design||[]).push([[195],{931:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(7462),r=n(7294),i=n(512),l=n(7961),s=n(9960),o=n(2263),c=n(4996),m={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i"},u=["btn--primary--solid"],d=["btn--medium","btn--large"],p=function(e){var t=e.children,n=e.type,a=e.buttonStyle,i=e.buttonSize,l=u.includes(a)?a:u[0],s=d.includes(i)?i:d[0];return r.createElement("button",{className:"btn "+l+" "+s,type:n},t)},g=[{title:"Design Principles",imageUrl:"/img/inclusive.png",description:r.createElement(r.Fragment,null,r.createElement("p",{className:"feature__text"},"Build products that enable anyone to be successful using them, no matter what language they speak, device they use, or disabilities they may have."),r.createElement(s.Z,{to:"/docs/design-principles"},r.createElement(p,{type:"button",buttonStyle:"btn--primary--solid",buttonSize:"btn--medium"},"Discover")))},{title:"Design Philosophy",imageUrl:"/img/polish.png",description:r.createElement(r.Fragment,null,r.createElement("p",{className:"feature__text"},"Empathize with people to understand their motivations and goals. Use that knowledge to design solutions that enable them to accomplish their tasks."),r.createElement(s.Z,{to:"/docs/design-philosophy"},r.createElement(p,{type:"button",buttonStyle:"btn--primary--solid",buttonSize:"btn--medium"},"Learn")))},{title:r.createElement(r.Fragment,null,"Design Language"),imageUrl:"/img/app-icons.png",description:r.createElement(r.Fragment,null,r.createElement("p",{className:"feature__text"},"Ensure every product we produce is recognizable to customers as being a VertiGIS product by using familiar patterns, interactions and iconography across products."),r.createElement(s.Z,{to:"/docs/design-language"},r.createElement(p,{type:"button",buttonStyle:"btn--primary--solid",buttonSize:"btn--medium"},"Explore")))}];function b(e){var t=e.imageUrl,n=e.title,a=e.description,l=e.button,s=(0,c.Z)(t);return r.createElement("div",{className:(0,i.Z)("col col--4",m.feature)},s&&r.createElement("div",{className:"text--center"},r.createElement("img",{className:m.featureImage,src:s,alt:n})),r.createElement("h3",null,n),r.createElement("div",{className:"feature__description"},a),r.createElement("div",{className:m.buttons},l))}var h=function(){var e=(0,o.Z)().siteConfig,t=void 0===e?{}:e;return r.createElement(l.Z,{title:""+t.title,description:"VertGIS Meridian Design System"},r.createElement("header",{className:(0,i.Z)("hero hero--primary",m.heroBanner),style:{backgroundImage:'url("'+(0,c.Z)("img/banner.jpg")+'")'}},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},t.title),r.createElement("p",{className:"hero__subtitle"},t.tagline),r.createElement("div",{className:m.buttons},r.createElement(s.Z,{className:(0,i.Z)("button button button--secondary button--lg"),to:"/docs/design-principles"},"Get Started")))),r.createElement("main",null,g&&g.length&&r.createElement("section",{className:m.features},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},g.map((function(e,t){return r.createElement(b,(0,a.Z)({key:t},e))})))))))}},512:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}}}]);