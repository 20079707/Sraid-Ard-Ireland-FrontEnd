import { Product } from './Product';
export class CartItem {
    id: number;
    product_code: number;
    productName: string;
    quantity: number;
    price: string;

    constructor(id: number, product: Product) {
        this.id = id
        this.product_code = product.product_code
        this.productName = product.name
        this.quantity = product.quantity
        this.price = product.price
    }
    
}

