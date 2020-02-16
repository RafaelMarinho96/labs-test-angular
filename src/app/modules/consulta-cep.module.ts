import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

// Components
import { ConsultaCepComponent } from "@modules/consulta-cep.component";
import { BuscaComponent } from "@modules/consulta-cep/busca/busca.component";
import { MapaComponent } from "@modules/consulta-cep/mapa/mapa.component";
import { HelperTextModule } from "app/shared/components/helper-text/helper-text.module";
import { AgmCoreModule } from "@agm/core";
import { NumericDirective } from "app/core/directives/only-number.directive";
import { ConsultaCepService } from "./consulta-cep.service";

@NgModule({
    declarations: [
        ConsultaCepComponent,
        BuscaComponent,
        MapaComponent,
        NumericDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HelperTextModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCz9YJFL0cXt1IGUTVOfG6UNinhcpg6AjA'
        })
    ],
    exports: [
        BuscaComponent,
        MapaComponent
    ],
    providers: [
        ConsultaCepService
    ]
})

export class ConsultaCepModule {}