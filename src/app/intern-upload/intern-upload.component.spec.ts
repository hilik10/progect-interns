import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternUploadComponent } from './intern-upload.component';

describe('InternUploadComponent', () => {
  let component: InternUploadComponent;
  let fixture: ComponentFixture<InternUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
