import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticMapsComponent } from './static-maps/static-maps.component';
import { NavigationMapsComponent } from './navigation-maps/navigation-maps.component';


const routes: Routes = [

  { path: '', component: StaticMapsComponent },
      { path: 'static', component: StaticMapsComponent },
      { path: 'navigation', component: NavigationMapsComponent },

      {path: '', redirectTo: '/static', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
