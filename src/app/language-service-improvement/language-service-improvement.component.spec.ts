import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageServiceImprovementComponent } from './language-service-improvement.component';

describe('LanguageServiceImprovementComponent', () => {
  let component: LanguageServiceImprovementComponent;
  let fixture: ComponentFixture<LanguageServiceImprovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LanguageServiceImprovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageServiceImprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
