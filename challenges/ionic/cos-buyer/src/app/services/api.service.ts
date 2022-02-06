import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Observable, from, BehaviorSubject, async } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';


const API_URL = "https://api-core-dev.caronsale.de/api/v2/";
const AUCTION_DATA = 'auction-data';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  auctionData = new BehaviorSubject([]);;
  timer: any = null;


  constructor(private http: HttpClient) {
    // this.loadData();
    // this.startServerSync();
  }


  async loadData() {
    const auctionData = await Storage.get({ key: AUCTION_DATA });
    if (auctionData && auctionData.value) {
      let data = JSON.parse(auctionData.value);
      this.auctionData.next(data || []);
    } else {
      this.loadAuctions();
    }
  }


  async loadAuctions() {
    this.http.get(API_URL + 'auction/buyer/').subscribe(async (res: any) => {
      await Storage.set({ key: AUCTION_DATA, value: JSON.stringify(res.items) });
      this.auctionData.next(res.items || []);
    });

  }

  startServerSync() {
    console.log("inside sync");
    if (this.timer == null) {
      this.timer = setInterval(() => {
        this.loadAuctions();
      }, 20000);
    }
  }

  stopServerSync() {
    console.log("inside stop sync");
    clearInterval(this.timer);
    this.timer = null;
  }

}


