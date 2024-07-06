 
import { Component, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { ContainerService } from '../../services/container.service';
import { Container } from '../../clases/container';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-eliminarcontenedor',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './eliminarcontenedor.component.html',
  styleUrl: './eliminarcontenedor.component.css'
})
export class EliminarcontenedorComponent {

  @Input() codigo!: string;
  @Output() containerDeleted = new EventEmitter<string>();

  constructor(private containerService: ContainerService) {}

  deleteContainer(): void {
    this.containerService.deleteContainer(this.codigo).then(() => {
      this.containerDeleted.emit(this.codigo);
    });
  }
}