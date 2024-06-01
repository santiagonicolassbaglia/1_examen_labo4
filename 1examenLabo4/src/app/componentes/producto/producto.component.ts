import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../clases/producto';
import { AuthService } from '../../services/auth.service';
import { Pais } from '../../clases/pais';
import { SeleccionpaisComponent } from '../seleccionpais/seleccionpais.component';
import { PaisService } from '../../services/pais.service';
import { Observable } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ReactiveFormsModule, SeleccionpaisComponent],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productoForm: FormGroup;
  mensajeError: string = '';
  paisSeleccionado: Pais | null = null;
  paises$: Observable<Pais[]> | undefined;
  continentes = ['Africa','Americas','Asia','Europe','Oceania'];

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private authService: AuthService,
    private paisService: PaisService,
    private router: Router
  ) {
    this.productoForm = this.fb.group({
      codigo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      paisOrigen: ['', [Validators.required]],
      comestible: [false, [Validators.required]],
      continente: ['Americas', [Validators.required]]
    });

    // Initialize paises observable
    this.paises$ = this.productoForm.get('continente')?.valueChanges.pipe(
      startWith(this.productoForm.get('continente')?.value),
      switchMap(continente => this.cargarPaisesPorContinente(continente))
    );
  }

  ngOnInit(): void {
    if (!this.authService.estaLogueado()) {
      this.router.navigate(['/login']);
    }
  }

  cargarPaisesPorContinente(continente: string): Observable<Pais[]> {
    return this.paisService.obtenerPaisesPorContinente(continente);
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
