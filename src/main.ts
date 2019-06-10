import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { RouterModule } from '@angular/router';

import {DialogContentExample, DialogContentExampleDialog} from './app/dialog-content-example';
import {AnotherPageComponent} from './app/another-page/another-page.component';
import {AppComponent} from './app/app/app.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'another-page',
        component: AnotherPageComponent,
      }, {
        path: 'dialog-example',
        component: DialogContentExample
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dialog-example',
      }
    ])
  ],
  entryComponents: [DialogContentExample, DialogContentExampleDialog],
  declarations: [DialogContentExample, DialogContentExampleDialog, AnotherPageComponent, AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */