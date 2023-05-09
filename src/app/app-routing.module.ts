import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
   { path: "", component: HomeComponent },
   { path: "docs", component: DocsComponent },
   { path: "**", component: ErrorComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
   exports: [RouterModule]
})
export class AppRoutingModule { }
