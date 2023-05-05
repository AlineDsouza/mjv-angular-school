import { Component } from '@angular/core';
import { product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  products: Array<product> = [
    {
      id: 1,
      description: 'Iphone 11',
      price: 500
    },
    {
      id: 2,
      description: 'Iphone 12',
      price: 600
    },
    {
      id: 3,
      description: 'Iphone 13',
      price: 700
    },
    {
      id: 4,
      description: 'Iphone 14',
      price: 800
    }

  ];
}
