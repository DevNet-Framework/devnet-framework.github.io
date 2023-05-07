import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { HttpComponent } from './http/http.component';
import { RoutingComponent } from './routing/routing.component';
import { MiddlewareComponent } from './middleware/middleware.component';
import { ControllerComponent } from './controller/controller.component';
import { ViewComponent } from './view/view.component';
import { LayoutComponent } from './layout/layout.component';
import { FilterComponent } from './filter/filter.component';
import { DependencyComponent } from './dependency/dependency.component';
import { ExceptionComponent } from './exception/exception.component';

const routes: Routes = [
  { path: 'docs/web/start', component: StartComponent },
  { path: 'docs/web/http', component: HttpComponent },
  { path: 'docs/web/middleware', component: MiddlewareComponent },
  { path: 'docs/web/routing', component: RoutingComponent },
  { path: 'docs/web/controller', component: ControllerComponent },
  { path: 'docs/web/view', component: ViewComponent },
  { path: 'docs/web/layout', component: LayoutComponent },
  { path: 'docs/web/filter', component: FilterComponent },
  { path: 'docs/web/dependency', component: DependencyComponent },
  { path: 'docs/web/exception', component: ExceptionComponent },
  { path: 'docs/web', redirectTo: 'docs/web/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
