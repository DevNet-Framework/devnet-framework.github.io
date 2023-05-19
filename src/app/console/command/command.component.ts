import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';

@Component({
   selector: 'console-command',
   templateUrl: './command.component.html',
   styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

   constructor() { }

   ngOnInit(): void {
      hljs.highlightAll();
   }

}
