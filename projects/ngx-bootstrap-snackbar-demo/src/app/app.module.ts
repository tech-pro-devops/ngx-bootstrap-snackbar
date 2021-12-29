import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxBootstrapSnackbarModule } from '@tech-pro/ngx-bootstrap-snackbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    NgxBootstrapSnackbarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
