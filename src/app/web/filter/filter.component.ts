import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
   selector: 'web-filter',
   templateUrl: './filter.component.html',
   styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

   constructor() { }

   ngOnInit(): void {
      hljs.highlightAll();
   }

}
