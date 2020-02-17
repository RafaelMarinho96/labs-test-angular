import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ViaCepService } from "app/core/services/via-cep.service";
import { ConsultaCepService } from "@modules/consulta-cep.service";
import { Address } from "app/core/models/address";

@Component({
    selector: 'app-busca',
    template: `
        <div class="search">
            <form #form="ngForm" [formGroup]="buscaForm" (ngSubmit)="consultaCep()" class="form">
                <h3 class="form__title">Consultar</h3>
                <div class="form__row--inline">
                    <div class="form__group--inline">
                        <label class="form__label--inline">CEP:</label>
                        <input type="text" mask="99999-999" placeholder="00000-000" formControlName="cep" class="form__input--inline">
                        <input type="submit" value="Consultar" class="form__button--inline">
                    </div>
                </div>
                
                <helper-text 
                    [value]="'Preencha todos os campos'"
                    *ngIf="buscaForm.get('cep').errors?.required && (form.submitted || buscaForm.get('cep').touched)">
                </helper-text>
                <helper-text 
                    [value]="'CPF invalido, preencha todos os campos'"
                    *ngIf="buscaForm.get('cep').errors?.minlength  && (form.submitted || buscaForm.get('cep').touched)">
                </helper-text>
            </form>
        </div>
    `,
    styleUrls: ['./busca.component.scss']
})

export class BuscaComponent implements OnInit {

    buscaForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private viaCep: ViaCepService,
        private consultaCepService: ConsultaCepService){}

    ngOnInit(): void {
        this.buscaForm = this.formBuilder.group({
            cep: ['',
                [
                    Validators.required,
                    Validators.maxLength(8),
                    Validators.minLength(8)
                ]
            ]
        })
    }

    consultaCep(){
        let cep = this.buscaForm.get('cep').value;

        cep = cep.replace('-','');

        if(this.buscaForm.valid && !this.buscaForm.pending){
            this.viaCep.getCep(cep).subscribe((address: Address) => {
                if (address.erro == true){

                }else{
                    this.consultaCepService.changeCep(address);
                }
            },
            (error) => {
                console.log("Houve um erro" + error);
            })
        }
    }
}