import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any = [];
  selectedProduct = null;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {    
    this.apiService.getProducts().subscribe(
    data => {
      this.products = data;
    },
    error => console.log(error)
  );
}

selectProduct(product: null) {
  this.selectedProduct = product;
  console.log('selectedProduct', this.selectedProduct);
  }
}
