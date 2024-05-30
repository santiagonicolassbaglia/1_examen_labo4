import { Component, Input } from '@angular/core';
import { Producto } from '../../clases/producto';
import { Pais } from '../../clases/pais';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-productpais',
  standalone: true,
  imports: [NgIf,RouterLink,FormsModule,RouterLink,ReactiveFormsModule],
  templateUrl: './productpais.component.html',
  styleUrl: './productpais.component.css'
})
export class ProductpaisComponent {
  @Input() productoSeleccionado: Producto | null = null;

  constructor() {}

  getPaisOrigen(): Pais | null {
    if (this.productoSeleccionado) {
      return new Pais(
        this.productoSeleccionado.paisOrigen,
        this.productoSeleccionado.codigo,
        `../../../assets/environments/imagenes/paises/${this.productoSeleccionado.paisOrigen.toLowerCase()}.png
        `,
        this.productoSeleccionado.paisOrigen
      );
    }
    return null;
  }
}


