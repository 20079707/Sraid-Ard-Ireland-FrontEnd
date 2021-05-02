import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from './models/cart-item';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient
  ) { }

  }
