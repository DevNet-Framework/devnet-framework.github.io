import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StartComponent } from './start/start.component';
import { HttpComponent } from './http/http.component';
import { RoutingComponent } from './routing/routing.component';

@NgModule({
  declarations: [
    StartComponent,
    HttpComponent,
    RoutingComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule
  ]
})
export class WebModule { }
