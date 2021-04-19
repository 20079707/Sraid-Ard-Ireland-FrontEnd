import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from './models/Product';
import { CookieService } from 'ngx-cookie-service';
import { Category } from './models/Category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  baseUrl = 'http://127.0.0.1:8000/';
  baseProductUrl = `${this.baseUrl}app/products/`
  baseCategoryUrl = `${this.baseUrl}app/categories/`
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

  getCategories() {

    return this.httpClient.get<Category[]>(this.baseCategoryUrl, {headers: this.getAuthHeaders()});
    
  }

  getProduct(product_code: number) {

    return this.httpClient.get<Product[]>(`${this.baseProductUrl}${product_code}/`, {headers: this.getAuthHeaders()});
    
  }

  getCategory(id: number) {

    return this.httpClient.get<Category[]>(`${this.baseCategoryUrl}${id}/`, {headers: this.getAuthHeaders()});
    
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
