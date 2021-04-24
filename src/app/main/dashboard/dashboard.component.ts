import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: Product[] =[]




  constructor(
    private cookieService: CookieService,
    private router: Router,
    private apiService: ApiService
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

  

  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.apiService.deleteProduct(product.product_code).subscribe();
  }
}
