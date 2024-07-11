export class Pedido {
    id: string;
    productoId: string;
    productoNombre: string;
    cantidad: number;
    fecha: Date;
  
    constructor(productoId: string, productoNombre: string, cantidad: number, fecha: Date) {
      this.id = '';
      this.productoId = productoId;
      this.productoNombre = productoNombre;
      this.cantidad = cantidad;
      this.fecha = fecha;
    }
  }
  