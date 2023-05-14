import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
   selector: 'console-input',
   templateUrl: './input.component.html',
   styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

   constructor() { }

   ngOnInit(): void {
      hljs.highlightAll();
   }

}
