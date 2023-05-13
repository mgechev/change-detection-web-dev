import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { ListGenerator } from './tree-generator.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [ListGenerator],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
