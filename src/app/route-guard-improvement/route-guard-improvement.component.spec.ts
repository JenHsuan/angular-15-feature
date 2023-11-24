import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuardImprovementComponent } from './route-guard-improvement.component';

describe('RouteGuardImprovementComponent', () => {
  let component: RouteGuardImprovementComponent;
  let fixture: ComponentFixture<RouteGuardImprovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouteGuardImprovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteGuardImprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
