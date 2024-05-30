import { Producto } from './producto';

describe('Producto', () => {
  it('should create an instance', () => {
expect(new Producto('codigo', 'descripcion', 1, 1, 'paisOrigen', true)).toBeTruthy();
  });
});
