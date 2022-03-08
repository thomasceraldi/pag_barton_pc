// AURICULARES

let catalogoModoAuriculares;

if (localStorage.getItem("auricularesModo")) {
    catalogoModoAuriculares = localStorage.getItem("auricularesModo");
} else {
    catalogoModoAuriculares = "auricularesHorizontal";
};

localStorage.setItem("auricularesModo", catalogoModoAuriculares);


let catalogoAuricularesHorizontalHTML = document.getElementById(`productosCatalogoAuricularesHorizontal`);
let catalogoAuricularesVerticalHTML = document.getElementById(`productosCatalogoAuricularesVertical`);

let botonAccionGrillaAuriHTML = document.getElementById(`botonAccionGrillaAuri`);
let botonAccionListaAuriHTML = document.getElementById(`botonAccionListaAuri`);

let botonListaAuriHTML = document.getElementById(`botonListaAuri`);
let botonGrillaAuriHTML = document.getElementById(`botonGrillaAuri`);

if(document.getElementById(`contenedorGridArea_auricular`)) {
    modoStorage("auricularesModo", "auricularesHorizontal", botonListaAuriHTML, catalogoAuricularesHorizontalHTML, catalogoAuricularesVerticalHTML, botonGrillaAuriHTML);

    accionGrilla(botonAccionGrillaAuriHTML, botonGrillaAuriHTML, botonListaAuriHTML, catalogoAuricularesVerticalHTML, catalogoAuricularesHorizontalHTML, tarjetaProductosVertical(catalogoAuricularesVerticalHTML, "auricular"), "auricularesModo", "auricularesVertical");

    accionLista(botonAccionListaAuriHTML, botonListaAuriHTML, botonGrillaAuriHTML, catalogoAuricularesHorizontalHTML, catalogoAuricularesVerticalHTML, tarjetaProductosHorizontal(catalogoAuricularesHorizontalHTML, "auricular"), "auricularesModo", "auricularesHorizontal");
};

// MOUSE

let catalogoModoMouse;

if (localStorage.getItem("mouseModo")) {
    catalogoModoMouse = localStorage.getItem("mouseModo");
} else {
    catalogoModoMouse = "mouseHorizontal";
};

localStorage.setItem("mouseModo", catalogoModoMouse);


let catalogoMouseHorizontalHTML = document.getElementById(`productosCatalogoMouseHorizontal`);
let catalogoMouseVerticalHTML = document.getElementById(`productosCatalogoMouseVertical`);

let botonAccionGrillaMouseHTML = document.getElementById(`botonAccionGrillaMouse`);
let botonAccionListaMouseHTML = document.getElementById(`botonAccionListaMouse`);

let botonListaMouseHTML = document.getElementById(`botonListaMouse`);
let botonGrillaMouseHTML = document.getElementById(`botonGrillaMouse`);

if(document.getElementById(`contenedorGridArea_mouse`)) {
    modoStorage("mouseModo", "mouseHorizontal", botonListaMouseHTML, catalogoMouseHorizontalHTML, catalogoMouseVerticalHTML, botonGrillaMouseHTML);

    accionGrilla(botonAccionGrillaMouseHTML, botonGrillaMouseHTML, botonListaMouseHTML, catalogoMouseVerticalHTML, catalogoMouseHorizontalHTML, tarjetaProductosVertical(catalogoMouseVerticalHTML, "mouse"), "mouseModo", "mouseVertical");

    accionLista(botonAccionListaMouseHTML, botonListaMouseHTML, botonGrillaMouseHTML, catalogoMouseHorizontalHTML, catalogoMouseVerticalHTML, tarjetaProductosHorizontal(catalogoMouseHorizontalHTML, "mouse"), "mouseModo", "mouseHorizontal");
};

// TECLADOS

let catalogoModoTeclados;

if (localStorage.getItem("tecladosModo")) {
    catalogoModoTeclados = localStorage.getItem("tecladosModo");
} else {
    catalogoModoTeclados = "tecladosHorizontal";
};

localStorage.setItem("tecladosModo", catalogoModoTeclados);


let catalogoTecladosHorizontalHTML = document.getElementById(`productosCatalogoTecladosHorizontal`);
let catalogoTecladosVerticalHTML = document.getElementById(`productosCatalogoTecladosVertical`);

let botonAccionGrillaTecladosHTML = document.getElementById(`botonAccionGrillaTeclados`);
let botonAccionListaTecladosHTML = document.getElementById(`botonAccionListaTeclados`);

let botonListaTecladosHTML = document.getElementById(`botonListaTeclados`);
let botonGrillaTecladosHTML = document.getElementById(`botonGrillaTeclados`);

if(document.getElementById(`contenedorGridArea_teclado`)) {
    modoStorage("tecladosModo", "tecladosHorizontal", botonListaTecladosHTML, catalogoTecladosHorizontalHTML, catalogoTecladosVerticalHTML, botonGrillaTecladosHTML);

    accionGrilla(botonAccionGrillaTecladosHTML, botonGrillaTecladosHTML, botonListaTecladosHTML, catalogoTecladosVerticalHTML, catalogoTecladosHorizontalHTML, tarjetaProductosVertical(catalogoTecladosVerticalHTML, "teclado"), "tecladosModo", "tecladosVertical");

    accionLista(botonAccionListaTecladosHTML, botonListaTecladosHTML, botonGrillaTecladosHTML, catalogoTecladosHorizontalHTML, catalogoTecladosVerticalHTML, tarjetaProductosHorizontal(catalogoTecladosHorizontalHTML, "teclado"), "tecladosModo", "tecladosHorizontal");
};

// PARLANTES

let catalogoModoParlantes;

if (localStorage.getItem("parlantesModo")) {
    catalogoModoParlantes = localStorage.getItem("parlantesModo");
} else {
    catalogoModoParlantes = "parlantesHorizontal";
};

localStorage.setItem("parlantesModo", catalogoModoParlantes);


let catalogoParlantesHorizontalHTML = document.getElementById(`productosCatalogoParlantesHorizontal`);
let catalogoParlantesVerticalHTML = document.getElementById(`productosCatalogoParlantesVertical`);

let botonAccionGrillaParlantesHTML = document.getElementById(`botonAccionGrillaParlantes`);
let botonAccionListaParlantesHTML = document.getElementById(`botonAccionListaParlantes`);

let botonListaParlantesHTML = document.getElementById(`botonListaParlantes`);
let botonGrillaParlantesHTML = document.getElementById(`botonGrillaParlantes`);

if(document.getElementById(`contenedorGridArea_parlante`)) {
    modoStorage("parlantesModo", "parlantesHorizontal", botonListaParlantesHTML, catalogoParlantesHorizontalHTML, catalogoParlantesVerticalHTML, botonGrillaParlantesHTML);

    accionGrilla(botonAccionGrillaParlantesHTML, botonGrillaParlantesHTML, botonListaParlantesHTML, catalogoParlantesVerticalHTML, catalogoParlantesHorizontalHTML, tarjetaProductosVertical(catalogoParlantesVerticalHTML, "parlante"), "parlantesModo", "parlantesVertical");

    accionLista(botonAccionListaParlantesHTML, botonListaParlantesHTML, botonGrillaParlantesHTML, catalogoParlantesHorizontalHTML, catalogoParlantesVerticalHTML, tarjetaProductosHorizontal(catalogoParlantesHorizontalHTML, "parlante"), "parlantesModo", "parlantesHorizontal");
};

// DISCOS

let catalogoModoDiscos;

if (localStorage.getItem("discosModo")) {
    catalogoModoDiscos = localStorage.getItem("discosModo");
} else {
    catalogoModoDiscos = "discosHorizontal";
};

localStorage.setItem("discosModo", catalogoModoDiscos);


let catalogoDiscosHorizontalHTML = document.getElementById(`productosCatalogoDiscosHorizontal`);
let catalogoDiscosVerticalHTML = document.getElementById(`productosCatalogoDiscosVertical`);

let botonAccionGrillaDiscosHTML = document.getElementById(`botonAccionGrillaDiscos`);
let botonAccionListaDiscosHTML = document.getElementById(`botonAccionListaDiscos`);

let botonListaDiscosHTML = document.getElementById(`botonListaDiscos`);
let botonGrillaDiscosHTML = document.getElementById(`botonGrillaDiscos`);

if(document.getElementById(`contenedorGridArea_disco`)) {
    modoStorage("discosModo", "discosHorizontal", botonListaDiscosHTML, catalogoDiscosHorizontalHTML, catalogoDiscosVerticalHTML, botonGrillaDiscosHTML);

    accionGrilla(botonAccionGrillaDiscosHTML, botonGrillaDiscosHTML, botonListaDiscosHTML, catalogoDiscosVerticalHTML, catalogoDiscosHorizontalHTML, tarjetaProductosVertical(catalogoDiscosVerticalHTML, "disco"), "discosModo", "discosVertical");

    accionLista(botonAccionListaDiscosHTML, botonListaDiscosHTML, botonGrillaDiscosHTML, catalogoDiscosHorizontalHTML, catalogoDiscosVerticalHTML, tarjetaProductosHorizontal(catalogoDiscosHorizontalHTML, "disco"), "discosModo", "discosHorizontal");
};

// FILTROS - SUBCATEGORIAS

let filtroSubcategoriaHTML = document.getElementById(`filtroSubcategoria`);

if (filtroSubcategoriaHTML) {
    filtroSubcategoriaHTML.addEventListener('click', (e) => {
        e.preventDefault();
        // AURICULARES
        if(e.target.id === "filtroAurisGamers") {
            let filtroAurisGamersHTML = document.getElementById(`filtroAurisGamers`);
            accionFiltro(filtroAurisGamersHTML, filtroSubcategoria("aurisgamer"));
        };
        if(e.target.id === "filtroAurisInEars") {
            let filtroAurisInEarsHTML = document.getElementById(`filtroAurisInEars`);
            accionFiltro(filtroAurisInEarsHTML, filtroSubcategoria("aurisinear"));
        };
        if(e.target.id === "filtroAurisOnEars") {
            let filtroAurisOnEarsHTML = document.getElementById(`filtroAurisOnEars`);
            accionFiltro(filtroAurisOnEarsHTML, filtroSubcategoria("aurisonear"));
        };
        // MOUSE
        if(e.target.id === "filtroMouseGamers") {
            let filtroMouseGamersHTML = document.getElementById(`filtroMouseGamers`);
            accionFiltro(filtroMouseGamersHTML, filtroSubcategoria("mousegamers"));
        };
        if(e.target.id === "filtroMouseUsb") {
            let filtroMouseUsbHTML = document.getElementById(`filtroMouseUsb`);
            accionFiltro(filtroMouseUsbHTML, filtroSubcategoria("mouseusb"));
        };
        if(e.target.id === "filtroMouseInalambricos") {
            let filtroMouseInalambricosHTML = document.getElementById(`filtroMouseInalambricos`);
            accionFiltro(filtroMouseInalambricosHTML, filtroSubcategoria("mouseinalambrico"));
        };
        if(e.target.id === "filtroMousePad") {
            let filtroMousePadHTML = document.getElementById(`filtroMousePad`);
            accionFiltro(filtroMousePadHTML, filtroSubcategoria("mousepad"));
        };
        // TECLADOS
        if(e.target.id === "filtroTecladosGamers") {
            let filtroTecladosGamersHTML = document.getElementById(`filtroTecladosGamers`);
            accionFiltro(filtroTecladosGamersHTML, filtroSubcategoria("tecladogamers"));
        };
        if(e.target.id === "filtroTecladosUsb") {
            let filtroTecladosUsbHTML = document.getElementById(`filtroTecladosUsb`);
            accionFiltro(filtroTecladosUsbHTML, filtroSubcategoria("tecladousb"));
        };
        if(e.target.id === "filtroTecladosInalambricos") {
            let filtroTecladosInalambricosHTML = document.getElementById(`filtroTecladosInalambricos`);
            accionFiltro(filtroTecladosInalambricosHTML, filtroSubcategoria("tecladoinalambricos"));
        };
        // PARLANTES
        if(e.target.id === "filtroParlantes2.0") {
            let filtroParlantesDosConCeroHTML = document.getElementById(`filtroParlantes2.0`);
            accionFiltro(filtroParlantesDosConCeroHTML, filtroSubcategoria("parlante2.0"));
        };
        if(e.target.id === "filtroParlantes2.1") {
            let filtroParlantesDosConUnoHTML = document.getElementById(`filtroParlantes2.1`);
            accionFiltro(filtroParlantesDosConUnoHTML, filtroSubcategoria("parlante2.1"));
        };
        if(e.target.id === "filtroParlantesBluetooth") {
            let filtroParlantesBluetoothHTML = document.getElementById(`filtroParlantesBluetooth`);
            accionFiltro(filtroParlantesBluetoothHTML, filtroSubcategoria("parlantebluetooth"));
        };
        // DISCOS
        if(e.target.id === "filtroDiscosExternos") {
            let filtroDiscosExternosHTML = document.getElementById(`filtroDiscosExternos`);
            accionFiltro(filtroDiscosExternosHTML, filtroSubcategoria("discoexterno"));
        };
        if(e.target.id === "filtroDiscosSsd") {
            let filtroDiscosSsdHTML = document.getElementById(`filtroDiscosSsd`);
            accionFiltro(filtroDiscosSsdHTML, filtroSubcategoria("discossd"));
        };
        if(e.target.id === "filtroDiscosNvme") {
            let filtroDiscosNvmeHTML = document.getElementById(`filtroDiscosNvme`);
            accionFiltro(filtroDiscosNvmeHTML, filtroSubcategoria("disconvme"));
        };
        if(e.target.id === "filtroDiscosRigidos") {
            let filtroDiscosRigidosHTML = document.getElementById(`filtroDiscosRigidos`);
            accionFiltro(filtroDiscosRigidosHTML, filtroSubcategoria("discorigido"));
        };
    });
};

// FILTROS - MARCAS

let filtroMarcaHTML = document.getElementById(`filtroMarca`);

if(filtroMarcaHTML) {
    filtroMarcaHTML.addEventListener('click', (e) => {
        e.preventDefault();
        // AURICULARES
        if(e.target.id === "filtroAurisHyperx") {
            let filtroAurisHyperxHTML = document.getElementById(`filtroAurisHyperx`);
            accionFiltro(filtroAurisHyperxHTML, filtroMarca("aurishyperx"));
        };
        if(e.target.id === "filtroAurisLogitech") {
            let filtroAurisLogitechHTML = document.getElementById(`filtroAurisLogitech`);
            accionFiltro(filtroAurisLogitechHTML, filtroMarca("aurislogitech"));
        };
        if(e.target.id === "filtroAurisJbl") {
            let filtroAurisJblHTML = document.getElementById(`filtroAurisJbl`);
            accionFiltro(filtroAurisJblHTML, filtroMarca("aurisjbl"));
        };
        if(e.target.id === "filtroAurisNisuta") {
            let filtroAurisNisutaHTML = document.getElementById(`filtroAurisNisuta`);
            accionFiltro(filtroAurisNisutaHTML, filtroMarca("aurisnisuta"));
        };
        if(e.target.id === "filtroAurisOvansu") {
            let filtroAurisOvansuHTML = document.getElementById(`filtroAurisOvansu`);
            accionFiltro(filtroAurisOvansuHTML, filtroMarca("aurisovansu"));
        };
        if(e.target.id === "filtroAurisCorsair") {
            let filtroAurisCorsairHTML = document.getElementById(`filtroAurisCorsair`);
            accionFiltro(filtroAurisCorsairHTML, filtroMarca("auriscorsair"));
        };
        if(e.target.id === "filtroAurisGenius") {
            let filtroAurisGeniusHTML = document.getElementById(`filtroAurisGenius`);
            accionFiltro(filtroAurisGeniusHTML, filtroMarca("aurisgenius"));
        };
        if(e.target.id === "filtroAurisMsi") {
            let filtroAurisMsiHTML = document.getElementById(`filtroAurisMsi`);
            accionFiltro(filtroAurisMsiHTML, filtroMarca("aurismsi"));
        };
        // MOUSE
        if(e.target.id === "filtroMouseHyperx") {
            let filtroMouseHyperxHTML = document.getElementById(`filtroMouseHyperx`);
            accionFiltro(filtroMouseHyperxHTML, filtroMarca("mousehyperx"));
        };
        if(e.target.id === "filtroMouseLogitech") {
            let filtroMouseLogitechHTML = document.getElementById(`filtroMouseLogitech`);
            accionFiltro(filtroMouseLogitechHTML, filtroMarca("mouselogitech"));
        };
        if(e.target.id === "filtroMouseBkt") {
            let filtroMouseBktHTML = document.getElementById(`filtroMouseBkt`);
            accionFiltro(filtroMouseBktHTML, filtroMarca("mousebkt"));
        };
        if(e.target.id === "filtroMouseGenius") {
            let filtroMouseGeniusHTML = document.getElementById(`filtroMouseGenius`);
            accionFiltro(filtroMouseGeniusHTML, filtroMarca("mousegenius"));
        };
        if(e.target.id === "filtroMouseMsi") {
            let filtroMouseMsiHTML = document.getElementById(`filtroMouseMsi`);
            accionFiltro(filtroMouseMsiHTML, filtroMarca("mousemsi"));
        };
        // TECLADOS
        if(e.target.id === "filtroTecladosHyperx") {
            let filtroTecladosHyperxHTML = document.getElementById(`filtroTecladosHyperx`);
            accionFiltro(filtroTecladosHyperxHTML, filtroMarca("tecladohyperx"));
        };
        if(e.target.id === "filtroTecladosLogitech") {
            let filtroTecladosLogitechHTML = document.getElementById(`filtroTecladosLogitech`);
            accionFiltro(filtroTecladosLogitechHTML, filtroMarca("tecladologitech"));
        };
        if(e.target.id === "filtroTecladosGenius") {
            let filtroTecladosGeniusHTML = document.getElementById(`filtroTecladosGenius`);
            accionFiltro(filtroTecladosGeniusHTML, filtroMarca("tecladogenius"));
        };
        if(e.target.id === "filtroTecladosNisuta") {
            let filtroTecladosNisutaHTML = document.getElementById(`filtroTecladosNisuta`);
            accionFiltro(filtroTecladosNisutaHTML, filtroMarca("tecladonisuta"));
        };
        // PARLANTES
        if(e.target.id === "filtroParlantesLogitech") {
            let filtroParlantesLogitechHTML = document.getElementById(`filtroParlantesLogitech`);
            accionFiltro(filtroParlantesLogitechHTML, filtroMarca("parlantelogitech"));
        };
        if(e.target.id === "filtroParlantesJbl") {
            let filtroParlantesJblHTML = document.getElementById(`filtroParlantesJbl`);
            accionFiltro(filtroParlantesJblHTML, filtroMarca("parlantejbl"));
        };
        if(e.target.id === "filtroParlantesNisuta") {
            let filtroParlantesNisutaHTML = document.getElementById(`filtroParlantesNisuta`);
            accionFiltro(filtroParlantesNisutaHTML, filtroMarca("parlantenisuta"));
        };
        if(e.target.id === "filtroParlantesOvansu") {
            let filtroParlantesOvansuHTML = document.getElementById(`filtroParlantesOvansu`);
            accionFiltro(filtroParlantesOvansuHTML, filtroMarca("parlanteovansu"));
        };
        if(e.target.id === "filtroParlantesGenius") {
            let filtroParlantesGeniusHTML = document.getElementById(`filtroParlantesGenius`);
            accionFiltro(filtroParlantesGeniusHTML, filtroMarca("parlantegenius"));
        };
        // DISCOS
        if(e.target.id === "filtroDiscosKingston") {
            let filtroDiscosKingstonHTML = document.getElementById(`filtroDiscosKingston`);
            accionFiltro(filtroDiscosKingstonHTML, filtroMarca("discokingston"));
        };
        if(e.target.id === "filtroDiscosSeagate") {
            let filtroDiscosSeagateHTML = document.getElementById(`filtroDiscosSeagate`);
            accionFiltro(filtroDiscosSeagateHTML, filtroMarca("discoseagate"));
        };
        if(e.target.id === "filtroDiscosWesternDigital") {
            let filtroDiscosWesternDigitalHTML = document.getElementById(`filtroDiscosWesternDigital`);
            accionFiltro(filtroDiscosWesternDigitalHTML, filtroMarca("discowesterndigital"));
        };
        if(e.target.id === "filtroDiscosAdata") {
            let filtroDiscosAdataHTML = document.getElementById(`filtroDiscosAdata`);
            accionFiltro(filtroDiscosAdataHTML, filtroMarca("discoadata"));
        };
        if(e.target.id === "filtroDiscosCorsair") {
            let filtroDiscosCorsairHTML = document.getElementById(`filtroDiscosCorsair`);
            accionFiltro(filtroDiscosCorsairHTML, filtroMarca("discocorsair"));
        };
        if(e.target.id === "filtroDiscosGigabyte") {
            let filtroDiscosGigabyteHTML = document.getElementById(`filtroDiscosGigabyte`);
            accionFiltro(filtroDiscosGigabyteHTML, filtroMarca("discogigabyte"));
        };
    });
};

// SACAR FILTRO

let sacarFiltrosHTML = document.getElementById(`sacarFiltros`);

if(sacarFiltrosHTML) {
    sacarFiltrosHTML.addEventListener('click', () => {
        sacarFiltro();
    });
};

// BUSCAR PRODUCTOS

let buscadorHTML = document.getElementById(`buscador`);
let busquedasHTML = document.getElementById(`busquedas`);
let buscadorBotonHTML = document.getElementById(`buscadorBoton`);

buscar(buscadorHTML);
buscar(buscadorBotonHTML);