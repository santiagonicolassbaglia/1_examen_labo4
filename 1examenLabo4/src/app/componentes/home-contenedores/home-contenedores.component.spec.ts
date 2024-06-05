import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContenedoresComponent } from './home-contenedores.component';

describe('HomeContenedoresComponent', () => {
  let component: HomeContenedoresComponent;
  let fixture: ComponentFixture<HomeContenedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContenedoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeContenedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
