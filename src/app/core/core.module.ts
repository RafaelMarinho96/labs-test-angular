import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// Components
import { HeaderComponent } from "./header/header.component";

// Modules
import { LinearProgressModule } from "app/shared/components/linear-progress/linear-progress.module";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        LinearProgressModule,
        RouterModule
    ],
    exports: [
        HeaderComponent
    ]
})

export class CoreModule {}