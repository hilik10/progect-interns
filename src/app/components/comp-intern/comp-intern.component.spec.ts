import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInternComponent } from './comp-intern.component';

describe('CompInternComponent', () => {
  let component: CompInternComponent;
  let fixture: ComponentFixture<CompInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompInternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
