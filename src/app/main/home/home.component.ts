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


  browse_products: string = "/assets/img/Browse_Products.png";
  browse_shops: string = "/assets/img/Browse_Shop.png";
  iMow: string = "/assets/img/iMow.jpg";
  hot_cross_buns: string = "/assets/img/HotCrossBuns.jpg";
  pork_chop: string = "/assets/img/porkchop.jpg";
  selectedProduct = null;

  constructor(
    private cookieService: CookieService,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const urToken = this.cookieService.get('ur-token')
    if (!urToken) {
      this.router.navigate(['/auth']);
    } else {
      this.router.navigate(['main/home']);
    }
  }

  
}
