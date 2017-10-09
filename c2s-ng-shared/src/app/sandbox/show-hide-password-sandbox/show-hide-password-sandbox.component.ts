import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SandboxComponent, TEMPLATE_PREFIX} from "../sandbox-component";

@Component({
  selector: 'c2s-show-hide-password-sandbox',
  // templateUrl: './show-hide-password-sandbox.component.html',
  template: TEMPLATE_PREFIX + ShowHidePasswordSandboxComponent.template,
  styleUrls: ['./show-hide-password-sandbox.component.css']
})
export class ShowHidePasswordSandboxComponent implements OnInit, SandboxComponent {
  private myGroup: FormGroup;
  public dependency: string = '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">';
  static template: string = `
<pre>
  Depends on: {{dependency}}
</pre>

<div fxLayout="row">
  <form [formGroup]="myGroup" >
    <md-input-container>
      <div fxLayout="row">
        <input #i formControlName="password"
               [type]="'password'"
               mdInput
               placeholder="please enter password">
        <c2s-show-hide-password (setInputType)="i.type = $event"></c2s-show-hide-password>
      </div>
    </md-input-container>
  </form>
</div>`;

  constructor() {
  }

  ngOnInit() {
    this.myGroup = new FormGroup({
      password: new FormControl()
    });
  }

  getTemplate(): string {
    return ShowHidePasswordSandboxComponent.template;
  }

}
