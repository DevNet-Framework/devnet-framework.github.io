import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OverviewComponent } from './overview/overview.component';
import { PropertiesComponent } from './properties/properties.component';
import { ExtensionComponent } from './extension/extension.component';
import { LinqComponent } from './linq/linq.component';
import { GenericsComponent } from './generics/generics.component';
import { AsynchronousComponent } from './asynchronous/asynchronous.component';
import { DelegatesComponent } from './delegates/delegates.component';

@NgModule({
  declarations: [
    OverviewComponent,
    PropertiesComponent,
    ExtensionComponent,
    LinqComponent,
    GenericsComponent,
    AsynchronousComponent,
    DelegatesComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
