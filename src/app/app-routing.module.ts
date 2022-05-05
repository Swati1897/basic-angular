import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './Components/photos/photos.component';
import { HomeComponent } from './Components/home/home.component';
import { CalculationComponent } from './Components/calculation/calculation.component';
import { BindingComponent } from './Components/binding/binding.component';
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

const routes: Routes = [
  //level 1
  {path: "", pathMatch:'full', redirectTo:"/home" },
  {path:"home", component: HomeComponent },
  {path:"photos", component: PhotosComponent },
  {path:"calculation", component: CalculationComponent },
  {path:"binding", component:BindingComponent },
  {path:"directives", component:DirectivesComponent },
  {path:"world", component:WorldComponent },
  {path:"america", component:AmericaComponent },
  {path:"asia", component:AisaComponent },
  {path:"animal", component:AnimalComponent },
  {path:"tiger", component:TigerComponent },
  {path:"lion", component:LionComponent },
  {path:"pune", component:PuneComponent },
  {path:"google", component:GoogleComponent },
  {path:"twitter", component:TwitterComponent },
  {path:"facebook", component:FacebookComponent },
  {path:"state", component:StateComponent, children:[
   //level 2
        {path:"", redirectTo:"pune", pathMatch:'full'},

          {path:"pune", component:PuneComponent, children:[
               //level 3
                {path:"", redirectTo:"nagpur",pathMatch:'full' }, 
                      {path:"nagpur", component:NagpurComponent }, 
           ] },
//{path:"nagpur", component:NagpurComponent },      
      
      ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
