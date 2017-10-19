import {CommonModule, DatePipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "@angular/material";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {UsPhoneNumberPipe} from "./us-phone-number.pipe";
import {PageTitleComponent} from "./page-title/page-title.component";
import {ValidationService} from "./validation.service";
import {ShowHidePasswordComponent} from "./show-hide-password/show-hide-password.component";
import {FileValueAccessor} from "./file-value-accessor.directive";
import {FileValidator} from "./file-validator.directive";
import {ControlValidationErrorMessageComponent} from "./control-validation-error-message/control-validation-error-message.component";
import {ConsentProviderPipe} from "./consent-provider.pipe";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MaterialModule
  ],
  declarations: [
    UsPhoneNumberPipe,
    PageTitleComponent,
    ControlValidationErrorMessageComponent,
    ShowHidePasswordComponent,
    FileValueAccessor,
    FileValidator,
    ConsentProviderPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule,
    UsPhoneNumberPipe,
    ConsentProviderPipe,
    PageTitleComponent,
    ControlValidationErrorMessageComponent,
    ShowHidePasswordComponent,
    FileValueAccessor
  ],
  providers: [
    DatePipe,
    ValidationService,
    FileValidator
  ]
})

export class SharedModule {
}
