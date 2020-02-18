import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Components
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        CommonModule
    ]
})

export class ErrorsModule {}