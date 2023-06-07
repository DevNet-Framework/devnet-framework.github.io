import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  { path: 'docs/entity/start', component: StartComponent },
  { path: 'docs/entity/query', component: QueryComponent },
  { path: 'docs/entity', redirectTo: 'docs/setup/overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRoutingModule { }
