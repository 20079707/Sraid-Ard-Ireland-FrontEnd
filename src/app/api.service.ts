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
export class ApiService { // this is the API serivice that calls the API


  baseUrl = 'http://127.0.0.1:8000/'; // this is the base url 
  baseProductUrl = `${this.baseUrl}app/products/` // this calls the base url with products extention
  baseCategoryUrl = `${this.baseUrl}app/categories/`
  baseShopUrl = `${this.baseUrl}app/shops/`
  headers = new HttpHeaders({
    'Content-Type': 'application/json', // sets content type 
  });

  imageHeaders() { // new header for the add product
    const token = this.cookieService.get('ur-token')
    return new HttpHeaders({
    Authorization: `Token ${token}` //requires token
  });
  }

  

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
  ) { }

  /* Product CRUD */

  /* ADD: add a product to the server */
  

  addProduct(product: Product) { 
    const productUrl = `${this.baseProductUrl}` 
    return this.httpClient.post<Product>(productUrl, product, {headers: this.imageHeaders()})
  }

  // DELETE: delete the product from the server 
  deleteProduct(product_code: number): Observable<Product> {

    const productUrl = `${this.baseProductUrl}${product_code}/`
    return this.httpClient.delete<Product>(productUrl, {headers: this.getAuthHeaders()})

  }

  // PUT: update the product on the server 
  updateProduct(product_code: number, product: Product): Observable<Product> {

    const productUrl = `${this.baseProductUrl}${product_code}/`
    return this.httpClient.put<Product>(productUrl, product, {headers: this.imageHeaders()})

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
  getShop(id: number): Observable<Shop> {
    const url = `${this.baseShopUrl}${id}/`;

    return this.httpClient.get<Shop>(url, {headers: this.getAuthHeaders()});
    
  }
  

  
// GET: user from server
  loginUser(authData: any) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}auth/`, body, {headers: this.headers});
  }

  // POST: a new user to server
  registerUser(authData: any) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}user/users/`, body, {headers: this.headers});
  }

  // retrieves authentication headers 
  getAuthHeaders() {
    const token = this.cookieService.get('ur-token')
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
  }

}
