import { Injectable } from '@angular/core';
 
import { Pedido } from '../clases/pedido';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(private firestore: AngularFirestore) {}

  createPedido(pedido: Pedido): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('pedidos').doc(id).set(pedido.toPlainObject());
  }
}