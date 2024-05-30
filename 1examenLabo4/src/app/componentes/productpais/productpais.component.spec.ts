import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductpaisComponent } from './productpais.component';

describe('ProductpaisComponent', () => {
  let component: ProductpaisComponent;
  let fixture: ComponentFixture<ProductpaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductpaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
