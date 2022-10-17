import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameWindowComponent } from './game-window/game-window.component';
import { PopoutDirective } from './popout.directive';

@NgModule({
  declarations: [
    AppComponent,
    GameWindowComponent,
    PopoutDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
