export class Item {

    private static lastId = 0;
    id!: number;
    product!: string;
    price!: number;
    quantity!: number;

    constructor() {
    }

    get total(): number { 
        return this.price * this.quantity;
    }
}