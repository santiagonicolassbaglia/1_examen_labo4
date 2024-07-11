export class Pedido {
    constructor(
      public productoId: string,
      public descripcion: string,
      public cantidad: number,
      public fecha: Date,
      public codigoContainer: string,
    ) {}
  
    toPlainObject() {
      return {
        productoId: this.productoId,
        descripcion: this.descripcion,
        cantidad: this.cantidad,
        fecha: this.fecha,
        codigoContainer: this.codigoContainer,
      };
    }
  }
  