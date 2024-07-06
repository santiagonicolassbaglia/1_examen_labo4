import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Container } from '../../clases/container';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContainerService } from '../../services/container.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-crear-container',
  standalone: true,
  imports: [NgIf,ReactiveFormsModule,FormsModule],
  templateUrl: './crear-container.component.html',
  styleUrl: './crear-container.component.css'
})
export class CrearContainerComponent   {
  codigo: string = '';
  color: string = '';
  empresa: string = '';
  capacidad: number = 0;
  descripcion: string = '';

  @Output() containerCreated = new EventEmitter<Container>();

  constructor(private containerService: ContainerService) {}

  createContainer(): void {
    const newContainer = new Container('', this.codigo, this.color, this.empresa, this.capacidad, this.descripcion);
    this.containerService.createContainer(newContainer).then(() => {
      this.containerCreated.emit(newContainer);
    });
  }
}