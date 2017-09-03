import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTestAutoComponent } from './form-test-auto.component';

describe('FormTestAutoComponent', () => {
  let component: FormTestAutoComponent;
  let fixture: ComponentFixture<FormTestAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTestAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTestAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
