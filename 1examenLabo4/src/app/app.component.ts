import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
 
import { PaginaErrorComponent } from './componentes/pagina-error/pagina-error.component';
 
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeAdminComponent } from './componentes/home-admin/home-admin.component';
import { ProductoComponent } from './componentes/producto/producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,RouterLink,LoginComponent,PaginaErrorComponent,RegistroComponent,HomeComponent,HomeAdminComponent,ProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examenlabo';
}
