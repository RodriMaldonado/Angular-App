import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReenviarcredencialesComponent } from './reenviarcredenciales.component';

describe('ReenviarcredencialesComponent', () => {
  let component: ReenviarcredencialesComponent;
  let fixture: ComponentFixture<ReenviarcredencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReenviarcredencialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReenviarcredencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
