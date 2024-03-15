import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
  selector: 'orm-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    hljs.highlightAll();
  }

}
