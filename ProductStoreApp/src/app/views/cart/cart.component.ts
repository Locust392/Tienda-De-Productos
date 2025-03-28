import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems=[
    {title: 'Audífonos Bluetooth', image: 'assets/images/audifonos.jpg'},
    {title: 'Smartwatch Xiaomi', image: 'assets/images/smartwatch.jpg'},
    {title: 'Camara Web HD', image: 'assets/images/camara.jpg'},
    {title: 'Disco Duro Externo', image: 'assets/images/disco-duro.jpg'},
    {title: 'Bocina Portatil', image: 'assets/images/bocina.jpg'}
  ];
}
