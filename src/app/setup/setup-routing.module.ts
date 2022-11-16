import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstallationComponent } from './installation/installation.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: 'docs/setup/overview', component: OverviewComponent },
  { path: 'docs/setup/installation', component: InstallationComponent },
  { path: 'docs/setup', redirectTo: 'docs/setup/overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
