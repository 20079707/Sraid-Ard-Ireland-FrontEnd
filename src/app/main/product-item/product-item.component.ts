import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product;
  @Output() selectProduct = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  productClicked(product: Product) {
    this.selectProduct.emit(product);
  }

}
