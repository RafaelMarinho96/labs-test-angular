import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

// Components
import { ConsultaCepComponent } from "@modules/consulta-cep.component";
import { BuscaComponent } from "@modules/consulta-cep/busca/busca.component";
import { MapaComponent } from "@modules/consulta-cep/mapa/mapa.component";
import { HelperTextModule } from "app/shared/components/helper-text/helper-text.module";

@NgModule({
    declarations: [
        ConsultaCepComponent,
        BuscaComponent,
        MapaComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HelperTextModule
    ],
    exports: [
        BuscaComponent,
        MapaComponent
    ]
})

export class ConsultaCepModule {}