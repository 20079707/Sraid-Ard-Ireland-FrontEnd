import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Shop } from '../../../models/Shop';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {

  @Input() shopItem!: Shop

  constructor() { }

  ngOnInit(): void {
  }

}
