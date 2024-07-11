import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../clases/producto';

@Pipe({
  name: 'buscarproductos',
  standalone: true
})
export class BuscarproductosPipe implements PipeTransform {

  transform(containers: Producto[], searchText: string): Producto[] {
    if (!containers || !searchText) {
      return containers;
    }
    searchText = searchText.toLowerCase();
    return containers.filter(container =>
      container.codigo.toLowerCase().includes(searchText) ||
      container.descripcion.toLowerCase().includes(searchText) ||
      container.paisOrigen.toLowerCase().includes(searchText) ||
      container.precio.toString().toLowerCase().includes(searchText) ||
      container.stock.toString().includes(searchText)
    );
  }

}
