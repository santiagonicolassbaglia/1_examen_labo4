import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContainerService } from '../../services/container.service';
import { Container } from '../../clases/container';
import { NgFor, NgIf } from '@angular/common';
 
@Component({
  selector: 'app-modificar-container',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule,NgFor,FormsModule],
  templateUrl: './modificar-container.component.html',
  styleUrls: ['./modificar-container.component.css']
})
export class ModificarContainerComponent   {
  @Input() container!: Container;
  @Output() containerUpdated = new EventEmitter<Container>();

  constructor(private containerService: ContainerService) {}

  updateContainer(): void {
    this.containerService.updateContainer(this.container).then(() => {
      this.containerUpdated.emit(this.container);
    });
  }
}