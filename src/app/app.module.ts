import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TagsComponent } from './tags.component';
import { SnapshotsComponent } from './snapshots.component';


@NgModule({
  declarations: [
    AppComponent,
    TagsComponent,
    SnapshotsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
