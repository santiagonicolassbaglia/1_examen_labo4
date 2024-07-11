import { Component, Input } from '@angular/core';
import { Pedido } from '../../clases/pedido';
import { Container } from '../../clases/container';
import { PedidoService } from '../../services/pedido.service';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-detalle-pedido',
  standalone: true,
  imports: [NgFor,DatePipe],
  templateUrl: './detalle-pedido.component.html',
  styleUrl: './detalle-pedido.component.css'
})
export class DetallePedidoComponent {
  @Input() container!: Container;
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    this.pedidoService.obtenerPedidosPorContainer(this.container.codigo).subscribe((pedidos) => {
      this.pedidos = pedidos;
    });
  }
}