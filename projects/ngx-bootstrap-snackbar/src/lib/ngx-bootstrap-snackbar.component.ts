import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-ngx-bootstrap-snackbar',
  template: `
    <p></p>
  `,
  styleUrls: ['./ngx-bootstrap-snackbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxBootstrapSnackbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


export declare type MatSnackBarHorizontalPosition = 'start' | 'center' | 'end' | 'left' | 'right';
export declare type MatSnackBarVerticalPosition = 'top' | 'bottom';
export interface SnackBarConfigModel {
    horizontalPosition?: MatSnackBarHorizontalPosition;
    verticalPosition?: MatSnackBarVerticalPosition;
    duration?: number;
    panelClass?: string | string[];
    hideAutomatically?: boolean;
}
