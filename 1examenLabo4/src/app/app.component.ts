import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,RouterLink,LoginComponent,PaginaErrorComponent,RegistroComponent,HomeComponent,HomeAdminComponent,ProductoComponent,ProductpaisComponent,DetallePaisComponent,DetalleProductoComponent,ListadoProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examenlabo';
}
