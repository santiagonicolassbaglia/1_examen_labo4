import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../clases/producto';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { Pais } from '../../clases/pais';
import { SeleccionpaisComponent } from '../seleccionpais/seleccionpais.component';
import { PaisService } from '../../services/pais.service';
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [NgIf,FormsModule,RouterLink,ReactiveFormsModule,SeleccionpaisComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {


  productoForm: FormGroup;
  mensajeError: string = '';
  paisSeleccionado: Pais | null = null;
  continenteSeleccionado: string = 'America';

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private authService: AuthService,
    private router: Router
  ) {
    this.productoForm = this.fb.group({
      codigo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      paisOrigen: ['', [Validators.required]],
      comestible: [false, [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (!this.authService.estaLogueado()) {
      this.router.navigate(['/login']);
    }
  }

  onPaisSeleccionado(pais: Pais) {
    this.paisSeleccionado = pais;
    this.productoForm.get('paisOrigen')?.setValue(pais.nombre);
  }

  async onSubmit() {
    if (this.productoForm.valid) {
      const { codigo, descripcion, precio, stock, paisOrigen, comestible } = this.productoForm.value;
      const nuevoProducto = new Producto(codigo, descripcion, parseFloat(precio), parseInt(stock), paisOrigen, comestible);
      try {
        await this.productoService.crearProducto(nuevoProducto);
        console.log('Producto agregado correctamente');
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Error al agregar el producto:', error);
        this.mensajeError = 'Hubo un error al agregar el producto. Intente nuevamente.';
      }
    }
  }
}