let e=0,t=0;const l=document.querySelector(".slider").querySelectorAll(".slider__item"),n=document.querySelectorAll(".btn__slider"),r=document.querySelector(".page__progress__filled"),o=l.length,s=100/o,a=document.querySelector("[data-error]"),i=document.getElementById("user-age"),d=n=>{let r;t+1!==o&&(t++,(()=>{let e,n;e=l[t-1],n=l[t],e.style.transform=`translateZ(0px) translate(${-1*t*100}%, 0)`,n.style.transform=`translateZ(0px) translate(${-1*t*100}%, 0)`})(),r=l[t-1],r.classList.remove("active"),r=l[t],t+1===o&&(!function(){const e=(n=2,r=6,Math.random()*(r-n)+n),t=document.querySelector(".loading__bar"),l=document.querySelector(" .loading__analyzing span");var n,r;let o=0;const s=100/(2*e),a=setInterval((function(){o=Math.floor(o+s),o>100&&(clearInterval(a),o=100),t.style.width=`${o}%`,l.innerHTML=`${o}`,100===o&&setTimeout(c,1e3),100===o&&setTimeout(u,3e3)}),500)}(),e=100),r.classList.add("active"))},c=()=>{document.querySelector(".analyzer").style.display="none",document.querySelector(".loading__spinner").style.display="flex"},u=()=>{document.querySelector(".loading__spinner").style.display="none",document.querySelector(".review").style.display="flex"};n.forEach((function(t){t.addEventListener("click",(()=>{"userAgeBtn"===t.id&&i.value<18?(a.classList.remove("_is-hidden"),setTimeout((()=>{a.classList.add("_is-hidden"),window.location.href="/"}),3e3)):(e+=s,d(),r.style.width=`${e}%`)}))}));
//# sourceMappingURL=index.41bfe2ca.js.map