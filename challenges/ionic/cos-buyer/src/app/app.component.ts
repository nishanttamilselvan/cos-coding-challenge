import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Overview', url: '/overview', icon: 'home' },
    { title: 'Logout', url: '/logout', icon: 'log-out' },
  ];
  constructor() {}
}
