import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',   //will be the directive used in html when refering to this component
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
        </ul>
    </nav>
    <div class = 'container'>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
