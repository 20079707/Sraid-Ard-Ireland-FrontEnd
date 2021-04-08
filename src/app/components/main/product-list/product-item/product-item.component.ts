import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() products: any = [];
  @Output() selectProduct = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  productClicked(product: any) {
    this.selectProduct.emit(product);
  }

}
