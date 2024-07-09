import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdPopupComponent } from './std-popup.component';

describe('StdPopupComponent', () => {
  let component: StdPopupComponent;
  let fixture: ComponentFixture<StdPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdPopupComponent]
    });
    fixture = TestBed.createComponent(StdPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
