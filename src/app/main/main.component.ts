import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
}
