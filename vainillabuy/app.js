// Cargar DOM
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

// Obtener datos de la api
const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        
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
        });
    });
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

        //botones
        template.querySelector('.btn-info').dataset.id = producto.id;
        template.querySelector('.btn-danger').dataset.id = producto.id;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);

    pintarFooter();
    accionBotones();
}

// Pintar contenido del carrito
const footer = document.querySelector('#footer-carrito');
const pintarFooter = () => {

    footer.innerHTML = '';

    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`;
        return
    }

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

    const boton = document.querySelector('#vaciar-carrito');
    boton.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    });

}

// Funcionalidad de botones agregar y eliminar
const accionBotones = () => {
    const botonAgregar = document.querySelectorAll('#items .btn-info');
    const botonEliminar = document.querySelectorAll('#items .btn-danger');

    botonAgregar.forEach(btn => {
        btn.addEventListener('click', () => {
            const producto = carrito[btn.dataset.id];
            producto.cantidad++;
            carrito[btn.dataset.id] = { ...producto };
            pintarCarrito();
        });
    });

    botonEliminar.forEach(btn => {
        btn.addEventListener('click', () => {
            const producto = carrito[btn.dataset.id];
            producto.cantidad--;
            if (producto.cantidad === 0) {
                delete carrito[btn.dataset.id];
                pintarCarrito();
            } else {
                carrito[btn.dataset.id] = { ...producto };
                pintarCarrito();
            }
        });
    });
}



