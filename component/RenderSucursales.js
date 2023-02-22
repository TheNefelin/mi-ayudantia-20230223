export function RenderSucursales(dt) {
    const listaSucursales =  document.querySelector(".listaSucursales");

    dt.map(e => {
        const button = document.createElement("button");
        button.value = e.id;
        button.innerText = e.nombre;

        listaSucursales.appendChild(button)
    });
};

