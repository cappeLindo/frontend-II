function imagem(e) { 
    const elemento = e.target;
    const grande = document.querySelector('#imgAmpliada');
    grande.style.display = "block";

    elemento.style.opacity = '1';
    grande.setAttribute('src', `${elemento.src}`);
    elemento.style.borderRadius = '10px';
   
    elemento.onmouseout = () => {
        elemento.style.opacity = '0.4';
        elemento.style.borderRadius = '1px';
    }

}   