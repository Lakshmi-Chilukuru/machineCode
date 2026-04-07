import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Async2Component } from './async2.component';

describe('Async2Component', () => {
  let component: Async2Component;
  let fixture: ComponentFixture<Async2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Async2Component]
    });
    fixture = TestBed.createComponent(Async2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
