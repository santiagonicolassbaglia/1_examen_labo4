import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productosPath = 'Productos';

  constructor(private firestore: AngularFirestore) {}

  crearProducto(producto: Producto) {
    return this.firestore.collection(this.productosPath).add({ ...producto });
  }

  obtenerProductos() {
    return this.firestore.collection(this.productosPath).snapshotChanges();
  }
}
