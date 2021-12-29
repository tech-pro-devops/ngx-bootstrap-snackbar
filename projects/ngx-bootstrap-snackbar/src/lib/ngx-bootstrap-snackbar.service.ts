import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackBarConfigModel } from './ngx-bootstrap-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class NgxBootstrapSnackbarService {

  constructor(
    private readonly snackBar: MatSnackBar
  ) { }

  default(message: string, action?: string, configuration?: SnackBarConfigModel) {
    return this.show(message, action, {
      duration: configuration?.duration || 3500,
      horizontalPosition: configuration?.horizontalPosition || 'center',
      verticalPosition: configuration?.verticalPosition || 'bottom',
      panelClass: configuration?.panelClass || ['alert']
    }, configuration?.hideAutomatically);
  }

  info(message: string, action?: string, configuration?: SnackBarConfigModel) {
    return this.show(message, action, {
      duration: configuration?.duration || 3500,
      horizontalPosition: configuration?.horizontalPosition || 'center',
      verticalPosition: configuration?.verticalPosition || 'bottom',
      panelClass: configuration?.panelClass || ['alert','alert-primary']
    }, configuration?.hideAutomatically);
  }

  success(message: string, action?: string, configuration?: SnackBarConfigModel) {
    return this.show(message, action, {
      duration: configuration?.duration || 3500,
      horizontalPosition: configuration?.horizontalPosition || 'center',
      verticalPosition: configuration?.verticalPosition || 'bottom',
      panelClass: configuration?.panelClass || ['alert','alert-success']
    }, configuration?.hideAutomatically);
  }

  warn(message: string, action?: string, configuration?: SnackBarConfigModel) {
    return this.show(message, action, {
      duration: configuration?.duration || 3000,
      horizontalPosition: configuration?.horizontalPosition || 'center',
      verticalPosition: configuration?.verticalPosition || 'bottom',
      panelClass: configuration?.panelClass || ['alert','alert-warning']
    }, configuration?.hideAutomatically);
  }

  error(message: string, action?: string, configuration?: SnackBarConfigModel) {
    return this.show(message, action, {
      duration: configuration?.duration || 3000,
      horizontalPosition: configuration?.horizontalPosition || 'center',
      verticalPosition: configuration?.verticalPosition || 'bottom',
      panelClass: configuration?.panelClass || ['alert','alert-danger']
    }, configuration?.hideAutomatically);
  }

  private show(message: string, action: string, configuration: MatSnackBarConfig, hideAutomatically: boolean = true): MatSnackBarRef<any> {
    if (!hideAutomatically) {
      delete configuration?.duration;
    }
    return this.snackBar.open(message, action, configuration);
  }
}
