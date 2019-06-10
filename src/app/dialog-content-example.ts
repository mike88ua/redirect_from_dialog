import {Component, ViewContainerRef} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'dialog-content-example',
  templateUrl: 'dialog-content-example.html',
  styleUrls: ['dialog-content-example.css'],
})
export class DialogContentExample {
  constructor(
    public dialog: MatDialog,
    private container: ViewContainerRef,
  ) {
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      closeOnNavigation: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogWithContainer() {
    const config = {
      viewContainerRef: this.container,
      closeOnNavigation: true,
    };
    const dialogRef = this.dialog
    .open(DialogContentExampleDialog, config);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */