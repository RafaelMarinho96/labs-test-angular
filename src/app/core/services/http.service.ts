import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "@environments/environment";

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(private http: HttpClient){}

    private formatErrors(error: any) {
        return throwError(error.error);
    }
    
    get(path: string, params: HttpParams = new HttpParams()): Observable<any>{
        return this.http.get(`${environment.viacep}${path}`, {params})
            .pipe(catchError(this.formatErrors));
    }
}