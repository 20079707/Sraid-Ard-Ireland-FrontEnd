import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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
