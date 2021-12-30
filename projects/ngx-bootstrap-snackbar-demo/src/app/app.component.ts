import { Component } from '@angular/core';
import { NgxBootstrapSnackbarService } from '@tech-pro/ngx-bootstrap-snackbar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .example-button-row button {
      margin-right: 8px;
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
      min-width: 64px;
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
  `]
})
export class AppComponent {
  title = 'ngx-bootstrap-snackbar-demo';

  constructor(private ngxBootstrapSnackbar: NgxBootstrapSnackbarService) {

  }
  default() {
    this.ngxBootstrapSnackbar.default("I am Default Msg!");
  }
  success() {
    this.ngxBootstrapSnackbar.success("I am Success Msg!");
  }
  error() {
    this.ngxBootstrapSnackbar.error("I am Error Msg!");
  }
  info() {
    this.ngxBootstrapSnackbar.info("I am Info Msg!");
  }
  warn() {
    this.ngxBootstrapSnackbar.warn("I am Warning Msg!");
  }
}
