import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleSandboxComponent } from './page-title-sandbox.component';

describe('PageTitleSandboxComponent', () => {
  let component: PageTitleSandboxComponent;
  let fixture: ComponentFixture<PageTitleSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTitleSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTitleSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
