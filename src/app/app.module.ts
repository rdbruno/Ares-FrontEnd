import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

import { SharedModule } from './shared/shared.module';
import { AuthService } from './shared/services/auth.service';
import { ServicosService } from './shared/services/servicos.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatNativeDateModule
  ],
  providers: [
    AuthService,
    ServicosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
