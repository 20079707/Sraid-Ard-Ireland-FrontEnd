import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products = [];
  @Output() selectProduct = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  productClicked(product: any) {
  this.selectProduct.emit(product);
  }
}
