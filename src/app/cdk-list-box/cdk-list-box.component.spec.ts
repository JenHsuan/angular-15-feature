import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkListBoxComponent } from './cdk-list-box.component';

describe('CdkListBoxComponent', () => {
  let component: CdkListBoxComponent;
  let fixture: ComponentFixture<CdkListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CdkListBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
