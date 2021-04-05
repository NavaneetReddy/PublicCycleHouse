import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
      path: 'aboutUs',
      component: AboutUsComponent
  },
  {
    path:'ourTeam',
    component: OurTeamComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch :'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
