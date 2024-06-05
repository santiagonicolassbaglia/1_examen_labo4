import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarcontenedorComponent } from './eliminarcontenedor.component';

describe('EliminarcontenedorComponent', () => {
  let component: EliminarcontenedorComponent;
  let fixture: ComponentFixture<EliminarcontenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarcontenedorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarcontenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
