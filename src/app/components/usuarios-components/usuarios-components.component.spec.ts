import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosComponentsComponent } from './usuarios-components.component';

describe('UsuariosComponentsComponent', () => {
  let component: UsuariosComponentsComponent;
  let fixture: ComponentFixture<UsuariosComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
