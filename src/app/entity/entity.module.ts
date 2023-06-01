import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityRoutingModule } from './entity-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
    EntityRoutingModule,
    SharedModule
  ]
})
export class EntityModule { }
