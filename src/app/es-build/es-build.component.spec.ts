import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsBuildComponent } from './es-build.component';

describe('EsBuildComponent', () => {
  let component: EsBuildComponent;
  let fixture: ComponentFixture<EsBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EsBuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
