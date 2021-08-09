import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateCameraComponent } from './crate-camera.component';

describe('CrateCameraComponent', () => {
  let component: CrateCameraComponent;
  let fixture: ComponentFixture<CrateCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrateCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
