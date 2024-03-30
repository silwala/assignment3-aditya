import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetIndexComponent} from "./pet-index/pet-index.component";
import {PetDetailsComponent} from "./pet-details/pet-details.component";

const routes: Routes = [
  {path: '', component: PetIndexComponent},
  {path: 'pet/:id', component: PetDetailsComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
