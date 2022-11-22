import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: 'docs/console/start', component: StartComponent },
  { path: 'docs/console', redirectTo: 'docs/console/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule { }
