import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpComponent } from './http/http.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: 'docs/web/start', component: StartComponent },
  { path: 'docs/web/http', component: HttpComponent },
  { path: 'docs/web', redirectTo: 'docs/web/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
