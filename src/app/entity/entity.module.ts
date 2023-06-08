import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityRoutingModule } from './entity-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StartComponent } from './start/start.component';
import { QueryComponent } from './query/query.component';
import { SaveComponent } from './save/save.component';

@NgModule({
  declarations: [
    StartComponent,
    QueryComponent,
    SaveComponent
  ],
  imports: [
    CommonModule,
    EntityRoutingModule,
    SharedModule
  ]
})
export class EntityModule { }
