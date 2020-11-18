// Cargar DOM
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

// Obtener datos de la api
const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        console.log(data);
        pintarProductos(data);
        detectarBoton(data);
    } catch (error) {
        console.log(error);
    }
}

// Pintar tarjetas de productos
const contenedorProductos = document.querySelector('#contenedor-productos');
const pintarProductos = (data) => {
    const template = document.querySelector('#template-productos').content;
    const fragment = document.createDocumentFragment();

    data.forEach(producto => {
        console.log(producto);
        template.querySelector('img').setAttribute('src', producto.thumbnailUrl);
        template.querySelector('h5').textContent = producto.title;
        template.querySelector('p span').textContent = producto.precio;
        template.querySelector('button').dataset.id = producto.id;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    contenedorProductos.appendChild(fragment);
}

// Boton añadir producto a carrito
let carrito = {};
const detectarBoton = (data) => {
    const boton = document.querySelectorAll('.card button');

    boton.forEach(btn => {
        btn.addEventListener('click', () => {
            const producto = data.find(item => item.id === parseInt(btn.dataset.id));
            producto.cantidad = 1;
            if (carrito.hasOwnProperty(producto.id)) {
                producto.cantidad = carrito[producto.id].cantidad + 1;
            }
            carrito[producto.id] = { ...producto };
            pintarCarrito();
        })
    })
}

// Obtener productos del carrito
const items = document.querySelector('#items');
const pintarCarrito = () => {
    items.innerHTML = '';
    const template = document.querySelector('#template-carrito').content;
    const fragment = document.createDocumentFragment();

    Object.values(carrito).forEach(producto => {
        template.querySelector('th').textContent = producto.id;
        template.querySelectorAll('td')[0].textContent = producto.title;
        template.querySelectorAll('td')[1].textContent = producto.cantidad;
        template.querySelector('span').textContent = producto.precio * producto.cantidad;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);

    pintarFooter();
    accionBotones();
}

const footer = document.querySelector('#footer-carrito');
const pintarFooter = () => {

    footer.innerHTML = '';

    const template = document.querySelector('#template-footer').content;
    const fragment = document.createDocumentFragment();

    // Sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0);
    const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0);


    template.querySelectorAll('td')[0].textContent = nCantidad;
    template.querySelector('span').textContent = nPrecio;

    const clone = template.cloneNode(true);
    fragment.appendChild(clone);

    footer.appendChild(fragment);
}

const accionBotones = () => {

}



