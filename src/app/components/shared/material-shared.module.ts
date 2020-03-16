import { NgModule } from '@angular/core';
import {
  MatInputModule,

} from '@angular/material/input';
import {
  MatAutocompleteModule
} from '@angular/material/autocomplete';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [MatAutocompleteModule, MatInputModule, BrowserModule, CommonModule],
  exports: [MatAutocompleteModule, MatInputModule]
})
export class MaterialSharedModule { }