import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
  selector: 'web-middleware',
  templateUrl: './middleware.component.html',
  styleUrls: ['./middleware.component.css']
})
export class MiddlewareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    hljs.highlightAll();
  }

}
