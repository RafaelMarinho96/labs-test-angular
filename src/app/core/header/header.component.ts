import { Component } from "@angular/core";
import { LinearProgressService } from "app/shared/components/linear-progress/linear-progress.service";

@Component({
    selector: 'app-header',
    template: `
        <app-linear-progress></app-linear-progress>
        <div class="header">
            <div class="header__container">
                <div class="header__row">
                    <div class="header__logo"></div>
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

    constructor(private linearProgressService: LinearProgressService){}

    ngOnInit(){
        // this.linearProgressService.start();
    }
}