import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../clases/producto';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [NgIf,FormsModule,RouterLink,ReactiveFormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {

productoForm: FormGroup;
  mensajeError: string = '';

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
      comestible: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (!this.authService.estaLogueado()) {
      this.router.navigate(['/login']);
    }
  }

  async onSubmit() {
    if (this.productoForm.valid) {
      const { codigo, descripcion, precio, stock, paisOrigen, comestible } = this.productoForm.value;
      const nuevoProducto = new Producto(codigo, descripcion, parseFloat(precio), parseInt(stock), paisOrigen, comestible === 'true');
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