import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxBootstrapSnackbarComponent } from './ngx-bootstrap-snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { NgxBootstrapSnackbarService } from './ngx-bootstrap-snackbar.service';



@NgModule({
  declarations: [NgxBootstrapSnackbarComponent],
  imports: [
    MatSnackBarModule
  ],
  exports: [
    NgxBootstrapSnackbarComponent,
    MatSnackBarModule
  ],
  providers: [NgxBootstrapSnackbarService]
})
export class NgxBootstrapSnackbarModule {

  static forRoot(): ModuleWithProviders<NgxBootstrapSnackbarModule> {
    return {
      ngModule: NgxBootstrapSnackbarModule,
      providers: [NgxBootstrapSnackbarService]
    };
  }

}
