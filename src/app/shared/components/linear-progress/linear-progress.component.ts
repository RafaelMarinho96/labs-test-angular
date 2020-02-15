import { Component, OnInit } from "@angular/core";
import { LinearProgressService } from "./linear-progress.service";
import { Observable } from "rxjs";
import { LinearProgressType } from "./linear-progress-type";
import { map } from "rxjs/operators";

@Component({
    selector: 'app-linear-progress',
    template: `
        <hr [ngClass]="linearProgress$ | async">
    `,
    styles: [`
        .loading {
            margin: 0;
            background: linear-gradient(270deg, #ff0000, #ffa500, #ffff00, #008000, #0000ff, #4b0082, #ee82ee);
            animation: linear-progress 2s ease;
            height: 0.2em;
        }
        @keyframes linear-progress {
            0% {
                width: 0;
            }
            100% {
                width: 100%;
            }
        }

        .stopped {
            display: none;
        }
    `]
})

export class LinearProgressComponent implements OnInit{

    linearProgress$: Observable<string>;

    constructor(
        private linearProgressService: LinearProgressService
    ){}

    ngOnInit(){
        this.linearProgress$ = this.linearProgressService
            .getLinearLoading()
            .pipe(map(linearProgressType => linearProgressType.valueOf()));
    }
}