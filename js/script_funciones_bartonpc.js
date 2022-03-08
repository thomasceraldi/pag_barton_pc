class Producto {
    constructor (id, imagen, alt, nombre, modelo, precio, iva, stock, categoria, subcategoria, marca) {
        this.id = id;
        this.imagen = imagen;
        this.alt = alt;
        this.nombre = nombre;
        this.modelo = modelo;
        this.precio = precio;
        this.iva = iva;
        this.stock = stock;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
        this.marca = marca;
        this.cantidad = 1;
    };
};

let productos = [];

//VARIABLES DE CONVERTIBILIDAD

let dolar = 115;
const IMPUESTO3 = 1.03;
let ganancia = 1.35;

// FUNCIONES

// ANIMACION

function animacionDescripcion () {
    $(() => {    
        let descripcionProductoHTML = $(`.descripcionProducto`);
        
        if(descripcionProductoHTML) {
            descripcionProductoHTML.slideUp(1000).slideDown(1000);
        };
    });
};

// FUNCIONES MODOS H-V
        
function tarjetaProductosHorizontal (seccionProducto, categoria) {
    fetch("../json/productos.json")
    .then(promesa => promesa.json())
    .then(datosProductos => {
        let tarjetaHprod = datosProductos.filter(filtro => filtro.categoria === categoria);
        tarjetaHprod.sort((menor, mayor) => {
            return menor.precio - mayor.precio;
        });
        tarjetaHprod.forEach(producto => {
            seccionProducto.innerHTML += `
                <div id="${producto.id}" class="card mb-3 tarjeta ${producto.subcategoria} ${producto.marca}">
                    <div class="row g-0">
                        <div class="col-md-2">
                            <img src="../productos/${producto.imagen}" class="img-fluid rounded-start" alt="${producto.alt}">
                        </div>
                        <div class="col-md-8 row contenedorTextoTarjetaProducto">
                            <div class="card-body">
                                <h5 class="card-title descripcionProducto">${producto.nombre}</h5>
                                <p class="card-text modeloProducto">${producto.modelo}</p>
                                <p class="card-text precioProducto">$ ${new Intl.NumberFormat("de-DE").format(Math.round(((((producto.precio * dolar) * producto.iva) * IMPUESTO3) * ganancia)))}</p>
                            </div>
                        </div>
                        <div class="col-md-2 row">
                            <button type="button" id="botonH${producto.id}" class="botonAgregarProductoCarritoHorizontal" aria-label="boton de agregar al carrito">Agregar al carrito<i class="bi bi-cart-fill"></i></button>
                            <div class="consultaTarjetaProducto">
                                <a href="../paginas/contacto.html" aria-label="boton de consulta por producto"><i class="bi bi-chat-right-text-fill"></i>Consulta</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    });
};
    
function tarjetaProductosVertical (seccionProducto, categoria) {
    fetch("../json/productos.json")
    .then(promesa => promesa.json())
    .then(datosProductos => {
        let tarjetaVprod = datosProductos.filter(filtro => filtro.categoria === categoria);
        tarjetaVprod.sort((menor, mayor) => {
            return menor.precio - mayor.precio;
        });
        tarjetaVprod.forEach(producto => {
            seccionProducto.innerHTML += `
                <div id="${producto.id}" class="card tarjeta ${producto.subcategoria} ${producto.marca}" style="width: 18rem;">
                    <img src="../productos/${producto.imagen}" class="card-img-top" alt="${producto.alt}">
                    <div class="card-body">
                        <h5 class="card-title descripcionProducto">${producto.nombre}</h5>
                        <p class="card-text modeloProducto">${producto.modelo}</p>
                        <p class="card-text precioProducto">$ ${new Intl.NumberFormat("de-DE").format(Math.round(((((producto.precio * dolar) * producto.iva) * IMPUESTO3) * ganancia)))}</p>
                        <div class="contenedorBotonCarritoVertical">
                            <button type="button" id="botonV${producto.id}" class="botonAgregarProductoCarritoVertical" aria-label="boton de agregar al carrito"><i class="bi bi-cart-fill"></i>Agregar al carrito</button>
                        </div>
                        <div class="consultaTarjetaProducto">
                            <a href="../paginas/contacto.html" aria-label="boton de consulta por producto"><i class="bi bi-chat-right-text-fill"></i>Consulta</a>
                        </div>
                    </div>
                </div>
            `;
        });
    });
};

// FUNCION FILTROS

// SUBCATEGORIAS

function filtroSubcategoria (subcategoria) {
    fetch("../json/productos.json")
    .then(promesa => promesa.json())
    .then(datosProductos => {
        let tarjetaHTML = Object.entries(document.getElementsByClassName(`tarjeta`));
        tarjetaHTML.forEach(prod => {
            prod[1].classList.add("ocultarCatalogo");
        });
        let prodSubcategoria = Object.entries(document.getElementsByClassName(subcategoria));
        prodSubcategoria.forEach(prod => {
            prod[1].classList.add("animate__animated");
            prod[1].classList.add("animate__zoomIn");
            prod[1].classList.remove("ocultarCatalogo");
            setTimeout(() => prod[1].classList.remove("animate__animated"), 1000);
            setTimeout(() => prod[1].classList.remove("animate__zoomIn"), 1000);
        });
    });
};

// MARCAS

function filtroMarca (marca) {
    fetch("../json/productos.json")
    .then(promesa => promesa.json())
    .then(datosProductos => {
        let tarjetaHTML = Object.entries(document.getElementsByClassName(`tarjeta`));
        tarjetaHTML.forEach(prod => {
            prod[1].classList.add("ocultarCatalogo");
        })
        let prodSubcategoria = Object.entries(document.getElementsByClassName(marca));
        prodSubcategoria.forEach(prod => {
            prod[1].classList.add("animate__animated");
            prod[1].classList.add("animate__zoomIn");
            prod[1].classList.remove("ocultarCatalogo");
            setTimeout(() => prod[1].classList.remove("animate__animated"), 1000);
            setTimeout(() => prod[1].classList.remove("animate__zoomIn"), 1000);
        });
    });
};

// REMOVER FILTROS

function filtroRemove () {
    fetch("../json/productos.json")
    .then(promesa => promesa.json())
    .then(datosProductos => {
        let tarjetaHTML = Object.entries(document.getElementsByClassName(`tarjeta`));
        if (tarjetaHTML) {
            tarjetaHTML.forEach(prod => {
                prod[1].classList.add("animate__animated");
                prod[1].classList.add("animate__fadeIn");
                prod[1].classList.remove("ocultarCatalogo");
                setTimeout(() => prod[1].classList.remove("animate__animated"), 1000);
                setTimeout(() => prod[1].classList.remove("animate__fadeIn"), 1000);
            });
        };
    });
};

// VARIABLES CLASS FILTROS

let seleccionFiltroHTML = document.getElementsByClassName(`seleccionFiltro`);

// MODO STORAGE

function modoStorage (keyStorage, valorStorage, botonLista, catalogoHorizontal, catalogoVertical, botonGrilla) {
    if(localStorage.getItem(keyStorage) === valorStorage) {
        if(botonLista) {
            botonLista.classList.add("botonLista");
        };
        if((catalogoHorizontal) && (catalogoVertical)) {
            catalogoVertical.classList.add("ocultarCatalogo");
        };
    } else {
        if(botonGrilla) {
            botonGrilla.classList.add("botonGrilla");
        };
        if((catalogoVertical) && (catalogoHorizontal)) {
            catalogoHorizontal.classList.add("ocultarCatalogo");
        };
    };
};

// GRILLA (V) Y LISTA (H)

function accionGrilla (botonAccionGrilla, botonGrilla, botonLista, catalogoVertical, catalogoHorizontal, pintarVertical, keyStorage, valorStorage) {
    if (botonAccionGrilla) {
        botonAccionGrilla.addEventListener('click', () => {
            filtroRemove();
            if (botonGrilla) {
                botonGrilla.classList.add("botonGrilla");
                if(botonLista) {
                    botonLista.classList.remove("botonLista");
                };
            };
            if ((catalogoVertical) && (catalogoHorizontal)) {
                catalogoHorizontal.classList.remove("mostrarCatalogoHorizontal");
                catalogoHorizontal.classList.add("ocultarCatalogo");
                pintarVertical;
                catalogoVertical.classList.remove("ocultarCatalogo");
                catalogoVertical.classList.add("mostrarCatalogoVertical");
            };
            localStorage.setItem(keyStorage, valorStorage);
            if(seleccionFiltroHTML) {
                let filtrosConjunto = Object.entries(seleccionFiltroHTML);
                filtrosConjunto.forEach(seleccionado => {
                    seleccionado[1].classList.remove("filtroSeleccionado");
                });
            };
        });
    };
};

function accionLista (botonAccionLista, botonLista, botonGrilla, catalogoHorizontal, catalogoVertical, pintarHorizontal, keyStorage, valorStorage) {
    if (botonAccionLista) {
        botonAccionLista.addEventListener('click', () => {
            filtroRemove();
            if (botonLista) {
                botonLista.classList.add("botonLista");
                if(botonGrilla) {
                    botonGrilla.classList.remove("botonGrilla");
                };
            };
            if ((catalogoHorizontal) && (catalogoVertical)) {
                catalogoVertical.classList.remove("mostrarCatalogoVertical");
                catalogoVertical.classList.add("ocultarCatalogo");
                pintarHorizontal;
                catalogoHorizontal.classList.remove("ocultarCatalogo");
                catalogoHorizontal.classList.add("mostrarCatalogoHorizontal");
            };
            localStorage.setItem(keyStorage, valorStorage);
            if(seleccionFiltroHTML) {
                let filtrosConjunto = Object.entries(seleccionFiltroHTML);
                filtrosConjunto.forEach(seleccionado => {
                    seleccionado[1].classList.remove("filtroSeleccionado");
                });
            };
        });
    };
};

// FILTROS

function accionFiltro (filtro, filtroSegun) {
    if (filtro) {
        if(seleccionFiltroHTML) {
            let filtrosConjunto = Object.entries(seleccionFiltroHTML);
            filtrosConjunto.forEach(seleccionado => {
                seleccionado[1].classList.remove("filtroSeleccionado");
            });
            filtro.classList.add("filtroSeleccionado");
        };
        filtroSegun;
    };
};

function sacarFiltro () {
    if(seleccionFiltroHTML) {
        let filtrosConjunto = Object.entries(seleccionFiltroHTML);
        filtrosConjunto.forEach(seleccionado => {
            seleccionado[1].classList.remove("filtroSeleccionado");
        });
    };
    filtroRemove();
};

// FILTRO BUSCADOR

function buscar (click) {
    fetch("../json/productos.json")
    .then(promesa => promesa.json())
    .then(datosProductos => {
        if(click) {
            click.addEventListener('click', () => {
                datosProductos.forEach(producto => {
                    if(busquedasHTML) {
                        if(document.getElementById(`contenedorGridAreaPaginaPrincipal`)) {
                            busquedasHTML.innerHTML += `
                                <li><a href="paginas_productos/${producto.categoria}.html" aria-label="enlace a producto seleccionado"><i class="bi bi-search"></i>${producto.nombre}</a></li>
                            `;
                        } else if(document.getElementById(`contenedorGridArea_${producto.categoria}`)) {
                            busquedasHTML.innerHTML += `
                                <li><a href="${producto.categoria}.html" aria-label="enlace a producto seleccionado"><i class="bi bi-search"></i>${producto.nombre}</a></li>
                            `;
                        } else {
                            busquedasHTML.innerHTML += `
                                <li><a href="../paginas_productos/${producto.categoria}.html" aria-label="enlace a producto seleccionado"><i class="bi bi-search"></i>${producto.nombre}</a></li>
                            `;
                        };
                    };
                    if(click.ariaExpanded === "false") {
                        busquedasHTML.innerHTML = ``;
                    };
                });
            });
        };
    });
};