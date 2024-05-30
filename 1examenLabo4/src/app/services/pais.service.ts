import { Injectable } from '@angular/core';
import { Pais } from '../clases/pais';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {private paises: Pais[] = [
  new Pais('Argentina', 'AR', '../../assets/environments/imagenes/paises/argentinajpg.jpg', 'America'),
  new Pais('Brasil', 'BR', '../../assets/environments/imagenes/paises/brasil.png', 'America'),
  new Pais('Canada', 'CA', '../../assets/environments/imagenes/paises/canada.png', 'America'),
  new Pais('Francia', 'FR', '../../assets/environments/imagenes/paises/francia.png', 'Europa'),
  new Pais('Alemania', 'DE', '../../assets/environments/imagenes/paises/alemania.png', 'Europa'),
  new Pais('Italia', 'IT', '../../assets/environments/imagenes/paises/italia.png', 'Europa'),
 
];

constructor() {}

obtenerPaisesPorContinente(continente: string): Observable<Pais[]> {
  return of(this.paises.filter(pais => pais.continente === continente));
}
}
