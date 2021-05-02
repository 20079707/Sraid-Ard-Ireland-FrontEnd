import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../api.service';
import { Product } from '../../models/Product';
import { Router } from '@angular/router';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  selectedProduct?: Product;
  product!: Product;

  constructor(
    private cookieService: CookieService,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    const urToken = this.cookieService.get('ur-token')
    if (!urToken) {
      this.router.navigate(['/auth']);
    } else {
      this.apiService.getProducts().subscribe(
      data => {
        this.products = data;
        console.log('selectedProduct', this.products);
      },
      error => console.log(error)
    );
    }
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
    console.log('selectedProduct', this.selectedProduct);
  }
}
