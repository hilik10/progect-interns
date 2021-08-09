import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompUploadComponent } from './comp-upload.component';

describe('CompUploadComponent', () => {
  let component: CompUploadComponent;
  let fixture: ComponentFixture<CompUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
