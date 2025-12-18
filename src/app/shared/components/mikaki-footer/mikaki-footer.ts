import { Component } from '@angular/core';
import { Common } from '../../../core/services/common';

@Component({
    selector: 'app-mikaki-footer',
    imports: [],
    templateUrl: './mikaki-footer.html',
    styleUrl: './mikaki-footer.css',
    providers: [Common],
})
export class MikakiFooter {
    constructor(public commonService: Common) {}
}
