import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Product } from '../../models/Product';

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

  ) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getDetails() {
    this.apiService.getProduct(this.product.product_code).subscribe(
      product => {
        this.product = product;
      },
      error => console.log(error)
    );

    }

    getProduct(): void {
      const product_code = Number(this.route.snapshot.paramMap.get('product_code'));
      this.apiService.getProduct(product_code)
        .subscribe(product => this.product = product);
    }
}
