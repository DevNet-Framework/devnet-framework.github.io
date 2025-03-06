import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './system-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OverviewComponent } from './overview/overview.component';
import { ExtensionComponent } from './extension/extension.component';
import { LinqComponent } from './linq/linq.component';
import { GenericsComponent } from './generics/generics.component';
import { AsynchronousComponent } from './asynchronous/asynchronous.component';
import { DelegatesComponent } from './delegates/delegates.component';

@NgModule({
  declarations: [
    OverviewComponent,
    ExtensionComponent,
    LinqComponent,
    GenericsComponent,
    AsynchronousComponent,
    DelegatesComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule
  ]
})
export class SystemModule { }
