import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
   selector: 'web-controller',
   templateUrl: './controller.component.html',
   styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

   constructor() { }

   ngOnInit(): void {
      hljs.highlightAll();
   }

}
