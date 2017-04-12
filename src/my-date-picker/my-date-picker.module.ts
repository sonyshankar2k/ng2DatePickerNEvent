import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ng2datepickernevent } from "./my-date-picker.component";
import { FocusDirective } from "./directives/my-date-picker.focus.directive";
import { InputAutoFillDirective } from "./directives/my-date-picker.input.auto.fill.directive";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ng2datepickernevent, FocusDirective, InputAutoFillDirective],
    exports: [ng2datepickernevent, FocusDirective, InputAutoFillDirective]
})
export class ng2datepickerneventModule {
}
