import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-bootstrap-snackbar',
  template: `
    <ng-container></ng-container>
  `,
  styleUrls: ['./ngx-bootstrap-snackbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
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
