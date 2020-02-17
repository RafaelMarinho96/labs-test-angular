import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LinearProgressType } from "./linear-progress-type";
import { startWith } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class LinearProgressService {

    linearProgressSubject = new Subject<LinearProgressType>();

    getLinearLoading(){
        return this.linearProgressSubject
            .asObservable()
            .pipe(startWith(LinearProgressType.KEEP));
    }

    start(){
        this.linearProgressSubject.next(LinearProgressType.LOADING);
    }

    stop(){
        this.linearProgressSubject.next(LinearProgressType.STOPPED);
    }

    keep(){
        this.linearProgressSubject.next(LinearProgressType.KEEP);
    }
}