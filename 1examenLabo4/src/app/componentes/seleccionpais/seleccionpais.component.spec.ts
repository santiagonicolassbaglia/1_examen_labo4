import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionpaisComponent } from './seleccionpais.component';

describe('SeleccionpaisComponent', () => {
  let component: SeleccionpaisComponent;
  let fixture: ComponentFixture<SeleccionpaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionpaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeleccionpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
