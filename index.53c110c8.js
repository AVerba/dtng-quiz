!function(){var e=0,t=0,n=document.querySelector(".slider").querySelectorAll(".slider__item"),o=document.querySelectorAll(".btn__slider"),r=document.querySelector(".page__progress__filled"),l=n.length,a=100/l,c=document.querySelector("[data-error]"),i=document.getElementById("user-age"),s=function(o){var r,a,c,i,s,y,f,m,_,p,g;t+1!==l&&(t++,a=n[t-1],c=n[t],a.style.transform="translateZ(0px) translate(".concat(-1*t*100,"%, 0)"),c.style.transform="translateZ(0px) translate(".concat(-1*t*100,"%, 0)"),(r=n[t-1]).classList.remove("active"),r=n[t],t+1===l&&(p=2,g=6,i=Math.random()*(g-p)+p,s=document.querySelector(".loading__bar"),y=document.querySelector(" .loading__analyzing span"),f=0,m=100/(2*i),_=setInterval((function(){(f=Math.floor(f+m))>100&&(clearInterval(_),f=100),s.style.width="".concat(f,"%"),y.innerHTML="".concat(f),100===f&&setTimeout(d,1e3),100===f&&setTimeout(u,3e3)}),500),e=100),r.classList.add("active"))},d=function(){document.querySelector(".analyzer").style.display="none",document.querySelector(".loading__spinner").style.display="flex"},u=function(){document.querySelector(".loading__spinner").style.display="none",document.querySelector(".review").style.display="flex"};o.forEach((function(t){t.addEventListener("click",(function(){"userAgeBtn"===t.id&&i.value<18?(c.classList.remove("_is-hidden"),setTimeout((function(){c.classList.add("_is-hidden"),window.location.href="".concat(function(){for(var e,t={},n=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),o=0;o<n.length;o++)(e=n[o].split("="))[1]&&(t[e[0]]=e[1]);return n}())}),3e3)):(e+=a,s(),r.style.width="".concat(e,"%"))}))}))}();
//# sourceMappingURL=index.53c110c8.js.map