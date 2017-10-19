import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowHidePasswordSandboxComponent} from './show-hide-password-sandbox/show-hide-password-sandbox.component';
import {SharedModule} from "../shared/shared.module";
import {PageTitleSandboxComponent} from './page-title-sandbox/page-title-sandbox.component';
import {HomeSandboxComponent} from './home-sandbox/home-sandbox.component';
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [ShowHidePasswordSandboxComponent, PageTitleSandboxComponent, HomeSandboxComponent]
})
export class SandboxModule {
}
