!function(){var e=0,t=0,n=document.querySelector(".slider").querySelectorAll(".slider__item"),r=document.querySelectorAll(".btn__slider"),l=document.querySelector(".page__progress__filled"),o=n.length,a=100/o,c=document.querySelector("[data-error]"),s=document.getElementById("user-age"),i=function(r){var l,a,c,s,i,y,m,_,f,g,p;t+1!==o&&(t++,a=n[t-1],c=n[t],a.style.transform="translateZ(0px) translate(".concat(-1*t*100,"%, 0)"),c.style.transform="translateZ(0px) translate(".concat(-1*t*100,"%, 0)"),(l=n[t-1]).classList.remove("active"),l=n[t],t+1===o&&(g=2,p=6,s=Math.random()*(p-g)+g,i=document.querySelector(".loading__bar"),y=document.querySelector(" .loading__analyzing span"),m=0,_=100/(2*s),f=setInterval((function(){(m=Math.floor(m+_))>100&&(clearInterval(f),m=100),i.style.width="".concat(m,"%"),y.innerHTML="".concat(m),100===m&&setTimeout(d,1e3),100===m&&setTimeout(u,3e3)}),500),e=100),l.classList.add("active"))},d=function(){document.querySelector(".analyzer").style.display="none",document.querySelector(".loading__spinner").style.display="flex"},u=function(){document.querySelector(".loading__spinner").style.display="none",document.querySelector(".review").style.display="flex"};r.forEach((function(t){t.addEventListener("click",(function(){"userAgeBtn"===t.id&&s.value<18?(c.classList.remove("_is-hidden"),setTimeout((function(){c.classList.add("_is-hidden"),window.location.href="/"}),3e3)):(e+=a,i(),l.style.width="".concat(e,"%"))}))}))}();
//# sourceMappingURL=index.50d65e5a.js.map
