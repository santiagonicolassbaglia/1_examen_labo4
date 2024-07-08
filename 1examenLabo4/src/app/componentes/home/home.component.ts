import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Usuario } from '../../clases/usuario';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf,FormsModule,RouterLink,LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  user: any;
  username: string = '';
  nombreUsuario: string = '';

  constructor(private apiservis: ApiService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.getUserProfile();
    this.getNombreUsuario();
  }

  getUserProfile(): void {
    this.apiservis.getFixedUser().subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching user data', error);
      }
    );
  }

  getNombreUsuario(): void {
    this.authService.getCurrentUserName().subscribe(
      (nombre) => {
        this.nombreUsuario = nombre || '';
      },
      (error) => {
        console.error('Error fetching user name', error);
      }
    );
  }

  cerrarSesion() {
    this.authService.logout()
      .then(() => {
        console.log('Sesión cerrada correctamente');
        this.router.navigateByUrl('/login');
      })
      .catch(error => {
        console.error('Error al cerrar sesión:', error);
      });
  }
}
