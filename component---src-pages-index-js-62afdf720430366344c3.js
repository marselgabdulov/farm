(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,a,t){"use strict";t.r(a);t(73);var r=t(7),n=t.n(r),c=t(0),o=t.n(c),i=t(160),s=t.n(i),l=(t(161),t(143)),m=t(147),u=(t(162),t(163),function(e){return o.a.createElement("div",{className:"product-card"},o.a.createElement("div",{className:"product-card__icon"},o.a.createElement("img",{src:e.icon,alt:""})),o.a.createElement("h3",{className:"product-card__title"},e.productTitle),o.a.createElement("div",{className:"product-card__description"},e.description.map(function(e,a){return o.a.createElement("span",{className:"product__position",key:a},e.name," - ",e.price," ₽ за ",e.measure)})))}),d=(t(164),function(e){return o.a.createElement("a",{className:"instagram-card",title:"Instagram",href:e.hreference,target:"_blank",rel:"noopener noreferrer",style:{backgroundImage:"url("+e.imageUrl+")"}},"1")}),p=(t(165),function(){return o.a.createElement("form",{action:"https://formspree.io/marsel.gabdulov@gmail.com",method:"POST",className:"request-form"},o.a.createElement("input",{className:"input-name",type:"text",name:"name",placeholder:"Ваше имя",required:!0}),o.a.createElement("input",{className:"input-email",type:"email",name:"email",placeholder:"Ваш email",required:!0}),o.a.createElement("textarea",{className:"input-comment",type:"text",name:"comment",placeholder:"Ваш комментарий"}),o.a.createElement("input",{type:"submit",value:"Отправить",className:"form-button"}))}),f=[{name:"Мякоть",price:425,measure:"0.5кг"},{name:"Мякоть на косточке",price:375,measure:"0.5кг"},{name:"Рулька",price:200,measure:"1кг"},{name:"Грудинка",price:200,measure:"0.5кг"},{name:"Ребрышки",price:400,measure:"1кг"},{name:"Рагу",price:120,measure:"1кг"}],h=[{name:"Цыпленок корнишон",price:230,measure:"1шт"},{name:"Подрощенный цыпленок",price:330,measure:"1шт"},{name:"Курица для жарки",price:300,measure:"1шт"},{name:"Суповая курица",price:400,measure:"1шт"},{name:"Петух",price:230,measure:"1шт"},{name:"Куриные яйца",price:150,measure:"десяток"}];t(166);t.d(a,"fluidImage",function(){return _}),t.d(a,"pageQuery",function(){return E});var g=function(e){function a(){for(var a,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(a=e.call.apply(e,[this].concat(r))||this).scrollTo=function(e){window.scroll({behavior:"smooth",left:0,top:e.offsetTop-75})},a}n()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.scrollTo(0,0),s.a.init();var e=document.documentElement.offsetWidth;[].forEach.call(document.querySelectorAll("*"),function(a){a.offsetWidth>e&&console.log(a)})},t.render=function(){var e=this,a=[{url:"https://www.instagram.com/angel_bar_grill/?hl=ru",img:this.props.data.farm_instagram.childImageSharp.fluid.src},{url:"https://www.instagram.com/p/Br-JhtlHC59/",img:this.props.data.chicken_instagram.childImageSharp.fluid.src},{url:"https://www.instagram.com/p/BsPx-oonHGk/",img:this.props.data.view_instagram.childImageSharp.fluid.src},{url:"https://www.instagram.com/p/BsNY__mntMs/",img:this.props.data.pig_instagram.childImageSharp.fluid.src}];return o.a.createElement(l.a,null,o.a.createElement(m.a,{title:"Ферма",keywords:["ферма","свинина","курица"]}),o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"header__wrapper","data-aos":"fade","data-aos-delay":"250","data-aos-duration":"1200","data-aos-once":"true"},o.a.createElement("div",{className:"header__logo"},o.a.createElement("button",{className:"header__button",onClick:function(){return e.scrollTo(document.getElementById("intro"))},title:"На главную"},"Позняки")),o.a.createElement("nav",{className:"header__links"},o.a.createElement("button",{className:"header__button",onClick:function(){return e.scrollTo(document.getElementById("about"))},title:"Подробнее"},"О нас"),o.a.createElement("button",{className:"header__button",onClick:function(){return e.scrollTo(document.getElementById("products"))},title:"Наша продукция"},"Продукты"),o.a.createElement("button",{className:"header__button",onClick:function(){return e.scrollTo(document.getElementById("media"))},title:"Соцсети"},"Инстаграм"),o.a.createElement("button",{className:"header__button",onClick:function(){return e.scrollTo(document.getElementById("contacts"))},title:"Связь с нами"},"Контакты")))),o.a.createElement("div",{className:"main"},o.a.createElement("section",{className:"intro",id:"intro",ref:function(a){e.intro=a}},o.a.createElement("div",{className:"intro__image","data-aos":"fade","data-aos-delay":"200","data-aos-duration":"1200","data-aos-once":"true",style:{backgroundImage:"url("+this.props.data.farm.childImageSharp.fluid.src+")"}}),o.a.createElement("div",{className:"intro__text","data-aos":"fade","data-aos-delay":"500","data-aos-duration":"1200","data-aos-once":"true",onClick:function(){return e.scrollTo(document.getElementById("about"))}},o.a.createElement("h1",{className:"intro__title"},"Позняки"),o.a.createElement("span",{className:"intro__subtitle"},"Ферма в Ставропольском крае"))),o.a.createElement("section",{className:"about",id:"about",ref:function(a){e.about=a},"data-aos":"fade","data-aos-delay":"100","data-aos-duration":"1200","data-aos-once":"true"},o.a.createElement("div",{className:"about__wrapper","data-aos":"fade","data-aos-delay":"100","data-aos-duration":"1200","data-aos-once":"true"},o.a.createElement("div",{className:"about__image"},o.a.createElement("img",{src:this.props.data.pig_about.childImageSharp.fluid.src,alt:"pig",onClick:function(){return e.scrollTo(document.getElementById("products"))}})),o.a.createElement("div",{className:"about__text"},o.a.createElement("h2",{className:"about__title"},"О нас"),o.a.createElement("p",null,'"Позняки" – небольшая ферма, предлагающая высококачественную, экологически чистую и ответсвенно выращенную продукцию из свинины, курицы и яиц.'),o.a.createElement("p",null,"Наши животные обитают в условиях, максимально приближенных к природным. Мы не используем антибиотики и гормоны роста, что делает наши продукты гипоаллергенными и безопасными."),o.a.createElement("p",null,"Хотя наша ферма и находится в самом сердце Ставропольского края, мы осуществляем доставку продуктов в столичный регион каждые две недели.")))),o.a.createElement("section",{id:"products",className:"products","data-aos":"fade","data-aos-delay":"100","data-aos-duration":"1200","data-aos-once":"true"},o.a.createElement("div",{className:"products__wrapper"},o.a.createElement("h2",{className:"products__title"},"Наша продукция"),o.a.createElement("div",{className:"products__cards"},o.a.createElement(u,{icon:this.props.data.chickenIcon.childImageSharp.fluid.src,productTitle:"Курица / Яйца",description:h}),o.a.createElement(u,{productTitle:"Свинина",description:f,icon:this.props.data.pigIcon.childImageSharp.fluid.src})))),o.a.createElement("section",{id:"media",className:"media","data-aos":"fade","data-aos-delay":"100","data-aos-duration":"1200","data-aos-once":"true"},o.a.createElement("div",{className:"media__wrapper"},o.a.createElement("h2",{className:"media__title"},"Instagram"),o.a.createElement("span",{className:"media__main-link"},o.a.createElement("a",{href:"https://www.instagram.com/from_the_farm_with_love/?hl=ru",target:"_blank",rel:"noopener noreferrer",title:"@from_the_farm_with_love"},"@from_the_farm_with_love")),o.a.createElement("div",{className:"media__links"},a.map(function(e){return o.a.createElement(d,{hreference:e.url,imageUrl:e.img,key:e.url})})))),o.a.createElement("section",{id:"contacts",className:"contacts","data-aos":"fade","data-aos-delay":"100","data-aos-duration":"1200","data-aos-once":"true",ref:function(a){e.contacts=a}},o.a.createElement("div",{className:"contacts__wrapper"},o.a.createElement("h2",{className:"contacts__title"},"Контакты"),o.a.createElement("div",{className:"contacts__flex"},o.a.createElement("div",{className:"contacts__info"},"Заказывайте доставку продуктов ",o.a.createElement("br",null),"через Whatsapp или Telegram ",o.a.createElement("br",null),"+7 (985) 741-19-91"),o.a.createElement("div",{className:"contacts__form"},o.a.createElement(p,null)))))))},a}(o.a.Component),_="2701097348",E="3564224931";a.default=g},141:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return p});var r=t(0),n=t.n(r),c=t(4),o=t.n(c),i=t(140),s=t.n(i);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return i.withPrefix}),t.d(a,"navigate",function(){return i.navigate}),t.d(a,"push",function(){return i.push}),t.d(a,"replace",function(){return i.replace}),t.d(a,"navigateTo",function(){return i.navigateTo});var l=t(142),m=t.n(l);t.d(a,"PageRenderer",function(){return m.a});var u=t(33);t.d(a,"parsePath",function(){return u.a});var d=n.a.createContext({}),p=function(e){return n.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},142:function(e,a,t){var r;e.exports=(r=t(145))&&r.default||r},143:function(e,a,t){"use strict";var r=t(144),n=t(0),c=t.n(n),o=t(4),i=t.n(o),s=t(141),l=(t(146),function(e){var a=e.children;return c.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,a,c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"footer__wrapper"},c.a.createElement("div",{className:"footer__author"},"Разработано  ",c.a.createElement("a",{href:"https://marselgabdulov.github.io/personal/",target:"_blank",rel:"noopener noreferrer",title:"контакты разработчика"},"MG")),c.a.createElement("div",{className:"footer__copy"},"© ",(new Date).getFullYear(),"  ",c.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))))},data:r})});l.propTypes={children:i.a.node.isRequired},a.a=l},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Позняки. Ферма в Ставропольском крае."}}}}},145:function(e,a,t){"use strict";t.r(a);t(32);var r=t(0),n=t.n(r),c=t(4),o=t.n(c),i=t(54),s=t(2),l=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return n.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=l},146:function(e,a,t){},147:function(e,a,t){"use strict";var r=t(148),n=t(0),c=t.n(n),o=t(4),i=t.n(o),s=t(149),l=t.n(s),m=t(141);function u(e){var a=e.description,t=e.lang,n=e.meta,o=e.keywords,i=e.title;return c.a.createElement(m.StaticQuery,{query:d,render:function(e){var r=a||e.site.siteMetadata.description;return c.a.createElement(l.a,{htmlAttributes:{lang:t},title:i,titleTemplate:""+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:i},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},a.a=u;var d="1025518380"},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Позняки. Ферма в Ставропольском крае.",description:"Мы небольшая ферма. Специализируемся на производстве свинины, курицы и яиц",author:"@MarselGabdulov"}}}}},163:function(e,a,t){},164:function(e,a,t){},165:function(e,a,t){},166:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-62afdf720430366344c3.js.map