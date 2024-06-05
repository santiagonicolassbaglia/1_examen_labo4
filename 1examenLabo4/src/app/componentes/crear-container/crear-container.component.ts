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
export class CrearContainerComponent implements OnInit {
  containerForm: FormGroup;
  @Output() containerCreated = new EventEmitter<Container>();

  constructor(private fb: FormBuilder, private containerService: ContainerService) {
    this.containerForm = this.fb.group({
      codigo: ['', [Validators.required]],
      color: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      capacidad: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    const newContainer: Container = this.containerForm.value;
    this.containerService.createContainer(newContainer).then(() => {
      this.containerCreated.emit(newContainer);
    });
  }

  ngOnInit(): void {
  }
  
}
