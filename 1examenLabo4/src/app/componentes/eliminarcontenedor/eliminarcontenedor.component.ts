 
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

  @Input() containers: Container[] = [];
  @Output() containerDeleted = new EventEmitter<Container>();
  @Output() containerSelected = new EventEmitter<Container>();
  selectedContainer: Container | null = null;

  constructor(private containerService: ContainerService) {}

  ngOnChanges(changes: SimpleChange): void {
    if (changes['containers'] && changes['containers'].currentValue) {
      // If containers list changes, reset selected container
      this.selectedContainer = null;
    }
  }

  onContainerSelect(container: Container): void {
    this.selectedContainer = container;
    this.containerSelected.emit(container);
  }

  deleteContainer(): void {
    if (this.selectedContainer) {
      this.containerService.deleteContainer(this.selectedContainer.codigo).then(() => {
        this.containerDeleted.emit(this.selectedContainer);
        this.selectedContainer = null; // Clear selected container after deletion
      });
    }
  }
}
