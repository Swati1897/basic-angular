import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './Components/photos/photos.component';
import { HomeComponent } from './Components/home/home.component';
import { CalculationComponent } from './Components/calculation/calculation.component';
import { BindingComponent } from './Components/binding/binding.component';
import { DirectivesComponent } from './Components/directives/directives.component';

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo:"/home"},
  {path:"home", component: HomeComponent},
  {path:"photos", component: PhotosComponent },
  {path:"calculation", component: CalculationComponent},
  {path:"binding", component:BindingComponent},
  // {path:"directives ", component:DirectivesComponent},
  {path:"directives", component:DirectivesComponent},
  // {path:" ", component:  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
