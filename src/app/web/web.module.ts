import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StartComponent } from './start/start.component';
import { HttpComponent } from './http/http.component';
import { MiddlewareComponent } from './middleware/middleware.component';
import { RoutingComponent } from './routing/routing.component';
import { ControllerComponent } from './controller/controller.component';
import { ViewComponent } from './view/view.component';
import { LayoutComponent } from './layout/layout.component';
import { FilterComponent } from './filter/filter.component';
import { DependencyComponent } from './dependency/dependency.component';
import { ExceptionComponent } from './exception/exception.component';

@NgModule({
   declarations: [
      StartComponent,
      HttpComponent,
      MiddlewareComponent,
      RoutingComponent,
      ControllerComponent,
      ViewComponent,
      LayoutComponent,
      FilterComponent,
      DependencyComponent,
      ExceptionComponent
   ],
   imports: [
      CommonModule,
      WebRoutingModule,
      SharedModule
   ]
})
export class WebModule { }
