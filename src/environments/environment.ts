// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverAPI:"http://localhost:3000/",
  firebaseConfig: {
    apiKey: "AIzaSyAK9YQGtF8TOmJvyOuJJEOtTfSCknmNcDg",
    authDomain: "loja-angularbs.firebaseapp.com",
    databaseURL: "https://loja-angularbs.firebaseio.com",
    projectId: "loja-angularbs",
    storageBucket: "",
    messagingSenderId: "960253392202",
    appId: "1:960253392202:web:b604e60c9e0a9b04ed7db3"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
