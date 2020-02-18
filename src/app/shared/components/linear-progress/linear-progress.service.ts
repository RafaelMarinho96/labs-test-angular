import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { startWith } from "rxjs/operators";

// Enums
import { LinearProgressType } from "./linear-progress-type";

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

    // Start Linear Progress
    start(){
        this.linearProgressSubject.next(LinearProgressType.LOADING);
    }

    // Stop Linear Progress
    stop(){
        this.linearProgressSubject.next(LinearProgressType.STOPPED);
    }

    // Keep Full Progress Bar
    keep(){
        this.linearProgressSubject.next(LinearProgressType.KEEP);
    }
}