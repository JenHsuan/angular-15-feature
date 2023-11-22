import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDirectiveComponent } from './image-directive.component';

describe('ImageDirectiveComponent', () => {
  let component: ImageDirectiveComponent;
  let fixture: ComponentFixture<ImageDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ImageDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
