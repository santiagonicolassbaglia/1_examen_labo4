import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaginaErrorComponent } from '../pagina-error/pagina-error.component';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../clases/usuario';
import { AuthService } from '../../services/auth.service';

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
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {

    // this.form = this.fb.group({
    // nombre: new FormControl(null,Validators.compose([Validators.required, Validators.minLength(3)])),
    // mail: new FormControl(null,Validators.compose([Validators.required, Validators.email])),
    // clave: new FormControl(null,Validators.compose([Validators.required, Validators.minLength(6)]))

    // });

    const required = Validators.required;

this.form = this.fb.group({
 
 
});
  }

 


  registrar() {
    // Verificar que los campos no estén vacíos
if (this.hasError()) {
      return;
    }
    if (!this.nombre || !this.mail || !this.clave) {
      this.mensajeError = 'Por favor, completa todos los campos.';
      return;
    }

    // Crear un nuevo objeto de usuario con los datos del formulario
    const nuevoUsuario = new Usuario(this.nombre, this.mail, this.clave, '');

    // Llamar al método de registro del servicio AuthService
    this.authService.registrar(nuevoUsuario).then(() => {
      // Redirigir al usuario al componente de inicio de sesión después del registro exitoso
      this.router.navigateByUrl('/login');
    }).catch((error) => {
      // Manejar errores de registro
      this.mensajeError = 'Hubo un problema al registrar el usuario. Inténtalo de nuevo.';
      console.error('Error al registrar usuario:', error);
    });
  }

  private hasError(): boolean {
    this.form.markAllAsTouched();
    return this.form.invalid;
     }


}
