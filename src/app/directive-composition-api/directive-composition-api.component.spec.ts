import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveCompositionApiComponent } from './directive-composition-api.component';

describe('DirectiveCompositionApiComponent', () => {
  let component: DirectiveCompositionApiComponent;
  let fixture: ComponentFixture<DirectiveCompositionApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DirectiveCompositionApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveCompositionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
