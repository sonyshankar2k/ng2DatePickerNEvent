import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ng2datepickerneventApp} from './sample-date-picker-app';

import {SampleDatePickerNormal} from './sample-date-picker-normal';
import {SampleDatePickerInline} from './sample-date-picker-inline';
import {SampleDatePickerAccessModifier} from './sample-date-picker-access-modifier';

import {ng2datepickerneventModule} from '../src/my-date-picker/my-date-picker.module';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, ng2datepickerneventModule],
    declarations: [ng2datepickerneventApp, SampleDatePickerNormal, SampleDatePickerInline, SampleDatePickerAccessModifier],
    bootstrap: [ng2datepickerneventApp]
})
export class SampleDatePickerModule { }