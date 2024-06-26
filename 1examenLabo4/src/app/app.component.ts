import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
 
import { PaginaErrorComponent } from './componentes/pagina-error/pagina-error.component';
 
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeAdminComponent } from './componentes/home-admin/home-admin.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ProductpaisComponent } from './componentes/productpais/productpais.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { ListadoProductoComponent } from './componentes/listado-producto/listado-producto.component';
import { CommonModule } from '@angular/common';
import { ListarContainersComponent } from './componentes/listar-containers/listar-containers.component';
import { ModificarContainerComponent } from './componentes/modificar-container/modificar-container.component';
import { CrearContainerComponent } from './componentes/crear-container/crear-container.component';
import { HomeContenedoresComponent } from './componentes/home-contenedores/home-contenedores.component';
import { EliminarcontenedorComponent } from './componentes/eliminarcontenedor/eliminarcontenedor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,RouterLink,LoginComponent,PaginaErrorComponent,RegistroComponent,HomeComponent,HomeAdminComponent,ProductoComponent,ProductpaisComponent,DetallePaisComponent,DetalleProductoComponent,ListadoProductoComponent, ListarContainersComponent,ReactiveFormsModule,ModificarContainerComponent,CrearContainerComponent,HomeContenedoresComponent,EliminarcontenedorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examenlabo';
}
