(this["webpackJsonpmovie-react"]=this["webpackJsonpmovie-react"]||[]).push([[0],{48:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var a=s(3),r=s.n(a),i=s(15),n=s.n(i),c=s(6),o=s.n(c),m=s(16),d=s(17),l=s(18),u=s(21),j=s(20),v=s(19),b=s.n(v),h=s(2),g=s.n(h),p=(s(48),s(0));function O(e){e.id;var t=e.year,s=e.title,a=e.summary,r=e.poster,i=e.genres;return Object(p.jsxs)("div",{className:"movie",children:[Object(p.jsx)("img",{src:r,alt:s,title:s}),Object(p.jsxs)("div",{className:"movie__data",children:[Object(p.jsx)("h4",{className:"movie__title",children:s}),Object(p.jsx)("h5",{className:"movie__year",children:t}),Object(p.jsx)("p",{className:"movie__summary",children:a.slice(0,180)}),Object(p.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(p.jsx)("li",{className:"genres_genre",children:e},t)}))})]})]})}O.prototype={id:g.a.number.isRequired,year:g.a.number.isRequired,title:g.a.string.isRequired,summary:g.a.string.isRequired,poster:g.a.string.isRequired,genres:g.a.arrayOf(g.a.string).isRequired};var y=O,x=(s(50),function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movie:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(p.jsx)("section",{className:"container",children:t?Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)("span",{className:"loader__text",children:"Loading...."})}):Object(p.jsx)("div",{className:"movies",children:s.map((function(e){return Object(p.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(r.a.Component)),_=x;n.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.c98f603d.chunk.js.map