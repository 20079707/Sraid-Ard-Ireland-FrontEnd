import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/Category';

@Component({
  selector: 'app-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.css']
})
export class DepartmentItemComponent implements OnInit {

  @Input() categoryItem!: Category
  @Output() selectCategory = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  categoryClicked(categoryItem: Category) {
    this.selectCategory.emit(categoryItem);
  }

}
