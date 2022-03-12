import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetPerfilComponent } from './vet-perfil.component';

describe('VetPerfilComponent', () => {
  let component: VetPerfilComponent;
  let fixture: ComponentFixture<VetPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
