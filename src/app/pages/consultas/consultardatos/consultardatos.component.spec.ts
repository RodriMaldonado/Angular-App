import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultardatosComponent } from './consultardatos.component';

describe('ConsultardatosComponent', () => {
  let component: ConsultardatosComponent;
  let fixture: ComponentFixture<ConsultardatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultardatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultardatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
