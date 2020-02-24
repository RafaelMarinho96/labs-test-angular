import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// Models
import { Address } from "app/core/models/address";

// Services
import { ViaCepService } from "app/core/services/via-cep.service";
import { ConsultaCepService } from "@modules/consulta-cep.service";

// Vendors
import { SnackbarService } from 'ngx-snackbar';

@Component({
    selector: 'app-busca',
    template: `
        <div class="search">
            <form #form="ngForm" [formGroup]="buscaForm" (ngSubmit)="consultaCep()" class="form">
                <h3 class="form__title">Consultar</h3>
                <div class="form__row--inline">
                    <div class="form__group--inline">
                        <label class="form__label--inline">CEP:</label>
                        <div>
                            <input type="text" mask="00000-000" placeholder="00000-000" formControlName="cep" id="cep" class="form__input--inline cep">
                            <helper-text 
                                [value]="'Preencha o CEP'"
                                *ngIf="buscaForm.get('cep').errors?.required && (form.submitted || buscaForm.get('cep').touched)">
                            </helper-text>
                            <helper-text 
                                [value]="'Complete o CEP'"
                                *ngIf="buscaForm.get('cep').errors?.minlength  && (form.submitted || buscaForm.get('cep').touched)">
                            </helper-text>
                        </div>
                        <input type="submit" value="Buscar" class="form__button--inline">
                    </div>
                </div>                
            </form>
        </div>

        <ngx-snackbar [position]="'bottom-center'" [max]="3"></ngx-snackbar>
    `,
    styleUrls: ['./busca.component.scss']
})

export class BuscaComponent implements OnInit {

    buscaForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private viaCep: ViaCepService,
        private consultaCepService: ConsultaCepService,
        private snackbarService: SnackbarService){}

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
                    this.invalidCep();
                }else{
                    this.consultaCepService.changeCep(address);
                }
            },
            (error) => {
                this.wsViaCepUnavailable();
            })
        }
    }

    invalidCep() {
        const _this = this;
        this.snackbarService.add({
          msg: '<span>O CEP Informado é Invalido 😕</span>',
          timeout: 5000,
          action: {
            text: 'Fechar'
          }
        });
      }

      wsViaCepUnavailable() {
        const _this = this;
        this.snackbarService.add({
          msg: '<strong>Serviço de consulta de CEP indisponivel</strong>',
          timeout: 5000,
          action: {
            text: 'Fechar'
          }
        });
      }
}