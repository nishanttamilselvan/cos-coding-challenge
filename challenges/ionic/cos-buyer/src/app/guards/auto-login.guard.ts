import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take, map } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanLoad {
  constructor(private authService: AuthenticationService, private router: Router) { }
 
  canLoad(): Observable<boolean> {    
    return this.authService.isAuthenticated.pipe(
      filter(val => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map(isAuthenticated => {
        if (isAuthenticated) {
          console.log('Found previous stored token, automatic login initiated');
          // Directly open inside area       
          this.router.navigateByUrl('/overview', { replaceUrl: true });
        } else {          
          // Simply allow access to the login
          return true;
        }
      })
    );
  }
}
