import { Component } from '@angular/core';

export interface Products {
  name: string;
  modelo: string;
  price: number;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Products;

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  /**product table */
  public products: Products[] = [
    {
      name: 'Lenovo',
      modelo: 'Ideadpad 330',
      price: 450
    },
    {
      name: 'Asus',
      modelo: 'vivobook 16',
      price: 600
    },
    {
      name: 'Lenovo',
      modelo: 'Yoga',
      price: 1000
    },
    {
      name: 'Lenovo',
      modelo: 'Ideadpad 1',
      price: 300
    },
    {
      name: 'Hp',
      modelo: 'Pavillon',
      price: 900
    }
  ]

  changeOrder(value: keyof Products): void{
    this.orderBy = value;
  }

  
}
