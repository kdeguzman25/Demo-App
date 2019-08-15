import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HeroesService } from "./services/heroes.service";
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesSingleComponent } from './heroes-single/heroes-single.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
