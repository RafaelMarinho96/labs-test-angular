import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';

// Modules
import { ConsultaCepModule } from './modules/consulta-cep.module';
import { ErrorsModule } from './core/errors/errors.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    ConsultaCepModule,
    CoreModule,
    ErrorsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
