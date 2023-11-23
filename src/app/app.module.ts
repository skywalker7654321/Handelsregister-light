import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { StartpageComponent } from './startpage/startpage.component'

import { AppRoutingModule } from './app-routing.module';
import { RechtsvormComponent } from './rechtsvorm/rechtsvorm.component';
import { InschrijvendelenComponent } from './inschrijvendelen/inschrijvendelen.component';
import { OndernemingComponent } from './onderneming/onderneming.component';
import { PersoonsgegevensComponent } from './persoonsgegevens/persoonsgegevens.component';
import { FunctionarisComponent } from './functionaris/functionaris.component';
import { VestigingComponent } from './vestiging/vestiging.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UittrekselComponent } from './uittreksel/uittreksel.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    RechtsvormComponent,
    InschrijvendelenComponent,
    OndernemingComponent,
    PersoonsgegevensComponent,
    FunctionarisComponent,
    VestigingComponent,
    DashboardComponent,
    UittrekselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
