import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product={
    id: 2,
    name: 'Smartphone Samsung',
    price: 9999,
    description: 'Un Smartphone con pantalla AMOLED, camra triple y bateria de larga duracion'
  }

  constructor(private route: ActivatedRoute){
    this.route.params.subscribe(params=>{
      //Simular la carga del producto (no implementado)
    });
  }

  addToCart(){
    alert('¡Producto agregado al carrito (esto es solo una simulacion.')
  }
}
