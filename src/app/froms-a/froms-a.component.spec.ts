import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromsAComponent } from './froms-a.component';

describe('FromsAComponent', () => {
  let component: FromsAComponent;
  let fixture: ComponentFixture<FromsAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromsAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
