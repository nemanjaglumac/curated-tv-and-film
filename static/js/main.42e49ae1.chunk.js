(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),s=a.n(o),l=(a(13),a(15),a(3)),r=a(4),c=a(6),m=a(5),h=a(7),d=(a(17),[{type:"tv_show",title:"The Newsroom",description:"Will McAvoy (Jeff Daniels) hits the nail straight on the head in the opening minutes on HBO's new series 'The Newsroom'. He is asked by a college student a simple question during a campus debate. 'What makes America the greatest country in the world?'. Daniels initially goes the politically correct route then at the last minute goes with a honest, bold, straight forward answer that sums up a lot of the worlds problems that so many are afraid to accept because we all want to believe in our system and that it is our system that works. The evidence that is out there today is to the contrary and he discloses such information in his argument. We used to be the worlds best of the best and now we are just pretending. The first step to solving a problem is to admit there is one.",season:1,episode:1,episode_title:"We Just Decided To",imdb:"http://www.imdb.com/title/tt1870479/",url:"https://www.youtube.com/watch?v=wTjMqda19wk",thumbnail:"https://img.youtube.com/vi/wTjMqda19wk/0.jpg"},{type:"tv_show",title:"Mr.Robot",description:"Elliot Alderson's powerful speech about control and the effects that religion and mindless following create.",season:2,episode:3,episode_title:"eps2.1_k3rnel-pan1c.ksd",imdb:"http://www.imdb.com/title/tt4158110/",url:"https://www.youtube.com/watch?v=AZeLHD-725o",thumbnail:"https://img.youtube.com/vi/AZeLHD-725o/0.jpg"},{type:"tv_show",title:"Silicon Valley",description:"The guys start calculating how most efficiently a mass jerk-off session can be carried out, which eventually also leads to a finding a new solution for Pied Piper's problems.",season:1,episode:8,episode_title:"Optimal Tip-To-Top Efficiency",imdb:"http://www.imdb.com/title/tt2575988/",url:"https://www.youtube.com/watch?v=mMeqEDEfniA",thumbnail:"https://img.youtube.com/vi/mMeqEDEfniA/0.jpg"},{type:"tv_show",title:"Game of Thrones",description:"In Winterfell, Jon Snow, Sansa, Davos and Tormund meet with Ramsay, and Jon Snow proposes a dispute between them instead of sacrificing lives in a battle. Ramsay does not accept and they schedule the battle in the morning. Jon Snow plots a scheme with Davos and Tormund and Sansa warns that Ramsay plays dirty. When both armies are ready to battle, Ramsay brings a surprise.",season:6,episode:9,episode_title:"Battle of the Bastards",imdb:"https://www.imdb.com/title/tt4283088/?ref_=ttep_ep9",url:"https://www.youtube.com/watch?v=m8rURwkvOx0",thumbnail:"https://img.youtube.com/vi/m8rURwkvOx0/0.jpg"},{type:"movie",title:"Oldboy",description:"The corridor fight scene took seventeen takes in three days to perfect, and was one continuous take -- there was no editing of any sort except for the knife that was stabbed in Oh Dae-su's back, which was computer-generated imagery. Though the scene has often been compared visually to side scrolling beat 'em up video games, director Park Chan-wook has stated that the similarity was unintentional.",year:2003,imdb:"http://www.imdb.com/title/tt0364569/",url:"https://www.youtube.com/watch?v=VwIIDzrVVdc",thumbnail:"https://img.youtube.com/vi/VwIIDzrVVdc/0.jpg"},{type:"movie",title:"Olympus has fallen",description:"During a diplomatic talk between Korea and the United States, a secret Korean organisation has plotted a takeover of the White House with little resistance due to being caught off guard.",year:2013,imdb:"https://www.imdb.com/title/tt2302755/",url:"https://www.youtube.com/watch?v=N8WXitDnA_U",thumbnail:"https://img.youtube.com/vi/N8WXitDnA_U/0.jpg"},{type:"tv_show",title:"Rick and Morty",description:"Rick, still in galactic prison, puts an intricate escape plan into action. Which then leads to a standoff in which he kills the council of Ricks.",season:3,episode:1,episode_title:"Rickshank Redemption",imdb:"https://www.imdb.com/title/tt2861424/",url:"https://www.youtube.com/watch?v=uzeODC-_IHw&t=81",thumbnail:"https://img.youtube.com/vi/uzeODC-_IHw/0.jpg"}]),u=d,p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;if(a.setState({searchString:t}),(t=t.trim().toLowerCase()).length>0){var n=a.state.content.filter(function(e){return e.title.toLowerCase().match(t)});a.setState({content:n})}else a.setState({content:u})},a.state={searchString:"",content:d},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"mainContainer"},i.a.createElement("div",{className:"headerContainer"},i.a.createElement("div",{className:"logoContainer"},i.a.createElement("div",{className:"logoImage"},"Curated TV and Film")),i.a.createElement("div",{className:"content-filter"},i.a.createElement("input",{type:"text",className:"form-control",value:this.state.searchString,onChange:this.handleChange,placeholder:"Search here"}))),i.a.createElement("section",{className:"app container"},i.a.createElement("main",{className:"main-content"},i.a.createElement("div",{className:"content-list"},this.state.content.length?i.a.createElement("ul",null,this.state.content.map(function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"item-thumbnail"},i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},i.a.createElement("img",{src:e.thumbnail,alt:e.title}))),i.a.createElement("div",{className:"item-info"},i.a.createElement("h2",null,e.title,e.year?" ("+e.year+")":""),"tv_show"===e.type&&i.a.createElement("div",{className:"tvshow-details"},i.a.createElement("div",{className:"details__item"},i.a.createElement("span",null,"Season:")," ",e.season),i.a.createElement("div",{className:"details__item"},i.a.createElement("span",null,"Episode:")," ",e.episode),i.a.createElement("div",{className:"details__item"},i.a.createElement("span",null,"Episode Title:")," ",e.episode_title)),i.a.createElement("div",{className:"item-desc details__item"},i.a.createElement("span",null,"Description:")," ",e.description),i.a.createElement("div",{className:"item-imdb"},i.a.createElement("span",null,"IMDB:"),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.imdb},e.imdb)))))})):this.state.searchString?i.a.createElement("p",null,"No search result"):i.a.createElement("p",null,"Can't load the data.")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.42e49ae1.chunk.js.map