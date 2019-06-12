import {Component, OnDestroy, ViewContainerRef} from '@angular/core';
import {RootContainerService} from "../root-container.service";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  constructor(
    private container: ViewContainerRef,
    private rootContainerService: RootContainerService
  ) {
    this.rootContainerService.instance = this.container;
  }

  ngOnDestroy() {
    this.rootContainerService.instance = null;
  }
}
