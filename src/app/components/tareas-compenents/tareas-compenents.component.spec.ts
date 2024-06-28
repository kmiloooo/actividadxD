import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasCompenentsComponent } from './tareas-compenents.component';

describe('TareasCompenentsComponent', () => {
  let component: TareasCompenentsComponent;
  let fixture: ComponentFixture<TareasCompenentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasCompenentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasCompenentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
