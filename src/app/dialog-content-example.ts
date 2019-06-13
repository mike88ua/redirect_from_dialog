import {Component, OnDestroy, ViewContainerRef} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RootContainerService} from "./root-container.service";


/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'dialog-content-example',
  templateUrl: 'dialog-content-example.html',
  styleUrls: ['dialog-content-example.css'],
})
export class DialogContentExample implements OnDestroy {

  dialogRef;

  constructor(
    public dialog: MatDialog,
    private container: ViewContainerRef,
    private rootContainerService: RootContainerService
  ) {
  }

  openDialog() {
    const config = {
      viewContainerRef: this.container,
    };
    this.dialogRef = this.dialog.open(DialogContentExampleDialog, config);
  }

  openDialogTricky() {
    const injector = this.container.injector;
    const rootComponent = Object.create(this.rootContainerService.instance);
    Object.defineProperty(rootComponent, 'injector', {
      get() {
        return injector;
      }
    });
    const config = {
      viewContainerRef: rootComponent,
    };
    this.dialogRef = this.dialog.open(DialogContentExampleDialog, config);
  }

  ngOnDestroy() {
    this.dialogRef && this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
