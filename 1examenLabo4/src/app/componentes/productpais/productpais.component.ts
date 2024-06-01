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
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-productpais',
  standalone: true,
  imports: [NgIf, RouterLink, FormsModule, ReactiveFormsModule, DetalleProductoComponent, DetallePaisComponent, ListadoProductoComponent],
  templateUrl: './productpais.component.html',
  styleUrls: ['./productpais.component.css']
})
export class ProductpaisComponent {
  productoSeleccionado: Producto | null = null;
  pais: Pais | null = null;
  paises: Pais[] = [];

  constructor(
    private productoService: ProductoService,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.paisService.traerPaises().subscribe((paises) => {
      this.paises = paises;
    });
  }

  seleccionarProducto(producto: Producto) {
    this.productoSeleccionado = producto;
    this.pais = this.getPaisOrigen(producto.paisOrigen);
  }

  getPaisOrigen(nombre: string): Pais | null {
    return this.paises.find(
      (pais) => pais.nombre.toLowerCase() === nombre.toLowerCase()
    ) || null;
  }
}