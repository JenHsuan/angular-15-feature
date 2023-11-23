import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteUnwrapDefaultComponent } from './route-unwrap-default.component';

describe('RouteUnwrapDefaultComponent', () => {
  let component: RouteUnwrapDefaultComponent;
  let fixture: ComponentFixture<RouteUnwrapDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouteUnwrapDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteUnwrapDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
