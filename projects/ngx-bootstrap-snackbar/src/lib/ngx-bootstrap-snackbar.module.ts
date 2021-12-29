import { NgModule } from '@angular/core';
import { NgxBootstrapSnackbarComponent } from './ngx-bootstrap-snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'



@NgModule({
  declarations: [NgxBootstrapSnackbarComponent],
  imports: [
    MatSnackBarModule
  ],
  exports: [NgxBootstrapSnackbarComponent]
})
export class NgxBootstrapSnackbarModule { }
