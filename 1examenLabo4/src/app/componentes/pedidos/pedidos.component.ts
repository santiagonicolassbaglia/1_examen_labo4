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

  onContainerSelected(event: { container: Container, action: string }) {
    this.selectedContainer = event.container;
  }

  onPedidoCreado(pedido: Pedido) {
    console.log('Pedido creado:', pedido);
     
  }
}