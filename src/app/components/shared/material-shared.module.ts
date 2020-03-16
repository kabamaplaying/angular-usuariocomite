import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatInputModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [MatAutocompleteModule, MatInputModule, BrowserModule, CommonModule],
  exports: [MatAutocompleteModule, MatInputModule]
})
export class MaterialSharedModule { }