import { Component, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Producto } from '../../clases/producto';
import { ProductoService } from '../../services/producto.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado-producto',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink],
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {
  
  productos: Producto[] = [];
  @Output() productoSeleccionado = new EventEmitter<Producto>();
  @ViewChild('productList', { static: true }) productList: ElementRef | null = null;

  productoDetallado: ElementRef | null = null;
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
    this.productoSeleccionado.emit(producto);
    this.scrollToProduct(producto);
  }

  scrollToProduct(producto: Producto) {
    if (this.productList) {
      const productElement = this.productList.nativeElement.querySelector(`li[class*="${producto.codigo}"]`);
      if (productElement) {
        const isElementOutOfView = !productElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Check if scrollIntoView returns false
        if (isElementOutOfView) {
          // If element is out of view, scroll manually using getBoundingClientRect and scrollTop
          const productRect = productElement.getBoundingClientRect();
          const parentScrollTop = this.productList.nativeElement.scrollTop;
          window.scrollTo({
            top: productRect.top + parentScrollTop,
            behavior: 'smooth'
          });
        }
      }
    }
  }
}
 