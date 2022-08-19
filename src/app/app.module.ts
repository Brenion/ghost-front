import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageModule } from './mainpage/mainpage.module';
import { PatchComponent } from './patch/patch.component';



@NgModule({
  declarations: [
    AppComponent,  
    PatchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
