import { Component, Input } from '@angular/core';
import { Producto } from '../../clases/producto';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {
  @Input() producto: Producto | null = null;
}
