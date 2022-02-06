import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, filter, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { AuthenticationService } from '../services/authentication.service';


const TOKEN_KEY = 'my-token';
const USER_DATA = 'user-data';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    token;
    userid;


    constructor(private authService: AuthenticationService) {
        this.authService.isAuthenticated.subscribe(value => {
            if (value) {
                this.loadToken();
            }
        });
    }

    async loadToken() {
        const token = await Storage.get({ key: TOKEN_KEY });
        const userData = await Storage.get({ key: USER_DATA });
        if (token && token.value) {
            let userid = JSON.parse(userData.value);
            this.userid = userid.email;
            this.token = token.value;
        }
    }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //Authentication by setting header with token value
        if (this.token) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    'authtoken': this.token,
                    'userid': this.userid
                }
            });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }

        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    //   console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                // console.error(error);
                return throwError(error);
            }));
    }


}