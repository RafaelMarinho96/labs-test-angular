import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// Components
import { ConsultaCepComponent } from "@modules/consulta-cep.component";
import { BuscaComponent } from "@modules/consulta-cep/busca/busca.component";
import { MapaComponent } from "@modules/consulta-cep/mapa/mapa.component";

// Modules
import { HelperTextModule } from "app/shared/components/helper-text/helper-text.module";

// Vendors
import { AgmCoreModule } from "@agm/core";
import { NgxMaskModule } from 'ngx-mask'
import { SnackbarModule } from 'ngx-snackbar';

// Services
import { ConsultaCepService } from "./consulta-cep.service";

// Directives
import { NumericDirective } from "app/core/directives/only-number.directive";

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
        }),
        NgxMaskModule.forRoot(),
        SnackbarModule.forRoot()
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