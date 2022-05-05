import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { PhotosComponent } from './Components/photos/photos.component';
import { CalculationComponent } from './Components/calculation/calculation.component';
import { BindingComponent } from './Components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './Components/directives/directives.component';
import { WorldComponent } from './Components/world/world.component';
import { AmericaComponent } from './Components/america/america.component';
import { AisaComponent } from './Components/aisa/aisa.component';
import { AnimalComponent } from './Components/animal/animal.component';
import { TigerComponent } from './Components/tiger/tiger.component';
import { LionComponent } from './Components/lion/lion.component';
import { StateComponent } from './Components/state/state.component';
import { PuneComponent } from './Components/pune/pune.component';
import { NagpurComponent } from './Components/nagpur/nagpur.component';
import { GoogleComponent } from './Components/google/google.component';
import { TwitterComponent } from './Components/twitter/twitter.component';
import { FacebookComponent } from './Components/facebook/facebook.component';


// configuration

@NgModule({
  declarations: [              //components
    AppComponent,
    HomeComponent,
    PhotosComponent,
    CalculationComponent,
    BindingComponent,
    DirectivesComponent,
    WorldComponent,
    AmericaComponent,
    AisaComponent,
    AnimalComponent,
    TigerComponent,
    LionComponent,
    StateComponent,
    PuneComponent,
    NagpurComponent,
    GoogleComponent,
    TwitterComponent,
    FacebookComponent,
   
  ],
  imports: [                   // modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],               //services
  bootstrap: [AppComponent]
})
    //handle own responsibilities
export class AppModule { }
