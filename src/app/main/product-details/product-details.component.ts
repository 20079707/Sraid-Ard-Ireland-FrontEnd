import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessengerService } from 'src/app/messenger.service';
import { ApiService } from '../../api.service';
import { Product } from '../../models/Product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
  
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private msg: MessengerService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(): void {
    const product_code = Number(this.route.snapshot.paramMap.get('product_code'));
    this.apiService.getProduct(product_code)
      .subscribe(product => this.product = product);
  }

  handleAddToCart() {
    this.msg.sendMsg(this.product)
  }

  goBack(): void {
    this.location.back();
  }
}
