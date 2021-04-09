import { Shop } from './Shop'

export interface Product {
    product_code: number;
    name: string;
    price: string;
    product_description: string;
    product_image: string;
    cover_image: string;
    last_update: string;
    shop: Shop;
}
