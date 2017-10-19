import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHidePasswordSandboxComponent } from './show-hide-password-sandbox.component';

describe('ShowHidePasswordSandboxComponent', () => {
  let component: ShowHidePasswordSandboxComponent;
  let fixture: ComponentFixture<ShowHidePasswordSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHidePasswordSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHidePasswordSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
