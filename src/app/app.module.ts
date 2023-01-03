import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LOCALE_ID } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
// import { MatButtonModule } from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { NgSelectModule } from "@ng-select/ng-select";
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

// import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
// import { BrowserModule } from "@angular/platform-browser";

// import {
//   MatFormFieldModule,
//   MatIconModule,
//   MatInputModule,
//   MatListModule,
//   MatSelectModule,
//   MatSidenavModule,
//   MatCardModule,
//   MatTableModule
// } from "@angular/material";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatIconModule,
    // MatListModule,
    // MatInputModule,
    // MatSelectModule,
    // MatSidenavModule,
    // MatCardModule,
    // MatTableModule,
    RouterModule, 
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
