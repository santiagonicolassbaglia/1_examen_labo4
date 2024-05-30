import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../clases/usuario';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent implements OnInit {
   
  usuarios$: Observable<Usuario[]>;

  constructor(private router: Router, private auths: AuthService) { }

  ngOnInit(): void {
    this.usuarios$ = this.auths.getAllUsers();

  }
 
  cerrarSesion() {
    this.auths.logout()
      .then(() => {
        console.log('Sesión cerrada correctamente');
        this.router.navigateByUrl('/login');
      })
      .catch(error => {
        console.error('Error al cerrar sesión:', error);
      });

  

}}
