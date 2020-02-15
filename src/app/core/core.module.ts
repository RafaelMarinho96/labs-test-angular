import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { LinearProgressModule } from "app/shared/components/linear-progress/linear-progress.module";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        LinearProgressModule
    ],
    exports: [
        HeaderComponent
    ]
})

export class CoreModule {}