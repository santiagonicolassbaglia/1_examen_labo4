import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaginaErrorComponent } from '../pagina-error/pagina-error.component';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../clases/usuario';
import { AuthService } from '../../services/auth.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, PaginaErrorComponent, NgIf,RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {

  nombre: string = '';
  mail: string = '';
  clave: string = '';
  mensajeError: string = '';
  
  //para validaciones

  private fb=inject(FormBuilder);
  protected form: FormGroup;
  
  constructor(private authService: AuthService, private router: Router,private loadingService:  SpinnerService) {}

  ngOnInit(): void {
 
    const required = Validators.required;

this.form = this.fb.group({
  
});
  } 
  registrar() {
    this.loadingService.show();
    setTimeout(() => {
      this.loadingService.hide();
    }, 3500);
 
if (this.hasError()) {
      return;
    }
    if (!this.nombre || !this.mail || !this.clave) {
      this.mensajeError = 'Por favor, completa todos los campos.';
      return;
    }
 
    const nuevoUsuario = new Usuario(this.nombre, this.mail, this.clave, '');

    
    this.authService.registrar(nuevoUsuario).then(() => {
 
      this.router.navigateByUrl('/login');
    }).catch((error) => {
      
      this.mensajeError = 'Hubo un problema al registrar el usuario. Inténtalo de nuevo.';
      console.error('Error al registrar usuario:', error);
    });
  }

  private hasError(): boolean {
    this.form.markAllAsTouched();
    return this.form.invalid;
     }


}
