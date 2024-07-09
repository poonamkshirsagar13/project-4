import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdErrorComponent } from './std-error.component';

describe('StdErrorComponent', () => {
  let component: StdErrorComponent;
  let fixture: ComponentFixture<StdErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdErrorComponent]
    });
    fixture = TestBed.createComponent(StdErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
