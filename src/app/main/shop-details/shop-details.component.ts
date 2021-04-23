import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  ) { }

  ngOnInit(): void {
    this.getShop()
  }

  getShop(): void {
    const business_reg = String(this.route.snapshot.paramMap.get('business_reg'));
    this.apiService.getShop(business_reg)
      .subscribe(shop => this.shop = shop);
  }

}
