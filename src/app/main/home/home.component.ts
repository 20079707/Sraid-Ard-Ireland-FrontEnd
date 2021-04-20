import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList1: Product[] = [];

  selectedProduct = null;

  constructor(
    private cookieService: CookieService,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getProducts1
    
  }

  getProducts1(): void {
    const urToken = this.cookieService.get('ur-token')
    if (!urToken) {
      this.router.navigate(['/auth']);
    } else {
      this.apiService.getProducts().subscribe(
        data1 => {
          this.productList1 = data1;
        },
        error => console.log(error)
      );
    }
  }

  
}
