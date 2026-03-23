////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// !General width Script.
// ~Width Dinamic Resize 
// &Funcion para el ajuste automatico de elementos de manera responsiva segun el tamaño de pantalla.
function resizeAutoLecture(){
    let screenWidth = window.innerWidth;

    if(screenWidth > 800){
        document.getElementById('navegation-hidden-option').style = 'display:none';
        document.getElementsByTagName('main')[0].style = 'visibility: visible; opacity: 1; display: block';
        document.getElementsByTagName('footer')[0].style = 'visibility: visible; opacity: 1; display: block';
    } else {
        document.getElementById('navegation-hidden-option').style = 'display:block';
        document.getElementsByTagName('nav')[0].style = 'display: none;';
        setTimeout(() => {
            document.getElementsByTagName('nav')[0].style = 'display: block;';
        }, 1);
    }
}

// &Ejecicion de la funcion resizeAutoLecture.
resizeAutoLecture();

// &Evento listener para cuando se ajuste el tamaño de pestaña se autoajusten los elementos reutilizando resizeAutoLecture.
window.addEventListener('resize', function (){
    resizeAutoLecture();
});

// ~Carousel 
// ^Change And movement of elements
// &Declaracion de variables del carrucel asi como de los botones para cambio de elementos.
const carousel = document.getElementsByClassName('merch-section')[0].getElementsByTagName('div')[0];
const carouselBackButton = document.getElementsByClassName('carousel-back-button')[0];
const carouselNextButton = document.getElementsByClassName('carousel-next-button')[0];

// &Evento listener que se asigna la funcion al boton de siguiente del carrucel para recorrer los elementos a la izquierda.
carouselNextButton.addEventListener('click', function(){
    const first = carousel.firstElementChild;
    carousel.style.transition = 'transform 0.5s ease';
    carousel.style.transform = `translateX(-${first.offsetWidth}px)`;

    carousel.addEventListener('transitionend', function handler() {
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)'; 
        carousel.appendChild(first);
        carousel.removeEventListener('transitionend', handler);
    });
});

// &Evento listener que se asigna la funcion al boton de regreso del carrucel para recorrer los elementos a la derecha.
carouselBackButton.addEventListener('click', function(){
    const last = carousel.lastElementChild;
    carousel.prepend(last);
    carousel.style.transition = 'none';
    carousel.style.transform = `translateX(-${last.offsetWidth}px)`;

    requestAnimationFrame(() => {
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = 'translateX(0)';
    });
});

// ^Hover on elements
// &Declaracion de variables las cuales obtienen los elementos dentro del carrucel, asi como sus botones. 
const carouselNodeElements = document.querySelectorAll('.merch-section > div > div');
const carouselElements = Array.from(carouselNodeElements);
console.log(carouselElements);

// &Bucle que asigna eventos listener a los botones para aplicar estilos a los elementos en los que se haga hover.
carouselElements.forEach(element => {
    const carouselElementButton = element.querySelector('button');

    element.addEventListener("mouseenter", function(){
        console.log(`Hover realizado en el elemento`,element);
        element.style = 'height: 100%; background-color: #00315d';
        carouselElementButton.style = 'background-color: #fff855; color: #00315d; padding: 0 2.8vw';
    });
    

    element.addEventListener('mouseleave', function(){
        element.style = 'height: 97.5%; background-color: #003463';
        carouselElementButton.style = 'background-color: transparent;';
    });
});

// &Recorre los elementos un poco hacia la derecha para que esten centrados.
carousel.scrollLeft += 250;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// !Width 899px Script.
// ~Navegation Menu Dropdown
function navegationMenuDropdown(){
    let navegationDropdownActivation = document.getElementById('navegation-menu-element').textContent;

    if(navegationDropdownActivation == 'MENU'){
        document.getElementsByTagName('nav')[0].style = 'visibility: visible; opacity: 1;';
        document.getElementsByTagName('main')[0].style = 'visibility: hidden; opacity: 0; display: none';
        document.getElementsByTagName('footer')[0].style = 'visibility: hidden; opacity: 0; display: none';
        document.getElementsByClassName('media-branding-nav')[0].style = 'margin-left: 1.5vw';
        document.getElementsByClassName('media-branding-nav')[1].style = 'margin-right: 1.5vw';   
        document.getElementById('navegation-menu-element').textContent = 'CLOSE';
        return;

    } else if(navegationDropdownActivation == 'CLOSE'){
        document.getElementById('navegation-menu-element').textContent = 'MENU';
        document.getElementsByTagName('nav')[0].style = 'visibility: hidden; opacity: 0;';
        document.getElementsByTagName('main')[0].style = 'visibility: visible; opacity: 1; display: block';
        document.getElementsByTagName('footer')[0].style = 'visibility: visible; opacity: 1; display: block';
        document.getElementsByClassName('media-branding-nav')[0].style = 'margin-left: 1.65vw';
        document.getElementsByClassName('media-branding-nav')[1].style = 'margin-right: 1.65vw';   
        return;
    }
}    
