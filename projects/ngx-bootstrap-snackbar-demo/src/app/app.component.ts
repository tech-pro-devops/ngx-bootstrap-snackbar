import { Component, ViewEncapsulation } from '@angular/core';
import { NgxBootstrapSnackbarService } from 'projects/ngx-bootstrap-snackbar/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
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
