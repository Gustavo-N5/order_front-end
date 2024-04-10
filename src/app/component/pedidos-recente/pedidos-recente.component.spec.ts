import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosRecenteComponent } from './pedidos-recente.component';

describe('PedidosRecenteComponent', () => {
  let component: PedidosRecenteComponent;
  let fixture: ComponentFixture<PedidosRecenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidosRecenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PedidosRecenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
