import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from './models/Product';
import { CookieService } from 'ngx-cookie-service';
import { Category } from './models/Category';
import { Shop } from './models/Shop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  baseUrl = 'http://127.0.0.1:8000/';
  baseProductUrl = `${this.baseUrl}app/products/`
  baseCategoryUrl = `${this.baseUrl}app/categories/`
  baseShopUrl = `${this.baseUrl}app/shops/`
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
  ) { }

  /* Product CRUD */

  /* ADD: add a product to the server */
  

  addProduct(product: Product) { 
    const productUrl = `${this.baseProductUrl}` 
    return this.httpClient.post<Product>(productUrl, product, {headers: this.getAuthHeaders()}) 
  }

  // DELETE: delete the product from the server 
  deleteProduct(product_code: number): Observable<Product> {

    const productUrl = `${this.baseProductUrl}${product_code}/`
    return this.httpClient.delete<Product>(productUrl, {headers: this.getAuthHeaders()})

  }

  // PUT: update the product on the server 
  updateProduct(product_code: Product, product: Product): Observable<any> {

    const productUrl = `${this.baseProductUrl}${product_code}/`
    return this.httpClient.put<Product>(productUrl, product, {headers: this.getAuthHeaders()})

  }

  // GET: get all products from the server 
  getProducts() {

    return this.httpClient.get<Product[]>(this.baseProductUrl, {headers: this.getAuthHeaders()});
    
  }

  // GET: get one product from the server 
  getProduct(product_code: number): Observable<Product> {
    const productUrl = `${this.baseProductUrl}${product_code}/`
    return this.httpClient.get<Product>(productUrl, {headers: this.getAuthHeaders()});
    
  }

  // GET: get all categories from the server 
  getCategories() {

    return this.httpClient.get<Category[]>(this.baseCategoryUrl, {headers: this.getAuthHeaders()});
    
  }

  // GET: get one category from the server 
  getCategory(id: number): Observable<Category> {
    const url = `${this.baseCategoryUrl}${id}/`;

    return this.httpClient.get<Category>(url, {headers: this.getAuthHeaders()});
    
  }

  // GET: get all shops from the server 
  getShops() {

    return this.httpClient.get<Shop[]>(this.baseShopUrl, {headers: this.getAuthHeaders()});
    
  }

  // GET: get one shop from the server 
  getShop(business_reg: string): Observable<Shop> {
    const url = `${this.baseShopUrl}${business_reg}/`;

    return this.httpClient.get<Shop>(url, {headers: this.getAuthHeaders()});
    
  }

  
  

  

  loginUser(authData: any) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}auth/`, body, {headers: this.headers});
  }

  registerUser(authData: any) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}user/users/`, body, {headers: this.headers});
  }

  getAuthHeaders() {
    const token = this.cookieService.get('ur-token')
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
  }

}
