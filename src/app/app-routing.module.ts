import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticMapsComponent } from './static-maps/static-maps.component';
import { NavigationMapsComponent } from './navigation-maps/navigation-maps.component';
import { AuthorComponent } from './author/author.component';


const routes: Routes = [

  { path: 'author', component: AuthorComponent },
  { path: 'static', component: StaticMapsComponent },
  { path: 'navigation', component: NavigationMapsComponent },

  { path: '', redirectTo: '/author', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
