import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//idioma espa paraguay
import  localeEsPy from '@angular/common/locales/es-PY';
import  localeEsHN from '@angular/common/locales/es-HN';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsPy);
registerLocaleData(localeEsHN);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
