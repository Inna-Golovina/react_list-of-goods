(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(3),s=n.n(o),c=n(1),l=n(4),u=n(5),i=n(7),m=n(6),b=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),g=function(t){Object(i.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={goods:b,selectedNumber:1,isStarted:!1},t.reverse=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).reverse()}}))},t.sortByAlphabetically=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.sortByLength=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))},t.start=function(){t.setState({isStarted:!0})},t.reset=function(){t.setState({goods:b})},t.selectNumber=function(e){var n=e.target;t.setState({selectedNumber:n.value})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.isStarted,a=t.selectedNumber;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"header"},"Goods"),n?r.a.createElement(r.a.Fragment,null,r.a.createElement("ol",{className:"goods"},Object(c.a)(e).filter((function(t){return t.length>=a})).map((function(t){return r.a.createElement("li",{key:t},t)}))),r.a.createElement("button",{type:"button",className:"button_reverse",onClick:this.reverse},"Reverse"),r.a.createElement("button",{type:"button",className:"button_sort-name",onClick:this.sortByAlphabetically},"Sort alphabetically"),r.a.createElement("button",{type:"button",className:"button_sort-length",onClick:this.sortByLength},"Sort by length"),r.a.createElement("button",{type:"button",className:"button_reset",onClick:this.reset},"Reset"),r.a.createElement("select",{value:a,onChange:this.selectNumber},[1,2,3,4,5,6,7,8,9].map((function(t){return r.a.createElement("option",{value:t,key:t},t)})))):r.a.createElement("button",{type:"button",className:"button_start",onClick:this.start},"Start"))}}]),n}(r.a.Component);s.a.render(r.a.createElement(g,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1e869f21.chunk.js.map