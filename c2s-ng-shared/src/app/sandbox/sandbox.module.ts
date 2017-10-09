import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowHidePasswordSandboxComponent} from './show-hide-password-sandbox/show-hide-password-sandbox.component';
import {SharedModule} from "../shared/shared.module";
import {PageTitleSandboxComponent} from './page-title-sandbox/page-title-sandbox.component';
import {HomeSandboxComponent} from './home-sandbox/home-sandbox.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ShowHidePasswordSandboxComponent, PageTitleSandboxComponent, HomeSandboxComponent]
})
export class SandboxModule {
}
