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
export class HomeContenedoresComponent  {
  selectedContainerForEdit: Container | null = null;
  selectedContainerForDelete: Container | null = null;

  onContainerCreated(container: Container) {
   
  }

  onContainerSelected(event: { container: Container, action: string }) {
    if (event.action === 'edit') {
      this.selectedContainerForEdit = event.container;
      this.selectedContainerForDelete = null;
    } else if (event.action === 'delete') {
      this.selectedContainerForDelete = event.container;
      this.selectedContainerForEdit = null;
    }
  }

  onContainerUpdated(container: Container) {
    this.selectedContainerForEdit = null;
    
  }

  onContainerDeleted(codigo: string) {
    this.selectedContainerForDelete = null;
 
  }
}