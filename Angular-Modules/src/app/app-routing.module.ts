import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutPageComponent} from "./about-page/about-page.component";
import {AboutExtraPageComponent} from "./about-page/about-extra-page/about-extra-page.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'about', component: AboutPageComponent, children: [
        {path: 'extra', component: AboutExtraPageComponent}
      ]},
    {path: '', component: HomePageComponent, pathMatch: 'full'}
  ])],
  exports: [RouterModule]

})
export class AppRoutingModule { }
