import { BoutiqueComponent } from './../boutique/boutique.component';
import { AccueilComponent } from './../accueil/accueil.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
const routes = [
  {path:"", redirectTo:"/accueil", pathMatch:"full"},
  {path:"accueil", component:AccueilComponent},
  {path:"boutique", component:BoutiqueComponent}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class RoutingModule { }
