import { Pipe, PipeTransform } from '@angular/core';
import { Container } from '../clases/container';

@Pipe({
  name: 'buscar',
  standalone: true
})
export class BuscarPipe implements PipeTransform {
  transform(containers: Container[], searchText: string): Container[] {
    if (!containers || !searchText) {
      return containers;
    }
    searchText = searchText.toLowerCase();
    return containers.filter(container =>
      container.codigo.toLowerCase().includes(searchText) ||
      container.color.toLowerCase().includes(searchText) ||
      container.empresa.toLowerCase().includes(searchText) ||
      container.capacidad.toString().toLowerCase().includes(searchText) ||
      container.descripcion.toLowerCase().includes(searchText)
    );
  }
}
