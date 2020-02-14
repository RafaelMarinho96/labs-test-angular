import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ViaCepService } from "app/core/services/via-cep.service";

@Component({
    selector: 'app-busca',
    template: `
        <div>
            <form #form="ngForm" [formGroup]="buscaForm" (ngSubmit)="consultaCep()">
                <h3>Consultar</h3>
                busca: <input type="text" formControlName="cep">
                <input type="submit" value="Consultar">
                <helper-text 
                    [value]="'Preencha todos os campos'"
                    *ngIf="buscaForm.get('cep').errors?.required && (form.submitted || buscaForm.get('cep').touched)">
                </helper-text>
                <helper-text 
                    [value]="'Complete todos os digitos'"
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
        private viaCep: ViaCepService){}

    ngOnInit(): void {
        this.buscaForm = this.formBuilder.group({
            cep: ['',
                [
                    Validators.required,
                    Validators.maxLength(9),
                    Validators.minLength(9)
                ]
            ]
        })
    }

    consultaCep(){
        let cep = this.buscaForm.get('cep').value;

        if(this.buscaForm.valid && !this.buscaForm.pending){
            this.viaCep.getCep(cep).subscribe((result) => {
                console.log(result);
            },
            (error) => {
                console.log(error);
            })
        }
    }
}