import{S as t,i as s,s as a,a as e,e as o,t as n,h as i,d as c,b as r,c as l,f as h,g as u,j as f,m,l as d,W as p,o as g}from"./client.8b9f59cd.js";function j(t){let s,a,j,v,b,E,H=t[0].title+"",$=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),j=o("h1"),v=n(H),b=e(),E=o("div"),this.h()},l(t){i("svelte-1uty71u",document.head).forEach(c),a=r(t),j=l(t,"H1",{});var s=h(j);v=u(s,H),s.forEach(c),b=r(t),E=l(t,"DIV",{class:!0}),h(E).forEach(c),this.h()},h(){f(E,"class","content svelte-emm3f3")},m(t,s){m(t,a,s),m(t,j,s),d(j,v),m(t,b,s),m(t,E,s),E.innerHTML=$},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&H!==(H=t[0].title+"")&&p(v,H),1&a&&$!==($=t[0].html+"")&&(E.innerHTML=$)},i:g,o:g,d(t){t&&c(a),t&&c(j),t&&c(b),t&&c(E)}}}async function v({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function b(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}class E extends t{constructor(t){super(),s(this,t,b,j,a,{post:0})}}export{E as default,v as preload};