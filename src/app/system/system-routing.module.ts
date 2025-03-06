import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ExtensionComponent } from './extension/extension.component';
import { LinqComponent } from './linq/linq.component';
import { GenericsComponent } from './generics/generics.component';
import { AsynchronousComponent } from './asynchronous/asynchronous.component';
import { DelegatesComponent } from './delegates/delegates.component';

const routes: Routes = [
  { path: 'docs/system/overview', component: OverviewComponent },
  { path: 'docs/system/generics', component: GenericsComponent },
  { path: 'docs/system/asynchronous', component: AsynchronousComponent },
  { path: 'docs/system/extension', component: ExtensionComponent },
  { path: 'docs/system/linq', component: LinqComponent },
  { path: 'docs/system/delegates', component: DelegatesComponent },
  { path: 'docs/system', redirectTo: 'docs/system/overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
