import { Injectable } from '@angular/core';
 
import { Pedido } from '../clases/pedido';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private collectionName = 'pedidos';

  constructor(private firestore: AngularFirestore) {}

  createPedido(pedido: Pedido): Promise<void> {
    const id = this.firestore.createId();
    pedido.id = id;
    return this.firestore.collection(this.collectionName).doc(id).set(pedido);
  }

  getPedidos(): Observable<Pedido[]> {
    return this.firestore.collection<Pedido>(this.collectionName).valueChanges();
  }
}