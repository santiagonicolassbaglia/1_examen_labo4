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

  obtenerProductos(): Observable<Producto[]> {
    return this.firestore.collection<Producto>(this.productosPath).valueChanges();
  }

  getProductosConStock(): Observable<Producto[]> {
    return this.firestore.collection<Producto>(this.productosPath, ref => ref.where('stock', '>', 0))
      .valueChanges();
  }

  crearProducto(producto: Producto): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('Productos').doc(id).set(Object.assign({}, producto));
  }

  obtenerProductoPorCodigo(codigo: string): Observable<Producto | undefined> {
    return this.firestore.collection<Producto>(this.productosPath, ref => ref.where('codigo', '==', codigo))
      .valueChanges()
      .pipe(
        map(productos => productos.length > 0 ? productos[0] : undefined)
      );
  }
}
