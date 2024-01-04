import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BoardComponent } from './board/board.component';
import { OneboardComponent } from './oneboard/oneboard.component';
import { TwoboardComponent } from './twoboard/twoboard.component';
import { ThreeboardComponent } from './threeboard/threeboard.component';

@NgModule({
  declarations: [AppComponent, BoardComponent, OneboardComponent, TwoboardComponent, ThreeboardComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
