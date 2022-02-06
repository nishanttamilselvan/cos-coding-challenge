import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { menuController } from "@ionic/core";



@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  auctionData = [];

  constructor(private authService: AuthenticationService, private router: Router, private apiService: ApiService) {
    if(this.apiService.timer == null){
      this.apiService.loadData();
      this.apiService.startServerSync();
    }
  }

  ngOnInit() {
     // Listen to auction data changes
     this.apiService.auctionData.subscribe(value => {
       this.auctionData = value;
       console.log(this.auctionData);
     });  
   }

   toggleMenu(){
    menuController.toggle();
  }

  

  

}
