import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSeccionComponent } from './lista-seccion.component';

describe('ListaSeccionComponent', () => {
  let component: ListaSeccionComponent;
  let fixture: ComponentFixture<ListaSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
