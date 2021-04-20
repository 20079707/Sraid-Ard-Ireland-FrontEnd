import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/Shop';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shops: Shop[] = [];
  

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.getShops()
  }

  getShops() {
    const urToken = this.cookieService.get('ur-token')
    if (!urToken) {
      this.router.navigate(['/auth']);
    } else {

      this.apiService.getShops().subscribe(
        data => {
        this.shops = data;
      },
        error => console.log(error)

    );
    }
}
}
  
