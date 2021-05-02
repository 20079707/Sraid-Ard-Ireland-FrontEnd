import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Shop } from 'src/app/models/Shop';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {

  shop!: Shop;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.getShop()
  }

  getShop(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getShop(id)
      .subscribe(shop => this.shop = shop);
  }

  products() {
    this.router.navigate(['main/products']);
  }
}
