import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
  selector: 'core-generics',
  templateUrl: './generics.component.html',
  styleUrls: ['./generics.component.css']
})
export class GenericsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    hljs.highlightAll();
  }

}
