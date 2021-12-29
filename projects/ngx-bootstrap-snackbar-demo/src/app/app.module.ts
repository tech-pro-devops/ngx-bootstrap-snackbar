import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBootstrapSnackbarModule } from 'projects/ngx-bootstrap-snackbar/src/public-api';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgxBootstrapSnackbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
