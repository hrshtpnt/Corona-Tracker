(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{106:function(e,t,a){e.exports={container:"Charts_container__rnzyX"}},112:function(e,t,a){e.exports=a.p+"static/media/sort-black.f94dfe67.svg"},113:function(e,t,a){e.exports={container:"app_container__2JKVN"}},114:function(e,t,a){e.exports=a.p+"static/media/corona.d7265326.png"},121:function(e,t,a){e.exports=a(242)},126:function(e,t,a){},242:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=(a(126),a(9)),l=a.n(i),s=a(12),u=a(103),d=a(104),m=a(116),p=a(115),f=a(24),h=a(75),v=a(45),b=a.n(v),g="https://covid19.mathdro.id/api",E=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n,r,c,o,i,s,u=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:"",a=g,""!==t&&(a="".concat(g,"/countries/").concat(t)),e.prev=3,e.next=6,b.a.get(a);case 6:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,i=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:i,lastUpdate:s});case 15:e.prev=15,e.t0=e.catch(3),console.log("API fetch error");case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(g,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,reportDate:new Date(e.reportDate).toDateString().split("2020").join("")}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log("API fetch error - fetch daily data");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(g,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log("fetch countries failed with "+e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://sharadcodes.github.io/c-data/data/world.json");case 3:return t=e.sent,console.log(t.data),a=t.data.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{casesSummary:0!==e.todayCases?"".concat(e.cases,"+").concat(e.todayCases," Today"):e.cases,deathSummary:0!==e.todayDeaths?"".concat(e.deaths,"+").concat(e.todayDeaths," Today"):e.deaths})})),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log("table API failed with "+e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),C=a(74),x=a(106),j=a.n(x),_=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,i=e.country,u=Object(n.useState)([]),d=Object(f.a)(u,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,y();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=m.length?r.a.createElement(C.b,{data:{labels:m.map((function(e){return e.reportDate})),datasets:[{data:m.map((function(e){return e.deaths})),label:"Infected",borderColor:"#FF6550",fill:!0},{data:m.map((function(e){return e.confirmed})),label:"Recovered",borderColor:"cornflowerblue",fill:!0}]}}):null,v=a?r.a.createElement(C.a,{data:{labels:["Confirmed","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(i)}}}):null;return r.a.createElement("div",{className:j.a.container},i?v:h)},k=a(278),D=a(295),S=a(111),N=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(f.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,w();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"row"},r.a.createElement(k.a,null,r.a.createElement(D.a,{shrink:!0,id:"demo-simple-select-placeholder-label-label"},"Country"),r.a.createElement(S.a,{onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))},P=a(282),W=a(283),M=a(284),T=a(285),B=a(25),I=a.n(B),A=a(61),R=a.n(A),z=a(62),V=a.n(z),J=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return void 0===a?r.a.createElement("p",null,"Loading ..."):r.a.createElement("div",{className:I.a.container},r.a.createElement(P.a,{container:!0,spacing:3,justfy:"center"},r.a.createElement(P.a,{item:!0,component:W.a,xs:12,md:3,className:R()(I.a.card,I.a.infected)},r.a.createElement(M.a,null,r.a.createElement(T.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(T.a,{variant:"h5",component:"h2"},r.a.createElement(V.a,{start:0,end:a.value,separator:",",duration:2})),r.a.createElement(T.a,{variant:"h6",component:"h2"},new Date(o).toDateString()),r.a.createElement(T.a,{variant:"body2",component:"p"},"Number of active cases of COVID-19"))),r.a.createElement(P.a,{item:!0,component:W.a,xs:12,md:3,className:R()(I.a.card,I.a.recovered)},r.a.createElement(M.a,null,r.a.createElement(T.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(T.a,{variant:"h5",component:"h2"},r.a.createElement(V.a,{start:0,end:n.value,separator:",",duration:2})),r.a.createElement(T.a,{variant:"h6",component:"h2"},new Date(o).toDateString()),r.a.createElement(T.a,{variant:"body2",component:"p"},"Number of recoveries from COVID-19"))),r.a.createElement(P.a,{item:!0,component:W.a,xs:12,md:3,className:R()(I.a.card,I.a.deaths)},r.a.createElement(M.a,null,r.a.createElement(T.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(T.a,{variant:"h5",component:"h2"},r.a.createElement(V.a,{start:0,end:c.value,separator:",",duration:2})),r.a.createElement(T.a,{variant:"h6",component:"h2"},new Date(o).toDateString()),r.a.createElement(T.a,{variant:"body2",component:"p"},"Number of deaths from COVID-19")))))},F=a(63),U=a(286),G=a(287),H=a(244),X=a(288),Y=a(289),q=a(290),K=a(291),L=a(292),Q=a(293),Z=a(294),$=a(26),ee=a.n($),te=a(112),ae=a.n(te),ne=[{id:"country",label:"Country",minWidth:50,align:"center"},{id:"casesSummary",label:"Total Cases",minWidth:50,align:"center"},{id:"deathSummary",label:"Deaths",minWidth:50,align:"center"},{id:"recovered",label:"Recovered",minWidth:50,align:"center"},{id:"active",label:"Active",minWidth:50,align:"center"},{id:"critical",label:"Critical",minWidth:50,align:"center"},{id:"tests",label:"Tests",minWidth:50,align:"center"},{id:"casesPerOneMillion",label:"Cases/Million",minWidth:50,align:"center"},{id:"deathsPerOneMillion",label:"Deaths/Million",minWidth:50,align:"center"},{id:"recoveredPerOneMillion",label:"Recovered/Million",minWidth:50,align:"center"},{id:"activePerOneMillion",label:"Active/Million",minWidth:50,align:"center"},{id:"criticalPerOneMillion",label:"Critical/Million",minWidth:50,align:"center"},{id:"testsPerOneMillion",label:"Tests/Million",minWidth:50,align:"center"}],re=Object(U.a)({root:{width:"100%"},container:{maxHeight:800}});var ce=function(){var e=re(),t=Object(n.useState)(0),a=Object(f.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(100),u=Object(f.a)(i,2),d=u[0],m=u[1],p=Object(n.useState)([]),h=Object(f.a)(p,2),v=h[0],b=h[1],g=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b,e.next=3,O();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){g()}),[]),r.a.createElement("div",{className:ee.a.container},r.a.createElement("div",{className:ee.a.root},r.a.createElement("h5",{className:ee.a.sortText},r.a.createElement("img",{src:ae.a,alt:"sort"}),"Sort"),r.a.createElement(G.a,{size:"small",variant:"outlined",color:"secondary",className:ee.a.rootButton,onClick:function(){b(Object(F.a)(v).sort((function(e,t){return t.cases-e.cases})))}},"Cases"),r.a.createElement(G.a,{size:"small",variant:"outlined",color:"secondary",className:ee.a.rootButton,onClick:function(){b(Object(F.a)(v).sort((function(e,t){return t.deaths-e.deaths})))}},"Deaths"),r.a.createElement(G.a,{size:"small",variant:"outlined",color:"primary",className:ee.a.rootButton,onClick:function(){b(Object(F.a)(v).sort((function(e,t){return t.recovered-e.recovered})))}},"Recovered"),r.a.createElement(G.a,{size:"small",variant:"outlined",color:"primary",className:ee.a.rootButton,onClick:function(){g()}},"Clear Sort")),r.a.createElement("div",null,r.a.createElement(H.a,{className:e.root},r.a.createElement(X.a,{className:e.container},r.a.createElement(Y.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(q.a,null,r.a.createElement(K.a,null,ne.map((function(e){return r.a.createElement(L.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(Q.a,null,v.slice(c*d,c*d+d).map((function(e){return r.a.createElement(K.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},ne.map((function(t){var a=e[t.id];return r.a.createElement(L.a,{key:t.id,align:t.align},t.format&&"number"===typeof a?t.format(a):a)})))}))))),r.a.createElement(Z.a,{rowsPerPageOptions:[100,150,300],component:"div",count:v.length,rowsPerPage:d,page:c,onChangePage:function(e,t){o(t)},onChangeRowsPerPage:function(e){m(+e.target.value),o(0)}}))))},oe=a(113),ie=a.n(oe),le=a(114),se=a.n(le),ue=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:ie.a.container},r.a.createElement("img",{src:se.a,alt:"Corona"}),r.a.createElement(J,{data:t}),r.a.createElement(N,{handleCountryChange:this.handleCountryChange}),r.a.createElement(_,{data:t,country:a}),r.a.createElement("h3",null,"Global Statistics"),r.a.createElement(ce,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(241);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,a){e.exports={container:"Cards_container__2XqFC",card:"Cards_card__1ak5A",infected:"Cards_infected__bZ078",recovered:"Cards_recovered__1wTBM",deaths:"Cards_deaths__1YvrA"}},26:function(e,t,a){e.exports={container:"worldTable_container__2oPiO",root:"worldTable_root__2TtJs",rootButton:"worldTable_rootButton__272uV",sortText:"worldTable_sortText__YN-QW"}}},[[121,1,2]]]);
//# sourceMappingURL=main.082104c4.chunk.js.map