import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { ConsultaCepComponent } from "./modules/consulta-cep.component";

const ROUTES: Routes = [
    { 
        path: '',
        component: ConsultaCepComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule {}