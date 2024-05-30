import { Component, OnInit } from '@angular/core';
import { Producto } from '../../clases/producto';
import { ProductoService } from '../../services/producto.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listado-producto',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado-producto.component.html',
  styleUrl: './listado-producto.component.css'
})
export class ListadoProductoComponent implements OnInit {
  
  productos: Producto[] = [];
  productoSeleccionado: Producto | null = null;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.getProductosConStock().subscribe((productos) => {
      this.productos = productos.map((productoData: any) => {
        return new Producto(
          productoData.codigo,
          productoData.descripcion,
          productoData.precio,
          productoData.stock,
          productoData.paisOrigen,
          productoData.comestible
        );
      });
    });
  }

  seleccionarProducto(producto: Producto) {
    this.productoSeleccionado = producto;
  }
}
