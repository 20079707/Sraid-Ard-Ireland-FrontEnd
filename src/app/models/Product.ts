import { Shop } from './Shop'
import { Category } from './Category';

export interface Product {  //product model
    product_code: number;
    name: string;
    price: string;
    product_description: string;
    quantity: number;
    colour: string;
    stock: number;
    category: string;
    weight: string;
    shipping_fee: string;
    product_image: string;
    cover_image: string;
    last_update: string;
    shop: Shop;
}
