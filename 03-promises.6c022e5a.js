const e=document.querySelector(".form"),o=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),t=document.querySelector('input[name="amount"]');t.value,n.value;function u(e,o){return new Promise(((n,t)=>{const u=Math.random()>.3;setTimeout((()=>{u?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}function l({position:e,delay:o}){console.log(`✅ Fulfilled promise ${e+1} in ${o}ms`)}function i({position:e,delay:o}){console.log(`❌ Rejected promise ${e+1} in ${o}ms`)}function c(){console.log(`✅ Fulfilled promise 1 in ${o.value}ms`)}function m(){console.log(`❌ Rejected promise 1 in ${o.value}ms`)}e.addEventListener("submit",(function(e){e.preventDefault(),new Promise(((e,n)=>{const t=Math.random()>.3;setTimeout((()=>{t?e():n()}),o.value)})).then(c).catch(m);for(let e=1;e<t.value;e++){let t=n.value*e,c=Number(o.value)+Number(t);u(e,c).then(l).catch(i)}}));
//# sourceMappingURL=03-promises.6c022e5a.js.map