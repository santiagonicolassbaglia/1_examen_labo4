import { Component, EventEmitter, Input, Output } from '@angular/core';
 
import { PaisService } from '../../services/pais.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

export interface Pais {
  nombre: string;
  banderaUrl: string;
  codigo: string;
  continente: string;
}
@Component({
  selector: 'app-seleccionpais',
  standalone: true,
  imports: [NgFor,NgIf, FormsModule, RouterLink, ReactiveFormsModule,CommonModule],
  templateUrl: './seleccionpais.component.html',
  styleUrl: './seleccionpais.component.css'
})
export class SeleccionpaisComponent {
  @Output() paisSeleccionado = new EventEmitter<Pais>();
  paises: Pais[] = [];

  ngOnInit(): void {
    this.cargarPaises();
  }

  cargarPaises() {
    this.paises = [
      { nombre: 'Argentina', banderaUrl: '../../../assets/environments/imagenes/paises/argentinajpg.jpg', codigo: 'AR', continente: 'America' },
      { nombre: 'Brasil', banderaUrl: '../../../assets/environments/imagenes/paises/brasil.png', codigo: 'BR', continente: 'America' },
      { nombre: 'Chile', banderaUrl: '../../../assets/environments/imagenes/paises/chile.png', codigo: 'CL', continente: 'America' },
    ];
  }

  seleccionarPais(pais: Pais) {
    this.paisSeleccionado.emit(pais);
  }
}
