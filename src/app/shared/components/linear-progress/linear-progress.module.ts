import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LinearProgressComponent } from "./linear-progress.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LinearProgressInterceptor } from "app/core/interceptors/linear-progress.interceptor";

@NgModule({
    declarations: [
        LinearProgressComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LinearProgressComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LinearProgressInterceptor,
            multi: true
        }
    ]
})

export class LinearProgressModule {}