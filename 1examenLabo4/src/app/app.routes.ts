import { Routes } from '@angular/router';
import { logueadoGuard } from './guards/logueado.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  
    { path: 'login', loadComponent: () => import('./componentes/login/login.component').then(m => m.LoginComponent) },
    { path: 'registro', loadComponent: () => import('./componentes/registro/registro.component').then(m => m.RegistroComponent) },    
    { path: 'home', loadComponent: () => import('./componentes/home/home.component').then(m => m.HomeComponent) },
    {path: 'producto', loadComponent: () => import('./componentes/producto/producto.component').then(m => m.ProductoComponent), canActivate: [logueadoGuard]},
 {path: 'homeAdmin', loadComponent: () => import('./componentes/home-admin/home-admin.component').then(m => m.HomeAdminComponent), canActivate: [adminGuard]},
    { path: 'pagina-error', loadComponent: () => import('./componentes/pagina-error/pagina-error.component').then(m => m.PaginaErrorComponent) },
    {path: 'producto', loadComponent: () => import('./componentes/producto/producto.component').then(m => m.ProductoComponent), canActivate: [logueadoGuard]},

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'paginaError' }
];
