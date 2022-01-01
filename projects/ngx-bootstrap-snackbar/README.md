# ngx-bootstrap-snackbar
> Angular 11+ component for Bootstrap Snackbar (AKA Toast) notifications. 

[Stackblitz](https://stackblitz.com/edit/angular-ivy-hhbe3r)

[Demo](https://angular-ivy-hhbe3r.stackblitz.io)

## Pre-requisites
    Install the angular material package
    [Angular Material](https://material.angular.io/guide/getting-started)

    Import Angular Material theme : 
    @import "~@angular/material/prebuilt-themes/indigo-pink.css";

## Installation
    npm install --save @tech-pro/ngx-bootstrap-snackbar

## Usage

### Import `NgxBootstrapSnackbarModule`

```javascript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxBootstrapSnackbarModule } from '@tech-pro/ngx-bootstrap-snackbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxBootstrapSnackbarModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Place the `ngx-bootstrap-snackbar` tag on your app.component.html template

```html
<ngx-bootstrap-snackbar></ngx-bootstrap-snackbar>
```


### Use the `NgxBootstrapSnackbarService` to control snackbars

import { NgxBootstrapSnackbarService } from '@tech-pro/ngx-bootstrap-snackbar';


```typescript
import {Component} from '@angular/core';
import { NgxBootstrapSnackbarService } from '@tech-pro/ngx-bootstrap-snackbar';

@Component({
  selector: 'app-root',
  template: `
    <ngx-bootstrap-snackbar></ngx-bootstrap-snackbar>
  `
})
export class AppComponent {
  constructor(private ngxBootstrapSnackbar: NgxBootstrapSnackbarService) {}
}
```

**Options**

Use these properties to customize the snackbar component.

| Name | Description | Options | Default | Optional |
| --- | --- | --- | --- | --- |
| horizontal-position | The position where the snackbar appears horizontally| `start`, `center`, `end`, `left`, `right`| `center` | true |
| vertical-position | The position where the snackbar appears vertically| `top`, `bottom`| `bottom` | true |
| duration  | Number of milliseconds before the snackbar closes |  | `3000` | true |
| hideAutomatically | To hide the snackbar after the particular time |  | `true` | true |
| action | Action Button Text |  |  | true |
| panelClass | Custom class to append to the snackbar |  | | true |


**Methods**

| Name | Description | Return |
| --- | --- | --- |
| default | Open the snackbar with primary(`#004085`) bootstrap theme color | snackbarRef | 
| success | Open the snackbar with success(`#155724`) bootstrap theme color | snackbarRef |
| error | Open the snackbar with danger(`#721c24`) bootstrap theme color | snackbarRef |
| info | Open the snackbar with info(`#0c5460`) bootstrap theme color | snackbarRef | 
| warn | Open the snackbar with warn(`#856404`) bootstrap theme color | snackbarRef |
| custom | Open the snackbar with black blackground. Pass the panel class for custom color  | snackbarRef |
| close | Dismiss the snackbar |  |

## Example
```typescript
import {Component} from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, NgxBootstrapSnackbarService, SnackBarConfigModel } from '@tech-pro/ngx-bootstrap-snackbar';

@Component({
  selector: 'app-root',
  template: `
      <ngx-bootstrap-snackbar></ngx-bootstrap-snackbar>
      <div class="example-button-row">
        <button (click)="default()">Default</button>
        <button class="info" (click)="info()">Info</button>
        <button class="success" (click)="success()">Success</button>
        <button class="danger" (click)="error()">Error</button>
        <button class="warning" (click)="warn()">Warning</button>
      </div>

  `,
  styles: [`
    .example-button-row button {
      margin-right: 8px;box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-sizing: border-box;position: relative;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;cursor: pointer;outline: none; border: none;-webkit-tap-highlight-color: transparent;display: inline-block;white-space: nowrap;text-decoration: none;vertical-align: baseline;text-align: center;min-width: 64px;line-height: 36px;padding: 0 16px;border-radius: 4px;overflow: visible;}
    .info {color: #004085;background-color: #cce5ff;border-color: b8daff;}
    .success {color: #155724;background-color: #d4edda;border-color: #c3e6cb;}
    .danger {color: #721c24;background-color: #f8d7da;border-color: #f5c6cb;}
    .warning {color: #856404;background-color: #fff3cd;border-color: #ffeeba;}
  `]
})
export class AppComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  duration: number = 3000;
  hideAutomatically: boolean = true;
  action: string = null;

  constructor(private ngxBootstrapSnackbar: NgxBootstrapSnackbarService) {}

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
    this.ngxBootstrapSnackbar.default("I am Default Msg!", this.config);
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
    this.ngxBootstrapSnackbar.warn("I am Warning Msg!");
  }

}
```