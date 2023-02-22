
window.onload = () => {
    inicializarAPi();
};

function inicializarAPi() {
    fetch("https://bsite.net/metalflap/td-sucursal")
    .then(data => data.json())
    .then(dt => console.log(dt))
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