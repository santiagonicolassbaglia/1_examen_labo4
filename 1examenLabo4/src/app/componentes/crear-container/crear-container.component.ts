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
  containerForm: FormGroup;
  codigo: string = '';
  color: string = '';
  empresa: string = '';
  capacidad: number = 0;
  descripcion: string = '';

  @Output() containerCreated = new EventEmitter<Container>();

  constructor(private fb: FormBuilder, private containerService: ContainerService) {
    this.containerForm = this.fb.group({
      codigo: ['', Validators.required],
      color: ['', Validators.required],
      empresa: ['', Validators.required],
      capacidad: [0, [Validators.required, Validators.min(1)]],
      descripcion: ['', Validators.required]
    });
  }

  createContainer(): void {
    if (this.containerForm.valid) {
      const newContainer = new Container('', this.containerForm.value.codigo, this.containerForm.value.color, this.containerForm.value.empresa, this.containerForm.value.capacidad, this.containerForm.value.descripcion);
      this.containerService.createContainer(newContainer).then(() => {
        this.containerCreated.emit(newContainer);
        this.containerForm.reset();  
      });
    }
  }
}