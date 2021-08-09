import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompUpdateComponent } from './comp-update.component';

describe('CompUpdateComponent', () => {
  let component: CompUpdateComponent;
  let fixture: ComponentFixture<CompUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
