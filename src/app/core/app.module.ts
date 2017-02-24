import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule} from '../routing/app-routing.module';


//import for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../util-service/in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent} from '../dashboard/dashboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesComponent } from '../hero/heroes.component';
import { HeroService } from '../hero/hero.service';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@NgModule({
  imports: [ 
      BrowserModule, 
      FormsModule,
      AppRoutingModule,
      HttpModule, 
      InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  
  declarations: [ 
      AppComponent, 
      HeroDetailComponent, 
      HeroesComponent, 
      DashboardComponent,
      HeroSearchComponent
  ], 

  providers: [ HeroService ],
  bootstrap: [ AppComponent]
})

export class AppModule { }
