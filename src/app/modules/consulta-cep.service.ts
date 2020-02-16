import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Address } from "app/core/models/address";


@Injectable()

export class ConsultaCepService {

    private addressSource = new BehaviorSubject<any>('São Paulo');
    currentAddress= this.addressSource.asObservable();

    constructor(){}

    changeCep(address: Address){
        this.addressSource.next(address);
    }
}