import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/common';
import apache from 'highlight.js/lib/languages/apache';
import nginx from 'highlight.js/lib/languages/nginx';

@Component({
   selector: 'setup-deployment',
   templateUrl: './deployment.component.html',
   styleUrls: ['./deployment.component.css']
})
export class DeploymentComponent implements OnInit {

   constructor() { }

   ngOnInit(): void {
      hljs.registerLanguage('apache', apache);
      hljs.registerLanguage('nginx', nginx);
      hljs.highlightAll();
   }

}
