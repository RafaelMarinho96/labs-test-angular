import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";

@Injectable({
    providedIn: 'root'
})

export class ViaCepService {

    constructor(private http: HttpService){}

    getCep(cep: number){
        return this.http.get(cep + '/json');
    }
}
