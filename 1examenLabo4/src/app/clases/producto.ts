export class Producto {
    constructor(
      public codigo: string,
      public descripcion: string,
      public precio: number,
      public stock: number,
      public paisOrigen: string,
      public comestible: boolean
    ) {}
  }
  