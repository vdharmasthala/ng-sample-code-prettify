import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
})
export class AComponent implements OnInit {
  codePreview: Map<string, string>;

  ngOnInit(): void {
    this.codePreview = new Map();
    this.codePreview.set(
      'class', require('!!raw-loader!../b/b.component.ts').default
    );
    this.codePreview.set(
      'template', require('!!raw-loader!../b/b.component.html').default
    );
  }
}
