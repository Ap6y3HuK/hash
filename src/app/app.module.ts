import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'app/app.component';
import { AppRoutingModule } from 'app/app-routing.module';

import { HashModule } from 'app/hash/HashModule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HashModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
