import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/messenger.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    //{ id: 1, productId: 1, productName: "test1", qty: 4, price: 100},
    //{ id: 2, productId: 2, productName: "test2", qty: 2, price: 160},
    //{ id: 3, productId: 3, productName: "test3", qty: 6, price: 190},
    //{ id: 4, productId: 4, productName: "test4", qty: 3, price: 140}
  ];

  constructor(
    private msg: MessengerService
  ) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe(
      product => {
      console.log(product)
      

    })

  }

}
