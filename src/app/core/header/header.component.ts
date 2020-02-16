import { Component } from "@angular/core";
import { LinearProgressService } from "app/shared/components/linear-progress/linear-progress.service";

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

export class HeaderComponent {

    constructor(private linearProgressService: LinearProgressService){}

    ngOnInit(){
        this.linearProgressService.start();
    }
}