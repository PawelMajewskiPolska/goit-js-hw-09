const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(()=>{setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3);t.disabled=!0})),e.addEventListener("click",stopColor);
//# sourceMappingURL=01-color-switcher.3005d26b.js.map
