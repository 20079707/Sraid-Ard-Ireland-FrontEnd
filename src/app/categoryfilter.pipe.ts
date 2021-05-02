import { Pipe, PipeTransform } from '@angular/core';
import { Category } from './models/Category';
import { Product } from './models/Product';

@Pipe({
  name: 'categoryfilter'
})
export class CategoryfilterPipe implements PipeTransform {

  transform(values: Product[], ...args: unknown[]): unknown {
    return values.filter((product) => product.category);
  }

}
