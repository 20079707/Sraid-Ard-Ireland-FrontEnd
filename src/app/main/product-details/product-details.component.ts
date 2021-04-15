import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  selectedProduct = null;

  @Input()
  product: any;
  @Output() updateProduct = new EventEmitter();
  
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  getDetails() {
    this.apiService.getProduct(this.product.product_code).subscribe(
      product => {
        this.updateProduct.emit(product);
      },
      error => console.log(error)
    );
  }

  selectProduct(product: null) {
    this.selectedProduct = product;
    console.log('selectedProduct', this.selectedProduct);
  }

}
