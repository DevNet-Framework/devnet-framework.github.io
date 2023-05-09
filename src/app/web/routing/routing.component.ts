import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
   selector: 'web-routing',
   templateUrl: './routing.component.html',
   styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

   constructor() { }

   ngOnInit(): void {
      hljs.highlightAll();
   }

}
