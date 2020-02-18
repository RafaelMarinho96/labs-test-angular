import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template: `
        <div class="not-found">
            <div class="not-found__container">
                <h1>Oops!</h1>
                <p class="not-found__subtitle">Pagina não Encontrada 😧</p>
                <p class="not-found__text">O link que você tentou acessar não esta disponivel ou não é valido para este site.</p>
                <div class="not-found__button">
                    <button class="button button--success button--center" (click)="onClickBack()">Voltar ao Inicio</button>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./not-found.component.scss']
})

export class NotFoundComponent {

    constructor(private router: Router){}

    onClickBack(){
        this.router.navigate(['/']);
    }
}