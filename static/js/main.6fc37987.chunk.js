(this["webpackJsonpmovie-react"]=this["webpackJsonpmovie-react"]||[]).push([[0],{57:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(26),i=n.n(r),c=n(7),o=n(2),l=n(15),u=n.n(l),j=n(27),m=n(8),d=n(9),b=n(11),h=n(10),v=n(28),p=n.n(v),O=n(5),x=n.n(O),f=(n(57),n(1));function g(e){e.id;var t=e.year,n=e.title,a=e.summary,s=e.poster,r=e.genres;return Object(f.jsx)("div",{className:"movie",children:Object(f.jsxs)(c.b,{to:{pathname:"/movie_detail",state:{year:t,title:n,summary:a,poster:s,genres:r}},children:[Object(f.jsx)("img",{src:s,alt:n,title:n}),Object(f.jsxs)("div",{className:"movie__data",children:[Object(f.jsx)("h4",{className:"movie__title",children:n}),Object(f.jsx)("h5",{className:"movie__year",children:t}),Object(f.jsx)("p",{className:"movie__summary",children:a.slice(0,180)}),Object(f.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(f.jsx)("li",{className:"genres_genre",children:e},t)}))})]})]})})}g.prototype={id:x.a.number.isRequired,year:x.a.number.isRequired,title:x.a.string.isRequired,summary:x.a.string.isRequired,poster:x.a.string.isRequired,genres:x.a.arrayOf(x.a.string).isRequired};var y=g,_=(n(65),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movie:[]},e.getMovies=Object(j.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(f.jsx)("section",{className:"container",children:t?Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)("span",{className:"loader__text",children:"Loading...."})}):Object(f.jsx)("div",{className:"movies",children:n.map((function(e){return Object(f.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component)),N=_;n(66);var w=function(e){return console.log(e),Object(f.jsxs)("div",{className:"about__container",children:[Object(f.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(f.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},k=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.location;console.log(e.state)}},{key:"render",value:function(){return Object(f.jsx)("span",{children:"Hello"})}}]),n}(s.a.Component),q=k;n(67);var R=function(){return Object(f.jsxs)("div",{className:"nav",children:[Object(f.jsx)(c.b,{to:"/",children:"Home"}),Object(f.jsx)(c.b,{to:"/about",children:"About"})]})};n(68);var M=function(){return Object(f.jsxs)(c.a,{children:[Object(f.jsx)(R,{}),Object(f.jsx)(o.a,{path:"/",exact:!0,component:N}),Object(f.jsx)(o.a,{path:"/about",component:w}),Object(f.jsx)(o.a,{path:"/movie_detail",component:q})]})};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(M,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.6fc37987.chunk.js.map