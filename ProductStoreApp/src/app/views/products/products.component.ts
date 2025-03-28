import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    {id:1,name:'Laptop Lenovo',price:18999},
    {id:2,name:'Smartphone Samsung',price:999},
    {id:3,name:'Monitor LG 24"',price:3999},
    {id:4,name:'Teclado Mecanico RedDragon',price:3999},
    {id:5,name:'Mouse Inalambrico Logitech',price:799}
  ];
}
