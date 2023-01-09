import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControllerComponent } from './controller/controller.component';
import { HttpComponent } from './http/http.component';
import { RoutingComponent } from './routing/routing.component';
import { StartComponent } from './start/start.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'docs/web/start', component: StartComponent },
  { path: 'docs/web/http', component: HttpComponent },
  { path: 'docs/web/routing', component: RoutingComponent },
  { path: 'docs/web/controller', component: ControllerComponent },
  { path: 'docs/web/view', component: ViewComponent },
  { path: 'docs/web', redirectTo: 'docs/web/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
