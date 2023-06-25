import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { QueryComponent } from './query/query.component';
import { SaveComponent } from './save/save.component';
import { RelationshipsComponent } from './relationships/relationships.component';
import { MigrationsComponent } from './migrations/migrations.component';

const routes: Routes = [
  { path: 'docs/entity/start', component: StartComponent },
  { path: 'docs/entity/query', component: QueryComponent },
  { path: 'docs/entity/save', component: SaveComponent },
  { path: 'docs/entity/relationships', component: RelationshipsComponent },
  { path: 'docs/entity/migrations', component: MigrationsComponent },
  { path: 'docs/entity', redirectTo: 'docs/entity/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRoutingModule { }
