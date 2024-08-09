(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();let s=[],c=Math.floor(Math.random()*94),a=0,f=[];const d=document.getElementById("app");fetch("./questions.json").then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{s=e,l()}).catch(e=>console.error("Error loading the questions:",e));function l(){debugger;if(s.length===0){console.error("No questions available");return}if(c<=s.length){const e=s[c];d.innerHTML=`
        <h2>Pregunta:</h2>
        <p class="description">${e.descripcion}</p>
        <p id="feedback"></p>
        <div id="options">
            <button onclick="checkAnswer('LEVE')">LEVE</button>
            <button onclick="checkAnswer('MODERADA')">MODERADA</button>
            <button onclick="checkAnswer('GRAVE')">GRAVE</button>
        </div>
        <p class="score">Preguntas contestadas: <span>${a}</span></p>
        `}else d.innerHTML=`<h2>¡Felicidades!</h2><p>Completaste todas las preguntas. Puntuación: ${a} / ${s.length}</p>`}window.checkAnswer=function(e){const r=s[c],o=document.getElementById("feedback");o.className="",e===r.tipo_falta?(f.push(c),o.textContent="¡Correcto!",o.classList.add("correct"),a++,c=p(),setTimeout(l,1e3)):(o.textContent="Incorrecto. Intenta nuevamente.",o.classList.add("incorrect"))};function p(){let e=Math.floor(Math.random()*94);if(!f.find(o=>o==e))return e;e=p()}l();
