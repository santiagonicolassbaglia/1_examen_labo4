import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from '../clases/producto';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productosPath = 'Productos';

  constructor(private firestore: AngularFirestore) {}

 

  obtenerProductos() {
    return this.firestore.collection(this.productosPath).snapshotChanges();
  }

  getProductosConStock(): Observable<Producto[]> {
    return this.firestore.collection('Productos', ref => ref.where('stock', '>', 0))
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Producto;
          return data;
        }))
      );
  }

  crearProducto(producto: Producto): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('Productos').doc(id).set(Object.assign({}, producto));
  }
}
