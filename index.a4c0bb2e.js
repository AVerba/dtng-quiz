!function(){var e=0,t=0,n=document.querySelector(".slider").querySelectorAll(".slider__item"),r=document.querySelectorAll(".btn__slider"),o=document.querySelector(".page__progress__filled"),a=n.length,l=100/a,c=(document.querySelector("[data-error]"),document.getElementById("user-age"),function(r){var o,l,c,d,s,y,m,f,v,_,g;t+1!==a&&(t++,l=n[t-1],c=n[t],l.style.transform="translateZ(0px) translate(".concat(-1*t*100,"%, 0)"),c.style.transform="translateZ(0px) translate(".concat(-1*t*100,"%, 0)"),(o=n[t-1]).classList.remove("active"),o=n[t],t+1===a&&(_=2,g=6,d=Math.random()*(g-_)+_,s=document.querySelector(".loading__bar"),y=document.querySelector(" .loading__analyzing span"),m=0,f=100/(2*d),v=setInterval((function(){(m=Math.floor(m+f))>100&&(clearInterval(v),m=100),s.style.width="".concat(m,"%"),y.innerHTML="".concat(m),100===m&&setTimeout(i,1e3),100===m&&setTimeout(u,3e3)}),500),e=100),o.classList.add("active"))}),i=function(){document.querySelector(".analyzer").style.display="none",document.querySelector(".loading__spinner").style.display="flex"},u=function(){document.querySelector(".loading__spinner").style.display="none",document.querySelector(".review").style.display="flex"};document.querySelector(".form-control").addEventListener("click",(function(){return function(e){for(var t=18;t<101;t++){var n=document.createElement("option");n.innerHTML="".concat(t),e.target.appendChild(n)}!function(e){var t=document.querySelectorAll(e),n=!0,r=!1,o=void 0;if(t&&t.length)try{for(var a,l=t[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var c=a.value,i=c.innerText;if(!c.hasAttribute("data-limit"))throw Error("Cannot find attribute 'data-limit'");i.length>c.dataset.limit&&(c.innerText="".concat(i.substring(0,c.dataset.limit-"...".length).trim()).concat("..."))}}catch(e){r=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}}(".short")}(event)})),r.forEach((function(t){t.addEventListener("click",(function(){e+=l,c(),o.style.width="".concat(e,"%")}))}))}();
//# sourceMappingURL=index.a4c0bb2e.js.map
