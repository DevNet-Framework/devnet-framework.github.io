import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OverviewComponent } from './overview/overview.component';
import { PropertiesComponent } from './properties/properties.component';
import { ExtensionComponent } from './extension/extension.component';
import { GenericsComponent } from './generics/generics.component';

@NgModule({
  declarations: [
    OverviewComponent,
    PropertiesComponent,
    ExtensionComponent,
    GenericsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
