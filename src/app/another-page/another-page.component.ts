import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-another-page',
  templateUrl: './another-page.component.html',
  styleUrls: ['./another-page.component.css']
})
export class AnotherPageComponent implements OnInit {
  content: string;
  constructor() {
  }

  check() {
    this.content = '';
    const el = window.document.querySelector('.cdk-overlay-container') as HTMLElement | null;
    if (el) {
      this.content = el.innerHTML;
    }
  }
  ngOnInit() {
    setTimeout(() => this.check(), 500);
  }

}
