import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContainerService } from '../../services/container.service';
import { Container } from '../../clases/container';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-modificar-container',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule,NgFor],
  templateUrl: './modificar-container.component.html',
  styleUrls: ['./modificar-container.component.css']
})
export class ModificarContainerComponent implements OnChanges {
  @Input() containers: Container[] = [];
  @Output() containerUpdated = new EventEmitter<Container>();
  @Output() containerSelected = new EventEmitter<Container>();
  selectedContainer: Container | null = null;
  containerForm: FormGroup;

  constructor(private fb: FormBuilder, private containerService: ContainerService) {
    this.containerForm = this.fb.group({
      color: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      capacidad: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['containers'] && changes['containers'].currentValue) {
      // If containers list changes, reset selected container and form
      this.selectedContainer = null;
      this.containerForm.reset();
    }

    if (changes['selectedContainer'] && changes['selectedContainer'].currentValue) {
      this.containerForm.patchValue(this.selectedContainer);
    }
  }

  onContainerSelect(container: Container): void {
    this.selectedContainer = container;
    this.containerForm.patchValue(this.selectedContainer);
    this.containerSelected.emit(container);
  }

  onSubmit(): void {
    if (this.selectedContainer) {
      const modifiedContainer: Container = {
        ...this.selectedContainer,
        ...this.containerForm.value
      };

      this.containerService.updateContainer(modifiedContainer).then(() => {
        this.containerUpdated.emit(modifiedContainer);
      });
    }
  }
}
 
// ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
//   if (changes["container"] && changes["container"].currentValue) {
//     this.containerForm.patchValue(changes["container"].currentValue);
//   }
// }