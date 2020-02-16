import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable()

export class ConsultaCepService {

    private cepSource = new BehaviorSubject<string>("09240210");
    currentCep = this.cepSource.asObservable();

    constructor(){}

    changeCep(cep: string){
        this.cepSource.next(cep);
    }
}