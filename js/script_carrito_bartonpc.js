localStorage.setItem('carrito', JSON.stringify([]));
let botonCarritoHTML = document.getElementById("botonCarrito");
let carritoDeComprasHTML = document.getElementById("carritoDeCompras");
let precioTotalCarritoHTML = document.getElementById(`precioTotalCarrito`);
let botonFinalizarCompraHTML = document.getElementById(`botonFinalizarCompra`);
let compraFinalizadaHTML = document.getElementById(`compraFinalizada`);
let acumulador;

fetch("../json/productos.json")
.then(promesa => promesa.json())
.then(datosProductos => {
    datosProductos.forEach(dato => {
        if(document.getElementById(`boton${dato.id}`)) {
            document.getElementById(`boton${dato.id}`).addEventListener('click', () => {
                if (productos.find(find => find.id === dato.id)) {
                    let indice = productos.findIndex(findindex => findindex.id === dato.id);
                    productos[indice].cantidad++
                    localStorage.setItem("carrito", JSON.stringify(productos));
                } else {
                    let producto = new Producto (dato.id, dato.imagen, dato.alt, dato.nombre, dato.modelo, dato.precio, dato.iva, dato.stock, dato.categoria, dato.subcategoria, dato.marca, dato.espacio);
                    productos.push(producto);
                    localStorage.setItem("carrito", JSON.stringify(productos));
                };
            });
        };
        if(document.getElementById(`botonV${dato.id}`)) {
            document.getElementById(`botonV${dato.id}`).addEventListener('click', () => {
                if (productos.find(find => find.id === dato.id)) {
                    let indice = productos.findIndex(findindex => findindex.id === dato.id);
                    productos[indice].cantidad++
                    localStorage.setItem("carrito", JSON.stringify(productos));
                } else {
                    let producto = new Producto (dato.id, dato.imagen, dato.alt, dato.nombre, dato.modelo, dato.precio, dato.iva, dato.stock, dato.categoria, dato.subcategoria, dato.marca, dato.espacio);
                    productos.push(producto);
                    localStorage.setItem("carrito", JSON.stringify(productos));
                };
            });
        };
        if(document.getElementById(`botonH${dato.id}`)) {
            document.getElementById(`botonH${dato.id}`).addEventListener('click', () => {
                if (productos.find(find => find.id === dato.id)) {
                    let indice = productos.findIndex(findindex => findindex.id === dato.id);
                    productos[indice].cantidad++
                    localStorage.setItem("carrito", JSON.stringify(productos));
                } else {
                    let producto = new Producto (dato.id, dato.imagen, dato.alt, dato.nombre, dato.modelo, dato.precio, dato.iva, dato.stock, dato.categoria, dato.subcategoria, dato.marca, dato.espacio);
                    productos.push(producto);
                    localStorage.setItem("carrito", JSON.stringify(productos));
                };
            });
        };
    });
});

function compraTotal(productosDelStorage) {
    acumulador = 0;
    productosDelStorage.forEach((productoCarrito) => {
        acumulador += (Math.round(((((productoCarrito.precio * dolar) * productoCarrito.iva) * IMPUESTO3) * ganancia))) * (productoCarrito.cantidad);
    });
    if(precioTotalCarritoHTML) {
        if(acumulador === 0) {
            precioTotalCarritoHTML.innerHTML = ``;
            carritoDeComprasHTML.innerHTML = `<p>No hay productos agregados en el carrito</p>`;
        } else {
            precioTotalCarritoHTML.innerHTML = `Importe total $${new Intl.NumberFormat("de-DE").format(acumulador)}`;
        };
    };
};

function cargarEventosModal(productosDelStorage) {
    productosDelStorage.forEach((productoCarrito, indice) => {
        if(document.getElementById(`botonEliminarProducto${productoCarrito.id}`)) {
            document.getElementById(`botonEliminarProducto${productoCarrito.id}`).addEventListener('click', () => {
                if(document.getElementById(`carrito${productoCarrito.id}`)) {
                    document.getElementById(`carrito${productoCarrito.id}`).remove();
                };
                productos.splice(indice, 1);
                localStorage.setItem('carrito', JSON.stringify(productos));
                cargarProductosModal(JSON.parse(localStorage.getItem('carrito')));
            });
        };
    });
    productosDelStorage.forEach((productoCarrito, indice) => {
        if(document.getElementById(`sum${productoCarrito.id}`)) {
            document.getElementById(`sum${productoCarrito.id}`).addEventListener('click', () => {
                if(productos[indice].cantidad < productos[indice].stock) {
                    productos[indice].cantidad++;
                    localStorage.setItem('carrito', JSON.stringify(productos));
                    cargarProductosModal(JSON.parse(localStorage.getItem('carrito')));
                };
            });
        };
    });
    productosDelStorage.forEach((productoCarrito, indice) => {
        if(document.getElementById(`rest${productoCarrito.id}`)) {
            document.getElementById(`rest${productoCarrito.id}`).addEventListener('click', () => {
                if(productos[indice].cantidad > 1) {
                    productos[indice].cantidad--;
                    localStorage.setItem('carrito', JSON.stringify(productos));
                    cargarProductosModal(JSON.parse(localStorage.getItem('carrito')));
                };
            });
        };
    });
};

function cargarProductosModal(productosDelStorage) {
    if(carritoDeComprasHTML) {
        carritoDeComprasHTML.innerHTML = " ";
        productosDelStorage.forEach(productoCarrito => {
            carritoDeComprasHTML.innerHTML += `
                <div id="carrito${productoCarrito.id}" class="card mb-3 tarjeta">
                    <div class="row g-0">
                        <div class="col-md-2 contenedorImagenProductosCarrito">
                            <img src="../productos/${productoCarrito.imagen}" class="img-fluid rounded-start" alt="${productoCarrito.alt}">
                        </div>
                        <div class="col-md-8 row contenedorTextoTarjetaProducto">
                            <div class="card-body">
                                <h5 class="card-title descripcionProductoCarrito">${productoCarrito.nombre}</h5>
                                <p class="card-text modeloProductoCarrito">${productoCarrito.modelo}</p>
                                <p class="card-text precioProductoCarrito">$ ${new Intl.NumberFormat("de-DE").format(Math.round(((((productoCarrito.precio * dolar) * productoCarrito.iva) * IMPUESTO3) * ganancia)))}</p>
                            </div>
                        </div>
                        <div class="col-md-2 row contenedorBotonesProductosCarritos">
                            <button type="button" id="botonEliminarProducto${productoCarrito.id}" class="botonEliminarProductoCarrito" aria-label="boton para eliminar el producto seleccionado del carrito"><i class="bi bi-trash-fill"></i></button>
                            <div class="agregarCantidadCarrito">
                                <div>
                                    <button class= "btn btn-outline-secondary" id="rest${productoCarrito.id}"><i class="bi bi-dash-circle"></i></button>
                                </div>
                                <div class="contenedorCantidad">
                                    <p class="card-text">${productoCarrito.cantidad}</p>
                                </div>
                                <div>
                                    <button class= "btn btn-outline-secondary" id="sum${productoCarrito.id}"><i class="bi bi-plus-circle"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        cargarEventosModal(productosDelStorage);
        compraTotal(productosDelStorage);
    };
};

if(botonCarritoHTML) {
    botonCarritoHTML.addEventListener('click', () => {
        let productosDelStorage = JSON.parse(localStorage.getItem('carrito'));
        cargarProductosModal(productosDelStorage);
    });
};

if(botonFinalizarCompraHTML) {
    botonFinalizarCompraHTML.addEventListener('click', (e) => {
        if(acumulador === 0) {
            if(compraFinalizadaHTML) {
                compraFinalizadaHTML.innerHTML = `
                    <div id="alertaCompra" class="alert alert-danger d-flex align-items-center" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </symbol>
                        </svg>
                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                        <div>
                            <p id="textoAlert">Debe agregar productos al carrito para finalizar su compra</p>
                        </div>
                        <div>
                            <button type="button" id="cerrarModalCarrito" class="alertRojo btn btn-secondary" data-bs-dismiss="modal" aria-label="cerrar el carrito de compras">Cerrar</button>
                        </div>
                    </div>
                `;
            };
            let textoAlert = document.getElementById(`textoAlert`);
                if(textoAlert) {
                    textoAlert.style.padding = "0.2rem";
                    textoAlert.style.marginBottom = 0;
                };
            let alertaCompraHTML = document.getElementById(`alertaCompra`);
            let cerrarModalCarritoHMTL = document.getElementById(`cerrarModalCarrito`);
            if(cerrarModalCarritoHMTL) {
                cerrarModalCarritoHMTL.style.background = "#e11b1bba";
                cerrarModalCarritoHMTL.style.color = "white";
                cerrarModalCarritoHMTL.style.borderColor = "black";
                cerrarModalCarritoHMTL.addEventListener('click', () => {
                    setTimeout(() => compraFinalizadaHTML.removeChild(alertaCompraHTML), 1000);
                });
            };
        } else {
            productos.length = 0;
            localStorage.setItem('carrito', JSON.stringify([]));
            if(compraFinalizadaHTML) {
                compraFinalizadaHTML.innerHTML = `
                    <div id="alertaCompra" class="alert alert-success d-flex align-items-center" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </symbol>
                        </svg>
                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                        <div>
                            <p id="textoAlert">¡Gracias, su compra fue realizada con exito, espere a la brevedad sus productos</p>
                        </div>
                        <div>
                            <button type="button" id="cerrarModalCarrito" class="alertVerde btn btn-secondary" data-bs-dismiss="modal" aria-label="cerrar el carrito de compras">Cerrar</button>
                        </div>
                    </div>
                `;
            };
            let textoAlert = document.getElementById(`textoAlert`);
                if(textoAlert) {
                    textoAlert.style.padding = "0.2rem";
                    textoAlert.style.marginBottom = 0;
                };
            let alertaCompraHTML = document.getElementById(`alertaCompra`);
            let cerrarModalCarritoHMTL = document.getElementById(`cerrarModalCarrito`);
            if(cerrarModalCarritoHMTL) {
                cerrarModalCarritoHMTL.style.background = "#409740c2";
                cerrarModalCarritoHMTL.style.borderColor = "#00000057";
                cerrarModalCarritoHMTL.addEventListener('click', () => {
                    setTimeout(() => compraFinalizadaHTML.removeChild(alertaCompraHTML), 1000);
                });
            };
        };
    });
};