import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { SellingComponent } from './selling/selling.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'collection',
    component:CollectionComponent
  },
  {
    path:'arrival',
    component:ArrivalComponent
  },
  {
    path:'selling',
    component:SellingComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
