import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

// Services
import { LinearProgressService } from "./linear-progress.service";

@Component({
    selector: 'app-linear-progress',
    template: `
        <hr [ngClass]="linearProgress$ | async">
    `,
    styles: [`
        .loading {
            margin: 0;
            border: 0;
            background: linear-gradient(to right,#ffff4a 0,#fcd000 7%,#ffc112 11%,#ff8a00 17%,#ff5f5f 23%,#ff5156 29%,#ff7ae7 35%,#ff5193 41%,#c739ff 46%,#a400e1 63%,#2eceff 76%,#0086ff 87%,#72f772 97%,#00d604);
            animation: linear-progress 2s ease;
            height: 0.5em;
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

        .keep {
            margin: 0;
            border: 0;
            background: linear-gradient(to right,#ffff4a 0,#fcd000 7%,#ffc112 11%,#ff8a00 17%,#ff5f5f 23%,#ff5156 29%,#ff7ae7 35%,#ff5193 41%,#c739ff 46%,#a400e1 63%,#2eceff 76%,#0086ff 87%,#72f772 97%,#00d604);
            height: 0.5em;
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