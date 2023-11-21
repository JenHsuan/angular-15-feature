import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveCompositionApiAppliedComponent } from './directive-composition-api-applied.component';

describe('DirectiveCompositionApiAppliedComponent', () => {
  let component: DirectiveCompositionApiAppliedComponent;
  let fixture: ComponentFixture<DirectiveCompositionApiAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DirectiveCompositionApiAppliedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveCompositionApiAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
