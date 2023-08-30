import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OverviewComponent } from './overview/overview.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthorizationComponent } from './authorization/authorization.component';

@NgModule({
  declarations: [
    OverviewComponent,
    AuthenticationComponent,
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    SharedModule
  ]
})
export class SecurityModule { }
