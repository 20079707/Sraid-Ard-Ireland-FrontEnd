import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {

  
  @Input() 
  products: Product[] = [];
  @Output() selectProduct = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  

}
