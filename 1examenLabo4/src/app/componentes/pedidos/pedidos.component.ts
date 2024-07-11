import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../clases/pedido';

 
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../../clases/producto';
import { PedidoService } from '../../services/pedido.service';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent implements OnInit {
  pedidoForm: FormGroup;
  productos: Producto[] = [];

  constructor(
    private fb: FormBuilder,
    private pedidoService: PedidoService,
    private productoService: ProductoService
  ) {
    this.pedidoForm = this.fb.group({
      productoId: ['', Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.productoService.getProductosConStock().subscribe(productos => {
      this.productos = productos;
    });
  }

  onSubmit(): void {
    if (this.pedidoForm.valid) {
      const { productoId, cantidad } = this.pedidoForm.value;
      const producto = this.productos.find(p => p.codigo === productoId);
      if (producto) {
        const nuevoPedido = new Pedido(productoId, producto.descripcion, cantidad, new Date());
        this.pedidoService.createPedido(nuevoPedido).then(() => {
          console.log('Pedido creado correctamente');
          this.pedidoForm.reset({ cantidad: 1 });
        }).catch(error => {
          console.error('Error al crear el pedido:', error);
        });
      }
    }
  }
}