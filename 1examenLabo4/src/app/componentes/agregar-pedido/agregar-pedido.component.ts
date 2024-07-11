import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Pedido } from '../../clases/pedido';
import { Container } from '../../clases/container';
import { PedidoService } from '../../services/pedido.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-agregar-pedido',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './agregar-pedido.component.html',
  styleUrl: './agregar-pedido.component.css'
})
export class AgregarPedidoComponent { 
  @Input() container!: Container;
  @Output() pedidoCreado = new EventEmitter<Pedido>();
  pedidoForm: FormGroup;
  productoValido: boolean = true;
  stockSuficiente: boolean = true;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private pedidoService: PedidoService
  ) {
    this.pedidoForm = this.fb.group({
      productoCodigo: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1)]]
    });
  }

  agregarPedido() {
    const productoCodigo = this.pedidoForm.get('productoCodigo')?.value;
    const cantidad = this.pedidoForm.get('cantidad')?.value;

    this.productoService.obtenerProductoPorCodigo(productoCodigo).subscribe((producto) => {
      if (producto) {
        this.productoValido = true;
        if (producto.stock >= cantidad) {
          this.stockSuficiente = true;
          const pedido = new Pedido(producto.codigo, producto.descripcion, cantidad, new Date(), this.container.codigo);
          this.pedidoService.createPedido(pedido).then(() => {
            this.pedidoCreado.emit(pedido);
          });
        } else {
          this.stockSuficiente = false;
        }
      } else {
        this.productoValido = false;
      }
    });
  }
}