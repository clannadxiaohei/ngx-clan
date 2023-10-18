import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModule } from 'ngx-clan/demo';
import { NgxClanModule } from 'ngx-clan';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxClanModule,
    // DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
