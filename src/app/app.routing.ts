import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { ConsultaCepComponent } from "./modules/consulta-cep.component";
import { NotFoundComponent } from "./core/errors/not-found/not-found.component";

const ROUTES: Routes = [
    { 
        path: '',
        component: ConsultaCepComponent,
        data: {
            title: 'Labs - Consulta CEP'
        }
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule {}