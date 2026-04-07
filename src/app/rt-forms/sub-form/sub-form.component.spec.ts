import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFormComponent } from './sub-form.component';

describe('SubFormComponent', () => {
  let component: SubFormComponent;
  let fixture: ComponentFixture<SubFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubFormComponent]
    });
    fixture = TestBed.createComponent(SubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
