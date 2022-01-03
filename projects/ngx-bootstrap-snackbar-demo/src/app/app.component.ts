import { Component } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, NgxBootstrapSnackbarService, SnackBarConfigModel } from 'projects/ngx-bootstrap-snackbar/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`

    .box {
      border: 1px solid rgba(0,0,0,.2);
      border-radius: 4px;
      padding: 10px;
      margin: 5px 0 24px 0;
      width: 50%;
    }
    button {
      margin: 4px;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12);
      box-sizing: border-box;
      position: relative;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      cursor: pointer;
      outline: none;
      border: none;
      -webkit-tap-highlight-color: transparent;
      display: inline-block;
      white-space: nowrap;
      text-decoration: none;
      vertical-align: baseline;
      text-align: center;
      min-width: 84px;
      line-height: 36px;
      padding: 0 16px;
      border-radius: 4px;
      overflow: visible;
    }
    .info {
      color: #004085 !important;
      background-color: #cce5ff !important;
      border-color: #b8daff;
    }
    .success {
        color: #155724 !important;
        background-color: #d4edda !important;
        border-color: #c3e6cb;
    }
    .danger {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
    }
    .warning {
        color: #856404;
        background-color: #fff3cd;
        border-color: #ffeeba;
    }
    .example-radio-group {
      display: flex;
      flex-direction: row;
      margin: 15px 0;
    }
    .example-radio-button {
      margin: 5px;
    }
  `]
})
export class AppComponent {
  title = 'ngx-bootstrap-snackbar-demo';
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  duration: number = 3000;
  hideAutomatically: boolean = true;
  action: string = null;

  constructor(private ngxBootstrapSnackbar: NgxBootstrapSnackbarService) {
  }

  get config() {
   return {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.duration,
      hideAutomatically: this.hideAutomatically,
      action: this.action
    }
  }

  default() {
    this.ngxBootstrapSnackbar.default("I am Default Msg!" , this.config);
  }
  success() {
    this.ngxBootstrapSnackbar.success("I am Success Msg!", this.config);
  }
  error() {
    this.ngxBootstrapSnackbar.error("I am Error Msg!", this.config);
  }
  info() {
    this.ngxBootstrapSnackbar.info("I am Info Msg!", this.config);
  }
  warn() {
    this.ngxBootstrapSnackbar.warn("I am Warning Msg!", this.config);
  }

  custom() {
    let config: SnackBarConfigModel = this.config;
    config.panelClass = ['alert', 'alert-custom'];
    this.ngxBootstrapSnackbar.custom("I am Custom Msg!", config);
  }

  close() {
    this.ngxBootstrapSnackbar.close();
  }
}
