import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { QueryComponent } from './query/query.component';
import { SaveComponent } from './save/save.component';
import { RelationshipsComponent } from './relationships/relationships.component';
import { MigrationsComponent } from './migrations/migrations.component';

const routes: Routes = [
  { path: 'docs/orm/start', component: StartComponent },
  { path: 'docs/orm/query', component: QueryComponent },
  { path: 'docs/orm/save', component: SaveComponent },
  { path: 'docs/orm/relationships', component: RelationshipsComponent },
  { path: 'docs/orm/migrations', component: MigrationsComponent },
  { path: 'docs/orm', redirectTo: 'docs/orm/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrmRoutingModule { }
