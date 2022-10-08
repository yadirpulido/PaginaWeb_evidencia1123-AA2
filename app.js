const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnControles = document.querySelector('.controles');
const btnConsolas = document.querySelector('.consolas');
const btnPerifericos = document.querySelector('.perifericos');
const btnSeriales = document.querySelector('.seriales');
const contenedorProductos = document.querySelector('.productos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    productos();
});

const eventos = () =>{
    menu.addEventListener('click',select);
}

const select = () =>{
     navegacion.classList.remove('ocultar');
     botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }
    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
    
}

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});


imagenes.forEach(imagen=>{
   
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');  
        boton.remove();
    }
}

const productos = () =>{
    let productosArreglo = [];
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto=> productosArreglo = [...productosArreglo,producto]);

    const controles = productosArreglo.filter(control=> control.getAttribute('data-producto') === 'controles');
    const consolas = productosArreglo.filter(consola => consola.getAttribute('data-producto') === 'consolas');
    const perifericos = productosArreglo.filter(periferico => periferico.getAttribute('data-producto') === 'perifericos');
    const seriales = productosArreglo.filter(serial=> serial.getAttribute('data-producto') === 'seriales');

    mostrarProductos(controles, consolas, perifericos, seriales, productosArreglo);

}

const mostrarProductos = (controles, consolas, perifericos, seriales, todos) =>{
    btnControles.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        controles.forEach(control=> contenedorProductos.appendChild(control));
    });

    btnConsolas.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        consolas.forEach(consola=> contenedorProductos.appendChild(consola));
    });

    btnPerifericos.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        perifericos.forEach(periferico=> contenedorProductos.appendChild(periferico));
    });

    btnSeriales.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        seriales.forEach(serial=> contenedorProductos.appendChild(serial));
    });
    
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorProductos);
        todos.forEach(todo=> contenedorProductos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}