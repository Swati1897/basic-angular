import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './Components/photos/photos.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo:"/home"},
  {path:"home", component: HomeComponent},
  {path:"photos", component: PhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }