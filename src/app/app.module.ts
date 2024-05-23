import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FolderComponent } from './folder/folder.component';
import {HttpClientModule} from "@angular/common/http";
import { FolderListComponent } from './folder/folder-list/folder-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FolderComponent,
    FolderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
