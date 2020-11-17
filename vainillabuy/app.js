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

let carrito = {};

const detectarBoton = (data) => {
    const boton = document.querySelectorAll('.card button');

    boton.forEach(btn => {
        btn.addEventListener('click', () => {
            const producto = data.find(item => item.id === parseInt(btn.dataset.id));
            producto.cantidad = 1;
            if (carrito.hasOwnProperty(producto.id)) {
                producto.cantidad++
            }
            carrito[producto.id] = { ...producto };
            console.log(carrito);
        })
    })
}

