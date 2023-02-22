class API {
    #url;

    constructor() {
        this.#url = "https://bsite.net/metalflap";
    };

    getUrl() {
        return this.#url;
    };
}

export class SucursalApi extends API {
    constructor() {
        super();
    };

    async getSucursal() {
        const res = await fetch(`${this.getUrl()}/td-sucursal`);
        return await res.json();
    };
};

export class ProductoApi extends API {
    constructor() {
        super();
    };

    async getProductoBySucu(id) {
        const res = await fetch(`${this.getUrl()}/td-producto/idSucursal/${id}`);
        return await res.json();
    };
};

export class CategoriaApi extends API {
    constructor() {
        super();
    };

    async getCategoria() {
        const res = await fetch(`${this.getUrl()}/td-categoria`);
        return await res.json();
    };
};

