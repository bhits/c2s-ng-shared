import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ShowHidePasswordSandboxComponent} from "./sandbox/show-hide-password-sandbox/show-hide-password-sandbox.component";
import {PageTitleSandboxComponent} from "./sandbox/page-title-sandbox/page-title-sandbox.component";
import {HomeSandboxComponent} from "./sandbox/home-sandbox/home-sandbox.component";

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeSandboxComponent
  },
  {
    path: 'show-hide-password',
    pathMatch: 'full',
    component: ShowHidePasswordSandboxComponent
  },
  {
    path: 'page-title',
    pathMatch: 'full',
    component: PageTitleSandboxComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
