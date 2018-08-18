import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {LoginComponent} from "./auth/login/login.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:"resume", redirectTo: '/assets/sample.pdf' },
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutusComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
