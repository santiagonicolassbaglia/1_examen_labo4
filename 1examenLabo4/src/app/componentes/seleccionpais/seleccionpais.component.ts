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

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    this.cargarPaises();
  }

  cargarPaises() {
    this.paisService.traerPaises().subscribe((paises) => {
      this.paises = paises;
    });
  }

  seleccionarPais(pais: Pais) {
    this.paisSeleccionado.emit(pais);
  }
}