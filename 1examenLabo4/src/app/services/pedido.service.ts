import { Injectable } from '@angular/core';
 
import { Pedido } from '../clases/pedido';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedidosPath = 'pedidos';

  constructor(private firestore: AngularFirestore) {}

  createPedido(pedido: Pedido): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.pedidosPath).doc(id).set(pedido.toPlainObject());
  }

  obtenerPedidosPorContainer(codigoContainer: string): Observable<Pedido[]> {
    return this.firestore.collection<Pedido>(this.pedidosPath, ref => ref.where('codigoContainer', '==', codigoContainer)).valueChanges();
  }
}