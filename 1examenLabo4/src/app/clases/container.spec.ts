import { Container } from './container';

describe('Container', () => {
  it('should create an instance', () => {
    expect(new Container('1','codigo', 'color', 'empresa', 10, 'descripcion')).toBeTruthy();
  });
});
