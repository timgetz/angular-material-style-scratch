import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTestTwoComponent } from './form-test-two.component';

describe('FormTestTwoComponent', () => {
  let component: FormTestTwoComponent;
  let fixture: ComponentFixture<FormTestTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTestTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTestTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
