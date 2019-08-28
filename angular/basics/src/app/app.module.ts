import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemlateDrivenComponent } from './temlate-driven/temlate-driven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


@NgModule({
  declarations: [
    AppComponent,
    TemlateDrivenComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
