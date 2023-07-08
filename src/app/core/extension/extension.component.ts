import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
  selector: 'core-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})
export class ExtensionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    hljs.highlightAll();
  }

}
