import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../order/order.component';

@Pipe({
  name: 'sortPipe'
})
export class SortByPipe implements PipeTransform {

  transform(products: Products[], sortBy?: keyof Products | ''): Products[] {
    
    switch(sortBy){
      case 'name': 
        return products.sort( (a, b)  => (a.name > b.name) ? 1 : -1);

      case 'modelo': 
        return products.sort( (a, b)  => (a.modelo > b.modelo) ? 1 : -1);

      case 'price': 
        return products.sort( (a, b)  => (a.price > b.price) ? 1 : -1);
      
      default: 
        return products;
    }

  }

}
