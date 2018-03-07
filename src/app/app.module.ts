import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
