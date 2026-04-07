import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtFormsComponent } from './rt-forms.component';

describe('RtFormsComponent', () => {
  let component: RtFormsComponent;
  let fixture: ComponentFixture<RtFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RtFormsComponent]
    });
    fixture = TestBed.createComponent(RtFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
