import { Component, OnInit } from '@angular/core';
import { Container } from '../../clases/container';
import { ContainerService } from '../../services/container.service';
import { NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearContainerComponent } from '../crear-container/crear-container.component';
import { ModificarContainerComponent } from '../modificar-container/modificar-container.component';
import { ListarContainersComponent } from '../listar-containers/listar-containers.component';
import { EliminarcontenedorComponent } from '../eliminarcontenedor/eliminarcontenedor.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-contenedores',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NgFor,CrearContainerComponent,ModificarContainerComponent,ListarContainersComponent,EliminarcontenedorComponent,HomeComponent,RouterLink],
  templateUrl: './home-contenedores.component.html',
  styleUrls: ['./home-contenedores.component.css'],

})
export class HomeContenedoresComponent implements OnInit {
  containers: Container[] = [];
  selectedAction: string = '';
  selectedContainer: Container | null = null;

  constructor(private containerService: ContainerService) {}

  ngOnInit(): void {
    this.loadContainers();
  }

  loadContainers(): void {
    this.containerService.getContainers().subscribe(containers => {
      this.containers = containers;
    });
  }

  selectAction(action: string): void {
    this.selectedAction = action;
    if (action === 'modificar' || action === 'eliminar') {
      this.selectedContainer = null;
    }
  }

  selectContainer(container: Container): void {
    this.selectedContainer = container;
  }

  onContainerCreated(container: Container): void {
    this.containers.push(container);
    this.selectAction('listar');
  }

  onContainerModified(modifiedContainer: Container): void {
    const index = this.containers.findIndex(c => c.codigo === modifiedContainer.codigo);
    if (index !== -1) {
      this.containers[index] = modifiedContainer;
    }
    this.selectAction('listar');
  }

  onContainerDeleted(deletedContainer: Container): void {
    this.containers = this.containers.filter(c => c.codigo !== deletedContainer.codigo);
    this.selectAction('listar');
  }
}