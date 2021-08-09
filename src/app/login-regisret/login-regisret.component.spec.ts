import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisretComponent } from './login-regisret.component';

describe('LoginRegisretComponent', () => {
  let component: LoginRegisretComponent;
  let fixture: ComponentFixture<LoginRegisretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegisretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
