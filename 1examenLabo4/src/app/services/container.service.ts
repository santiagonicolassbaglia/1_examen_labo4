import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from '../clases/producto';
import { Observable, map } from 'rxjs';
import { Container } from '../clases/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  private containersPath = 'Containers';

  constructor(private firestore: AngularFirestore) {}

  getContainers(): Observable<Container[]> {
    return this.firestore.collection<Container>(this.containersPath).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Container;
        data.codigo = a.payload.doc.id;
        return data;
      }))
    );
  }

  createContainer(container: Container): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.containersPath).doc(id).set(container);
  }

  updateContainer(container: Container): Promise<void> {
    return this.firestore.collection(this.containersPath).doc(container.codigo).update(container);
  }

  deleteContainer(codigo: string): Promise<void> {
    return this.firestore.collection(this.containersPath).doc(codigo).delete();
  }
}
 
 
 