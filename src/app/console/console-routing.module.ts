import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { OutputComponent } from './output/output.component';
import { InputComponent } from './input/input.component';
import { CommandComponent } from './command/command.component';

const routes: Routes = [
  { path: 'docs/console/start', component: StartComponent },
  { path: 'docs/console/output', component: OutputComponent },
  { path: 'docs/console/input', component: InputComponent },
  { path: 'docs/console/command', component: CommandComponent },
  { path: 'docs/console', redirectTo: 'docs/console/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule { }
