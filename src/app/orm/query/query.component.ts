import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
  selector: 'orm-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    hljs.highlightAll();
  }

}
