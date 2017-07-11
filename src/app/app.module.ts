import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntercomComponent } from './intercom/intercom.component';
import { KeyboardComponent } from './intercom/keyboard/keyboard.component';
import { ButtonComponent } from './intercom/keyboard/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    IntercomComponent,
    KeyboardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
