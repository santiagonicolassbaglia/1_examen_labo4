export class Container {
  id?: string;
  codigo: string;
    color: string;
    empresa: string;
    capacidad: number;
    descripcion: string;
  constructor(id:string  ,codigo: string, color: string, empresa: string, capacidad: number, descripcion: string) {
    this.codigo = codigo;
    this.color = color;
    this.empresa = empresa;
    this.capacidad = capacidad;
    this.descripcion = descripcion;
    
  }
}
