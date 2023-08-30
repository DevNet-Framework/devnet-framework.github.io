import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthorizationComponent } from './authorization/authorization.component';

const routes: Routes = [
  { path: 'docs/security/overview', component: OverviewComponent },
  { path: 'docs/security/authentication', component: AuthenticationComponent },
  { path: 'docs/security/authorization', component: AuthorizationComponent },
  { path: 'docs/security', redirectTo: 'docs/security/overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
