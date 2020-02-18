import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    template: `
        <app-linear-progress></app-linear-progress>
        <div class="header">
            <div class="header__container">
                <div class="header__row">
                    <a routerLink="/" class="header__logo"></a>
                    <a href="https://github.com/RafaelMarinho96/labs-test-angular" class="header__button--github">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        <div>
    `,
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

    constructor(
        private router: Router){}

    onClickLogo(){
        this.router.navigate['/'];
    }
}