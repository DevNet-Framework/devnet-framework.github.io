import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
  selector: 'security-antiforgery',
  templateUrl: './antiforgery.component.html',
  styleUrls: ['./antiforgery.component.css']
})
export class AntiforgeryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    hljs.highlightAll();
  }

}
