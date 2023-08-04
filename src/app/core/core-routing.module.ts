import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { PropertiesComponent } from './properties/properties.component';
import { ExtensionComponent } from './extension/extension.component';
import { GenericsComponent } from './generics/generics.component';
import { AsynchronousComponent } from './asynchronous/asynchronous.component';

const routes: Routes = [
  { path: 'docs/core/overview', component: OverviewComponent },
  { path: 'docs/core/properties', component: PropertiesComponent },
  { path: 'docs/core/extension', component: ExtensionComponent },
  { path: 'docs/core/generics', component: GenericsComponent },
  { path: 'docs/core/asynchronous', component: AsynchronousComponent },
  { path: 'docs/core', redirectTo: 'docs/core/overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
