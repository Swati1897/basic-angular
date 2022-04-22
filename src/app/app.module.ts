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


// configuration

@NgModule({
  declarations: [              //components
    AppComponent,
    HomeComponent,
    PhotosComponent,
    CalculationComponent,
    BindingComponent,
    DirectivesComponent,
   
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
