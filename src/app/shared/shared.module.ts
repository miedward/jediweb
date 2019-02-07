import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { DigitOnlyDirective } from './components/digit-only.directive';
import { TestDirectiveDirective } from './components/test-directive.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    DigitOnlyDirective,
    TestDirectiveDirective
  ],
  exports: [
    DigitOnlyDirective,
    TestDirectiveDirective
  ],
})
export class SharedModule { }
