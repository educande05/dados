(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const u=document.querySelector("button"),s=[],d=()=>{const r=document.querySelector(".stats"),o=[];s.forEach((c,n)=>{const e=`
    <tr>
        <td>Tirada ${n}</td>
        <td>${c}</td>
    </tr>
    `;o.push(e)}),r.innerHTML=o.join("")};function l(){const r=document.querySelector(".dice"),o=Math.round(Math.random()*6)+1;r.textContent=o,s.push(o),d()}u.addEventListener("click",()=>{l()});
