import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContainerService } from '../../services/container.service';
import { Container } from '../../clases/container';
import { NgFor, NgIf } from '@angular/common';
 
@Component({
  selector: 'app-listar-containers',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './listar-containers.component.html',
  styleUrl: './listar-containers.component.css'
})
export class ListarContainersComponent implements OnInit {
  
  containers: Container[] = [];
  @Output() containerSelected = new EventEmitter<Container>();

  constructor(private containerService: ContainerService) {}

  ngOnInit(): void {
    this.loadContainers();
  }

  loadContainers(): void {
    this.containerService.getContainers().subscribe(containers => {
      this.containers = containers;
    });
  }

  selectContainer(container: Container): void {
    this.containerSelected.emit(container);
  }
     


     
}
