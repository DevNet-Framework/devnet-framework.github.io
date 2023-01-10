import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StartComponent } from './start/start.component';
import { HttpComponent } from './http/http.component';
import { RoutingComponent } from './routing/routing.component';
import { ControllerComponent } from './controller/controller.component';
import { ViewComponent } from './view/view.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    StartComponent,
    HttpComponent,
    RoutingComponent,
    ControllerComponent,
    ViewComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule
  ]
})
export class WebModule { }
