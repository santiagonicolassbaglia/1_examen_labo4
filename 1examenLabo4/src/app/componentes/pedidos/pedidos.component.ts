import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../clases/pedido';

 
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../../clases/producto';
import { PedidoService } from '../../services/pedido.service';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { Container } from '../../clases/container';
import { AgregarPedidoComponent } from '../agregar-pedido/agregar-pedido.component';
import { DetallePedidoComponent } from '../detalle-pedido/detalle-pedido.component';
import { ListarContainersComponent } from '../listar-containers/listar-containers.component';
 
@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule,AgregarPedidoComponent,DetallePedidoComponent,ListarContainersComponent,PedidosComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  selectedContainer: Container | null = null;
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

  onContainerSelected(event: { container: Container, action: string }) {
    this.selectedContainer = event.container;
  }

  onPedidoCreado(pedido: Pedido) {
    console.log('Pedido creado:', pedido);
  }

  onSubmit(): void {
    if (this.pedidoForm.valid && this.selectedContainer) {
      const { productoId, cantidad } = this.pedidoForm.value;
      const producto = this.productos.find(p => p.codigo === productoId);
      if (producto) {
        const nuevoPedido = new Pedido(producto.codigo, producto.descripcion, cantidad, new Date(), this.selectedContainer.codigo);
        this.pedidoService.createPedido(nuevoPedido).then(() => {
          console.log('Pedido creado correctamente');
          this.onPedidoCreado(nuevoPedido);
          this.pedidoForm.reset({ cantidad: 1 });
        }).catch(error => {
          console.error('Error al crear el pedido:', error);
        });
      }
    }
  }
}