const p = document.querySelector('#paragrafo');
const divImg = document.querySelector('#divImg');


divImg.addEventListener('mouseenter',()=> { 
    divImg.style.border = '2px solid black';
})

function pMouse() { 
    divImg.style.border = 'none';
}

divImg.addEventListener('mouseover', pMouse);
divImg.addEventListener('mouseout', pMouse);

p.onclick = () => { 
    alert('bom dia!');
}

const clique = () => { 
    alert('Botão clicado');

}

function presstecla() { 
    
}

pMouse();