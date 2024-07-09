import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContainerService } from '../../services/container.service';
import { Container } from '../../clases/container';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscarPipe } from '../../Pipes/buscar.pipe';
 
@Component({
  selector: 'app-listar-containers',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule,BuscarPipe],
  templateUrl: './listar-containers.component.html',
  styleUrl: './listar-containers.component.css'
})
export class ListarContainersComponent implements OnInit {
  containers: Container[] = [];
  searchText: string = '';
  selectedContainer: Container | null = null;
  editMode: boolean = false;
  deleteMode: boolean = false;

  @Output() containerSelected = new EventEmitter<{ container: Container, action: string }>();

  constructor(private containerService: ContainerService) {}

  ngOnInit(): void {
    this.containerService.getContainers().subscribe(data => {
      this.containers = data;
    });
  }

  selectContainer(container: Container): void {
    if (this.selectedContainer === container && (this.editMode || this.deleteMode)) {
      this.cancelAction();
    } else {
      this.selectedContainer = container;
      this.editMode = false;
      this.deleteMode = false;
    }
  }

  onEdit(container: Container, event: MouseEvent): void {
    event.stopPropagation();
    this.containerSelected.emit({ container, action: 'edit' });
  }


 
  onDelete(codigo: string, event: MouseEvent): void {
    event.stopPropagation();
    this.containerSelected.emit({ container: { codigo } as Container, action: 'delete' });
  }
 
 
  

  cancelAction(): void {
    this.selectedContainer = null;
    this.editMode = false;
    this.deleteMode = false;
  }

  
}