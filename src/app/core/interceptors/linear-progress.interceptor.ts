import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

// Services
import { LinearProgressService } from "app/shared/components/linear-progress/linear-progress.service";

@Injectable({
    providedIn: 'root'
})

export class LinearProgressInterceptor implements HttpInterceptor{

    constructor(
        private linearProgressService: LinearProgressService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): 
        Observable<HttpSentEvent | 
        HttpHeaderResponse | 
        HttpProgressEvent | 
        HttpResponse<any> | 
        HttpUserEvent<any>> {

        return next
            .handle(req)
            .pipe(tap(event => {
                if(event instanceof HttpResponse){
                    this.linearProgressService.keep();
                }else{
                    this.linearProgressService.start();
                }
            }));
    }
}