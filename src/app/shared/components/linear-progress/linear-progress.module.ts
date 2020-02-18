import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

// Components
import { LinearProgressComponent } from "./linear-progress.component";

// Interceptors
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