import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <app-linear-progress></app-linear-progress>
        <div class="header">
            <div class="header__container">
                <h1 class="header__logo">Labs Map</h1>
            </div>
        <div>
    `,
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {}