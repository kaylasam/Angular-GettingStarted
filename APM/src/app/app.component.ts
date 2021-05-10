import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',   //will be the directive used in html when refering to this component
  template: `
  <div><h1>{{pageTitle}}</h1>
      <div>My First Component</div>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
