import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router, private apiService: ApiService) { }
  ngOnInit(): void {
    console.log("inside logout")
    this.authService.logout();
    this.apiService.stopServerSync();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }


}
