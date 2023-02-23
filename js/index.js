import { SucursalApi, ProductoApi, CategoriaApi } from "../class/ApiTienda.js";
import { RenderListaSucursales } from "../component/RenderSucursal.js";
import { RenderProductos } from "../component/RenderProductos.js";
import { RenderCategoria } from "../component/RenderCategoria.js";

window.onload = () => {
    inicializarAPi();
};

function inicializarAPi() {
    const listaSucursales = new SucursalApi().getSucursal()
    listaSucursales.then(data => {
        RenderListaSucursales(data);
    })
    .then(() => {
        const opcionSucursales =  document.querySelector(".listaSucursales");
        opcionSucursales.addEventListener("change", () => clickSucursal(opcionSucursales.value))
    })
    .catch(err => console.log(err));
};

function clickSucursal(id) {
    Promise.all([
        new CategoriaApi().getCategoria().then(data => data),
        new ProductoApi().getProductoBySucu(id).then(data => data)
    ])
    .then(arr => {
        const arrIdCateg = [];
        const listaCategorias = document.querySelector(".listaCategorias");
        listaCategorias.innerHTML = "";

        arr[1].forEach(e => {
            if (arrIdCateg.indexOf(e.idCategoria) == -1) {
                arrIdCateg.push(e.idCategoria);
            };
        });

        RenderCategoria(arrIdCateg);
    });
}

// function selectSucursal(id) {
//     const productos = new ProductoApi().getProductoBySucu(id);
//     productos.then(data => {
//         RenderProductos(data);
//     });
// }

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