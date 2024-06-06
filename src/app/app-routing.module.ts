import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {AddNewComponent} from "./components/add-new/add-new.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'new',
    component: AddNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
