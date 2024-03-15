import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SetupModule } from './setup/setup.module';
import { SystemModule } from './system/system.module';
import { ConsoleModule } from './console/console.module';
import { WebModule } from './web/web.module';
import { OrmModule } from './orm/orm.module';
import { SecurityModule } from './security/security.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { DocsComponent } from './docs/docs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    SetupModule,
    SystemModule,
    ConsoleModule,
    WebModule,
    OrmModule,
    SecurityModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
