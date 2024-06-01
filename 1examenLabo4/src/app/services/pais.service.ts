import { Injectable } from '@angular/core';
import { Pais } from '../clases/pais';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})export class PaisService {
  private ruta: string = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  traerPaises(): Observable<Pais[]> {
    return this.http.get<any[]>(this.ruta).pipe(
      map(response => {
        return response.map(pais => {
          return {
            nombre: pais.name.common,
            banderaUrl: pais.flags.png,
            codigo: pais.cca2,
            continente: pais.region
          } as Pais;
        });
      })
    );
  }
}