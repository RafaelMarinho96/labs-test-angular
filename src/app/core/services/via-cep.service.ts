import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "@environments/environment";

@Injectable({
    providedIn: 'root'
})

export class ViaCepService {

    constructor(private http: HttpClient){}

    getCep(cep: number){
        return this.http.jsonp(`${environment.viacep}${cep}/json/?callback=cep`, 'callback');
    }
}
