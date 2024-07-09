import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdInputComponent } from './std-input.component';

describe('StdInputComponent', () => {
  let component: StdInputComponent;
  let fixture: ComponentFixture<StdInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdInputComponent]
    });
    fixture = TestBed.createComponent(StdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
