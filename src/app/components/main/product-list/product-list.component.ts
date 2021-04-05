import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: any = [];
  @Output() selectProduct = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  productClicked(product: any) {
  this.selectProduct.emit(product);
  }
}
