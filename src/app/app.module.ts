import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { PhotosComponent } from './Components/photos/photos.component';
import { CalculationComponent } from './Components/calculation/calculation.component';


// configuration

@NgModule({
  declarations: [              //components
    AppComponent,
    HomeComponent,
    PhotosComponent,
    CalculationComponent,
   
  ],
  imports: [                   // modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],               //services
  bootstrap: [AppComponent]
})
          //handle own responsibilities
export class AppModule { }
