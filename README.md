 
# AfNotification

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
 
# glaubfirebase
for glaubhanta site and storeown notification , to onboard with gst , pan and registration
 


http://localhost:9005/?state=858496091&code=4/0AeaYSHDKIQYWLGg3Mv0q4bStQg15V9vu84oXpebxg94Du5VA1nFicCcU_GOvHg6H_AJJtQ&scope=email%20https://www.googleapis.com/auth/userinfo.email%20openid%20https://www.googleapis.com/auth/cloudplatformprojects.readonly%20https://www.googleapis.com/auth/firebase%20https://www.googleapis.com/auth/cloud-platform&authuser=1&prompt=consent


https://stackoverflow.com/questions/70052479/firebase-storage-an-unknown-error-occurred-please-check-the-error-payload-for

 git remote set-url origin https://github.com/Fairvinay/glaubfirebase.git

firebase login

firebase init

firebase init hosting   -- worked after 2 tries 

firebase deploy


firebase emulators:start


http://127.0.0.1:9099/

http://127.0.0.1:9099/emulator/openapi.json


//http://127.0.0.1:9000/?ns=store-notify-default-rtdb.asia-southeast1.firebasedatabase.app.json   not work 

https://console.firebase.google.com/u/0/project/store-notify/database/store-notify-default-rtdb/data/

http://127.0.0.1:4000/database/store-notify-default-rtdb/data/


----- the normal Firebase notification Angular project --- to send notifications using 
/*
curl -X POST \
  https://fcm.googleapis.com/fcm/send \
  -H 'Authorization: key=SERVER-KEY' \
  -H 'Content-Type: application/json' \
  -d '{ 
 "notification": {
  "title": "First Notification", 
  "body": "Hello from Jishnu!!"
 },
 "to" : "GENERATED-TOKEN"
}'


*/

set  NODE_OPTIONS=--openssl-legacy-provider

// 
