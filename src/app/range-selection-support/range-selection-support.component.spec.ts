import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSelectionSupportComponent } from './range-selection-support.component';

describe('RangeSelectionSupportComponent', () => {
  let component: RangeSelectionSupportComponent;
  let fixture: ComponentFixture<RangeSelectionSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RangeSelectionSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeSelectionSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
