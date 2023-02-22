export class Producto {
    #id;
    #nombre;
    #precio;
    #link;
    #stock;
    #etiqueta;
    #descripcion;
    #idCategoria;
    #idSucursal;

    constructor(id, nombre, precio, link, stock, etiqueta, descripcion, idCategoria, idSucursal) {
        this.#id = id;
        this.#nombre = nombre;
        this.#precio = precio;
        this.#link = link;
        this.#stock = stock;
        this.#etiqueta = etiqueta;
        this.#descripcion = descripcion;
        this.#idCategoria = idCategoria;
        this.#idSucursal = idSucursal;
    };

    getId() {
        return this.#id;
    };

    getNombre() {
        return this.#nombre;
    };
};