import {Component} from '@angular/core';

declare var require: any;
const appStyles: string = require('./sample-date-picker-app.css');
const appTemplate: string = require('./sample-date-picker-app.html');

@Component({
    selector: 'ng2datepickernevent-app',
    styles: [appStyles],
    template: appTemplate
})

export class ng2datepickerneventApp {

    constructor() {
        console.log('constructor: ng2datepickerneventApp');
    }

}
