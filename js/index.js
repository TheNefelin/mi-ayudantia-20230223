import { SucursalApi, ProductoApi } from "../class/ApiTienda.js";
import { RenderSucursales } from "../component/RenderSucursales.js";
import { RenderProductos } from "../component/RenderProductos.js";

window.onload = () => {
    inicializarAPi();
};

function inicializarAPi() {
    const sucursales = new SucursalApi().getSucursal();
    sucursales.then(data => {
        RenderSucursales(data);
        
        const listaBtn =  document.querySelectorAll(".listaSucursales button");
        listaBtn.forEach(e => e.addEventListener("click", () => selectSucursal(e.value)));
    });
}

function selectSucursal(id) {
    const productos = new ProductoApi().getProductoBySucu(id);
    productos.then(data => {
        RenderProductos(data);
    });
}

// -- Bodega -----------------------------------------------------------
// ---------------------------------------------------------------------
function setBodegaLS(bodega) {
    deleteLS();
    localStorage.setItem('bodega', JSON.stringify(bodega));
}

function getBodegaLS() {
    return JSON.parse(localStorage.getItem('bodega'));
}

function delBodegaLS() {
    localStorage.removeItem('bodega');
}

// -- Carrito ----------------------------------------------------------
// ---------------------------------------------------------------------
function setCarritoLS(carrito) {
    deleteLS();
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function getCarritoLS() {
    return JSON.parse(localStorage.getItem('carrito'));
}

function delCarritoLS() {
    localStorage.removeItem('carrito');
}

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------