import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleRoutingModule } from './console-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StartComponent } from './start/start.component';
import { OutputComponent } from './output/output.component';

@NgModule({
   declarations: [
      StartComponent,
      OutputComponent
   ],
   imports: [
      CommonModule,
      ConsoleRoutingModule,
      SharedModule
   ]
})
export class ConsoleModule { }
