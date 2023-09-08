import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
  selector: 'core-linq',
  templateUrl: './linq.component.html',
  styleUrls: ['./linq.component.css']
})
export class LinqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    hljs.highlightAll();
  }

}
