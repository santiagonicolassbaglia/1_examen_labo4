import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarContainerComponent } from './modificar-container.component';

describe('ModificarContainerComponent', () => {
  let component: ModificarContainerComponent;
  let fixture: ComponentFixture<ModificarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
