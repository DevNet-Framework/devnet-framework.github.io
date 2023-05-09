import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
   selector: 'web-view',
   templateUrl: './view.component.html',
   styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

   constructor() { }

   ngOnInit(): void {
      hljs.highlightAll();
   }

}
