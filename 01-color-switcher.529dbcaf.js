const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.body;t.disabled=!0,e.addEventListener("click",(()=>{timerId=setInterval((()=>{let e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;d.style.backgroundColor=e}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(timerId),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.529dbcaf.js.map
