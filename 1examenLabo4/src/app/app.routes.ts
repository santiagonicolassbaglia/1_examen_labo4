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
{ path: 'seleccionPais', loadComponent: () => import('./componentes/seleccionpais/seleccionpais.component').then(m => m.SeleccionpaisComponent)},
{ path: 'detalleProducto', loadComponent: () => import('./componentes/detalle-producto/detalle-producto.component').then(m => m.DetalleProductoComponent)},
{ path: 'detallePais', loadComponent: () => import('./componentes/detalle-pais/detalle-pais.component').then(m => m.DetallePaisComponent)},
{ path: 'producpais', loadComponent: () => import('./componentes/productpais/productpais.component').then(m => m.ProductpaisComponent)},
{ path: 'listarConteiners', loadComponent: () => import('./componentes/listar-containers/listar-containers.component').then(m => m.ListarContainersComponent)},
{ path: 'modificarContainer', loadComponent: () => import('./componentes/modificar-container/modificar-container.component').then(m => m.ModificarContainerComponent)},
{ path: 'crearContainer', loadComponent: () => import('./componentes/crear-container/crear-container.component').then(m => m.CrearContainerComponent)},
{ path: 'homeContenedores', loadComponent: () => import('./componentes/home-contenedores/home-contenedores.component').then(m => m.HomeContenedoresComponent)},
{ path: 'eliminarContainer', loadComponent: () => import('./componentes/eliminarcontenedor/eliminarcontenedor.component').then(m => m.EliminarcontenedorComponent)},
{path: 'pedidos', loadComponent: () => import('./componentes/pedidos/pedidos.component').then(m => m.PedidosComponent) },
{path: 'listadoProductos', loadComponent: () => import('./componentes/listado-producto/listado-producto.component').then(m => m.ListadoProductoComponent), canActivate: [logueadoGuard]},
 {path:'spinner', loadComponent: () => import('./componentes/spinner/spinner.component').then(m => m.SpinnerComponent)},
 {path: 'agregarPedido', loadComponent: () => import('./componentes/agregar-pedido/agregar-pedido.component').then(m => m.AgregarPedidoComponent)},
 {path: 'detallePedido', loadComponent: () => import('./componentes/detalle-pedido/detalle-pedido.component').then(m => m.DetallePedidoComponent)},  
 { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'paginaError' }
];
