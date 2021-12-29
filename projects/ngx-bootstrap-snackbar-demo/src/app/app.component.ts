import { Component } from '@angular/core';
import { NgxBootstrapSnackbarService } from 'projects/ngx-bootstrap-snackbar/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-bootstrap-snackbar-demo';

  constructor(private ngxBootstrapSnackbar: NgxBootstrapSnackbarService) {

  }

  showMsg() {
    this.ngxBootstrapSnackbar.success("I am Success Msg", "OK!", {hideAutomatically: false});
  }
}
