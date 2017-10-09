import {Component, OnInit} from '@angular/core';
import {SandboxComponent, TEMPLATE_PREFIX} from "../sandbox-component";

@Component({
  selector: 'c2s-page-title-sandbox',
  // templateUrl: './page-title-sandbox.component.html',
  template: TEMPLATE_PREFIX + PageTitleSandboxComponent.template,
  styleUrls: ['./page-title-sandbox.component.css']
})
export class PageTitleSandboxComponent implements OnInit, SandboxComponent {

  pageTitle: string = "Sample Title";

  static template: string = `
<p>
  Back button is hidden:
</p>
<c2s-page-title [title]="pageTitle" [isHidden]="true"></c2s-page-title>
<p>
  Back button is not hidden:
</p>
<c2s-page-title [title]="pageTitle" [isHidden]="false"></c2s-page-title>`;

  constructor() {
  }

  ngOnInit() {
  }

  getTemplate(): string {
    return PageTitleSandboxComponent.template;
  }

}
