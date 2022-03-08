// INDEX - PRODUCTOS DESTACADOS

let productosDestacadosHTML = document.getElementById(`productosDestacados`);

fetch("../json/productos.json")
.then(promesa => promesa.json())
.then(datosDestacados => {
    let prodDestacados = datosDestacados.filter(filtro => filtro.espacio === "destacado");
    prodDestacados.forEach((destacado, indice) => {
        if(productosDestacadosHTML) {
            productosDestacadosHTML.innerHTML += `
                <div id="${destacado.id}" class="card destacado${indice + 1}" style="width: 18rem;">
                    <img src="productos/${destacado.imagen}" class="card-img-top" alt="${destacado.alt}">
                    <div class="card-body">
                        <h5 class="card-title descripcionProducto">${destacado.nombre}</h5>
                        <p class="card-text modeloProducto">${destacado.modelo}</p>
                        <p class="card-text precioProducto">$ ${new Intl.NumberFormat("de-DE").format(Math.round(((((destacado.precio * dolar) * destacado.iva) * IMPUESTO3) * ganancia)))}</p>
                        <div class="contenedorBotonCarritoVertical">
                            <button type="button" id="boton${destacado.id}" class="botonAgregarProductoCarritoVertical" aria-label="boton de agregar al carrito"><i class="bi bi-cart-fill"></i>Agregar al carrito</button>
                        </div>
                        <div class="consultaTarjetaProducto">
                            <a href="../paginas/contacto.html" aria-label="boton de consulta por producto"><i class="bi bi-chat-right-text-fill"></i>Consulta</a>
                        </div>
                    </div>
                </div>
            `;
        };
    });
    animacionDescripcion();
});

// PAGINA CONTACTO - CONSULTA

class Consulta {
    constructor (nombre, apellido, email, telefono, asunto, mensaje) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.asunto = asunto;
        this.mensaje = mensaje;
    };
};

let consultas = [];

let formularioConsultasHTML = document.getElementById(`formularioConsulta`);
let mensajeEnFormularioHTML = document.getElementById(`mensajeEnFormularioConsulta`);
let inputAceptaHTML = document.getElementById(`enviarContacto`);
let inputAceptaSmartHTML = document.getElementById(`enviarContactoSmart`);

if (inputAceptaHTML){
    inputAceptaHTML.addEventListener('input', () => {
        inputAceptaHTML.value = "acepto";
        inputAceptaHTML.setAttribute('disabled', true);
    });
};

if(inputAceptaSmartHTML){
    inputAceptaSmartHTML.addEventListener('input', () => {
        inputAceptaSmartHTML.value = "acepto";
        inputAceptaSmartHTML.setAttribute('disabled', true);
    });
};

if (formularioConsultasHTML) {
    formularioConsultasHTML.addEventListener('submit', (e) => {
        e.preventDefault();
        let datosFormularioConsulta = new FormData(e.target);
        let consulta = new Consulta (datosFormularioConsulta.get("nombre"), datosFormularioConsulta.get("apellido"), datosFormularioConsulta.get("email"), datosFormularioConsulta.get("telefono"), datosFormularioConsulta.get("tipodeasunto"), datosFormularioConsulta.get("mensaje"));
        if ((inputAceptaHTML) || (inputAceptaSmartHTML)) {
            if ((inputAceptaHTML.value === "acepto") || (inputAceptaSmartHTML.value === "acepto")) {
                consultas.push(consulta);
                localStorage.setItem('consultas', JSON.stringify(consultas));
                formularioConsultasHTML.reset();
                inputAceptaHTML.value = "noacepto";
                inputAceptaHTML.removeAttribute('disabled');
                inputAceptaSmartHTML.value = "noacepto";
                inputAceptaSmartHTML.removeAttribute('disable');
                if (mensajeEnFormularioHTML) {
                    mensajeEnFormularioHTML.innerHTML = `
                    <p id="mensajeConsulta">¡Gracias por contactarnos, su mensaje sera respondido a la brevedad!</p>
                    `;
                    let mensajeConsultaHTML = document.getElementById(`mensajeConsulta`);
                    if(mensajeConsultaHTML) {
                        setTimeout(() => mensajeEnFormularioHTML.removeChild(mensajeConsultaHTML), 4000);
                    };
                };
            } else if ((inputAceptaHTML.value !== "acepto") || (inputAceptaSmartHTML.value !== "acepto")) {
                if (mensajeEnFormularioHTML) {
                    mensajeEnFormularioHTML.innerHTML = `
                    <p id="mensajeConsulta">Debe aceptar enviar el formulario. ¡Vuelve a intentarlo!</p>
                    `;
                    let mensajeConsultaHTML = document.getElementById(`mensajeConsulta`);
                    if(mensajeConsultaHTML) {
                        setTimeout(() => mensajeEnFormularioHTML.removeChild(mensajeConsultaHTML), 4000);
                    };
                };
            };
        };
    });
};

// PAGINA QUIENES SOMOS

let consultasQuienesSomos = [];

let formularioConsultaSiSirvioQuienesSomosHTML = document.getElementById(`formularioConsultaSiSirvioQuienesSomos`);
let mensajeQuienesSomosHTML = document.getElementById(`mensajeQuienesSomos`)

if(formularioConsultaSiSirvioQuienesSomosHTML) {
    formularioConsultaSiSirvioQuienesSomosHTML.addEventListener('submit', (e) => {
        e.preventDefault();
        let consultaQuienesSomos = {valor: e.target[0].checked};
        consultasQuienesSomos.push(consultaQuienesSomos);
        localStorage.setItem('sirvioInformacion', JSON.stringify(consultasQuienesSomos));
        formularioConsultaSiSirvioQuienesSomosHTML.reset();
        if (mensajeQuienesSomosHTML) {
            mensajeQuienesSomosHTML.innerHTML = `
                <p id="mensajeSiSirvioQuienesSomos">¡Gracias por ayudarnos a crecer!</p>
            `;
            let mensajeSiSirvioQuienesSomosHTML = document.getElementById(`mensajeSiSirvioQuienesSomos`);
            if (mensajeSiSirvioQuienesSomosHTML) {
                setTimeout(() => mensajeQuienesSomosHTML.removeChild(mensajeSiSirvioQuienesSomosHTML), 2000);
            };
        };
    });
};