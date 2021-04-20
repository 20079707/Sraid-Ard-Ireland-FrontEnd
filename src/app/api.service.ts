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

  getProducts() {

    return this.httpClient.get<Product[]>(this.baseProductUrl, {headers: this.getAuthHeaders()});
    
  }

  getProduct(product_code: number): Observable<Product> {
    const productUrl = `${this.baseProductUrl}${product_code}/`
    return this.httpClient.get<Product>(productUrl, {headers: this.getAuthHeaders()});
    
  }

  getCategories() {

    return this.httpClient.get<Category[]>(this.baseCategoryUrl, {headers: this.getAuthHeaders()});
    
  }

  getCategory(id: number): Observable<Category> {
    const url = `${this.baseCategoryUrl}${id}/`;

    return this.httpClient.get<Category>(url, {headers: this.getAuthHeaders()});
    
  }

  getShops() {

    return this.httpClient.get<Shop[]>(this.baseShopUrl, {headers: this.getAuthHeaders()});
    
  }

  getShop(business_reg: number) {

    return this.httpClient.get<Shop>(`${this.baseShopUrl}${business_reg}/`, {headers: this.getAuthHeaders()});
    
  }
  

  

  loginUser(authData: any) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}auth/`, body, {headers: this.headers});
  }

  registerUser(authData: any) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}app/users/`, body, {headers: this.headers});
  }

  getAuthHeaders() {
    const token = this.cookieService.get('ur-token')
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
  }

}
