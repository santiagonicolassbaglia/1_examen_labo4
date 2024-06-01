import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  imports: [NgFor, NgIf, FormsModule, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './seleccionpais.component.html',
  styleUrls: ['./seleccionpais.component.css']
})
export class SeleccionpaisComponent {
  @Input() paises: Pais[] | null = [];
  @Output() paisSeleccionado = new EventEmitter<Pais>();

  onChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedPaisNombre = selectElement.value;
    const selectedPais = this.paises?.find(pais => pais.nombre === selectedPaisNombre);
    if (selectedPais) {
      this.paisSeleccionado.emit(selectedPais);
    }
  }

  seleccionarPais(pais: Pais) {
    this.paisSeleccionado.emit(pais);
  }
}
