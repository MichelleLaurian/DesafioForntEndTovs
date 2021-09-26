import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsharedComponent } from './formshared.component';

describe('FormsharedComponent', () => {
  let component: FormsharedComponent;
  let fixture: ComponentFixture<FormsharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});