import{S as t,i as s,s as a,a as e,e as o,t as n,h as i,d as r,b as c,c as l,f as h,g as u,j as m,m as f,l as d,W as p,o as g}from"./client.92842dd7.js";function j(t){let s,a,j,v,E,H,$=t[0].title+"",b=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),j=o("h1"),v=n($),E=e(),H=o("div"),this.h()},l(t){i("svelte-1uty71u",document.head).forEach(r),a=c(t),j=l(t,"H1",{});var s=h(j);v=u(s,$),s.forEach(r),E=c(t),H=l(t,"DIV",{class:!0}),h(H).forEach(r),this.h()},h(){m(H,"class","content svelte-emm3f3")},m(t,s){f(t,a,s),f(t,j,s),d(j,v),f(t,E,s),f(t,H,s),H.innerHTML=b},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&$!==($=t[0].title+"")&&p(v,$),1&a&&b!==(b=t[0].html+"")&&(H.innerHTML=b)},i:g,o:g,d(t){t&&r(a),t&&r(j),t&&r(E),t&&r(H)}}}async function v({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function E(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}class H extends t{constructor(t){super(),s(this,t,E,j,a,{post:0})}}export{H as default,v as preload};