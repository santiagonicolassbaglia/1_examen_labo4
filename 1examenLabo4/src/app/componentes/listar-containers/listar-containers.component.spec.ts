import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarContainersComponent } from './listar-containers.component';

describe('ListarContainersComponent', () => {
  let component: ListarContainersComponent;
  let fixture: ComponentFixture<ListarContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarContainersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
