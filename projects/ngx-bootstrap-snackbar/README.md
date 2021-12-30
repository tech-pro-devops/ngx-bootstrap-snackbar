# ngx-bootstrap-snackbar
> Angular 11 component for Bootstrap Snackbar (AKA Toast) notifications. 

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

## Example
```typescript
import {Component} from '@angular/core';
import { NgxBootstrapSnackbarService } from '@tech-pro/ngx-bootstrap-snackbar';

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
  constructor(private ngxBootstrapSnackbar: NgxBootstrapSnackbarService) {}

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
```