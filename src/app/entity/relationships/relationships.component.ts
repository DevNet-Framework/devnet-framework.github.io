import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
  selector: 'entity-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.css']
})
export class RelationshipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    hljs.highlightAll();
  }

}
