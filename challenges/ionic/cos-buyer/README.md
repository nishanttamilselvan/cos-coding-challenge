# COS - Ionic Challenge
## About this ionic demo
This repo is the code of an Ionic 6 App developed with respect to the CarOnSale Ionic Coding Challenge requirements. 

Find more Info on latest Ionic Documentation in https://ionicframework.com/docs


## Install this Ionic 6 App
```
npm install
```
### Browse Ionic 6 - COS Buyer App
```
ionic serve
```
# Inside App
## Manage the authentication state (and API calls)
    ionic g service services/authentication

## Additional Pages
    ionic g page pages/login
    ionic g page pages/logout
    ionic g page pages/overview

## Secure inside area
    ionic g guard guards/auth --implements CanLoad

## Automatically log in users
    ionic g guard guards/autoLogin --implements CanLoad

## Install Capacitor Storage for v3
    npm install @capacitor/storage

## Manage the Core API calls
    ionic g service services/api
    ionic g service services/authentication

## Angular Pipes for Additional data-logic
    ionic g pipe pipes/timer
    ionic g pipe pipes/fuel-type 
    ionic g pipe pipes/transmission

## Http Interceptor
Created to Intercept all the Http call and add header attributes for Authorization post login.





