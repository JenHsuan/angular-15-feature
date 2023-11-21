import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveCompositionApiNormalComponent } from './directive-composition-api-normal.component';

describe('DirectiveCompositionApiNormalComponent', () => {
  let component: DirectiveCompositionApiNormalComponent;
  let fixture: ComponentFixture<DirectiveCompositionApiNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DirectiveCompositionApiNormalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveCompositionApiNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
