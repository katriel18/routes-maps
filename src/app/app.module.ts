import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticMapsComponent } from './static-maps/static-maps.component';
import { NavigationMapsComponent } from './navigation-maps/navigation-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticMapsComponent,
    NavigationMapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
