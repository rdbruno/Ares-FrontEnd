import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicaPerfilComponent } from './clinica-perfil.component';

describe('ClinicaPerfilComponent', () => {
  let component: ClinicaPerfilComponent;
  let fixture: ComponentFixture<ClinicaPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicaPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
