import { Component } from '@angular/core';
import { Producto } from '../../clases/producto';
import { Pais } from '../../clases/pais';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';
import { DetallePaisComponent } from '../detalle-pais/detalle-pais.component';
import { ListadoProductoComponent } from '../listado-producto/listado-producto.component';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productpais',
  standalone: true,
  imports: [NgIf, RouterLink, FormsModule, ReactiveFormsModule, DetalleProductoComponent, DetallePaisComponent, ListadoProductoComponent],
  templateUrl: './productpais.component.html',
  styleUrls: ['./productpais.component.css']
})
export class ProductpaisComponent {
  productoSeleccionado: Producto | null = null;

  constructor(private productoService: ProductoService) {}

  seleccionarProducto(producto: Producto) {
    this.productoSeleccionado = producto;
  }

  getPaisOrigen(): Pais | null {
    if (this.productoSeleccionado) {
      return new Pais(
        this.productoSeleccionado.paisOrigen,
        this.productoSeleccionado.codigo,
        `../../../assets/environments/imagenes/paises/${this.productoSeleccionado.paisOrigen.toLowerCase()}.png`,
        `../../../assets/environments/imagenes/banderas/${this.productoSeleccionado.paisOrigen.toLowerCase()}.png`   
     
      );
    }
    
    return null;
  }
}