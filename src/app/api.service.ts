import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  baseUrl = 'http://127.0.0.1:8000/app/products/'
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 6c89d82b2e97e831ca8229174b38d6ffe6cb47d5'
  });



  constructor(
    private httpClient: HttpClient,

  ) { }

  getProducts() {

    return this.httpClient.get(this.baseUrl, {headers: this.headers});
    
  }
}
