export function RenderCategoria(dt) {
    const listaCategorias = document.querySelector(".listaCategorias");

    let opcion = document.createElement("option");
    opcion.value = 0;
    opcion.innerText = "-- Seleccione Categoria --"

    listaCategorias.appendChild(opcion);

    console.log(dt)
}