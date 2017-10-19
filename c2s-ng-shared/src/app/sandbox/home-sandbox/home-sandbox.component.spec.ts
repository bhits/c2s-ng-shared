import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSandboxComponent } from './home-sandbox.component';

describe('HomeSandboxComponent', () => {
  let component: HomeSandboxComponent;
  let fixture: ComponentFixture<HomeSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
