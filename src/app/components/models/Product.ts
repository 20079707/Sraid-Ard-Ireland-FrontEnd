export interface Address {
    address_line1: string;
    address_line2: string;
    county: string;
    eir_code: string;
    town_city: string;
};

export interface Shop{
    description: string;
    shop_name: string;
    slogan: string;
    address: Address;
};

export interface Product {
    product_code: number;
    name: string;
    price: string;
    product_description: string;
    product_image: string;
    last_update: string;
    shop: Shop;
}
