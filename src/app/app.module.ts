import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialSharedModule } from './components/shared/material-shared.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscarIntegranteComponent } from './components/buscar-integrante/buscar-integrante.component';
@NgModule({
  imports: [
    MaterialSharedModule, BrowserModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule, FormsModule],
  declarations: [ AppComponent, BuscarIntegranteComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
