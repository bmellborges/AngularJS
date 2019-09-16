// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverAPI:"http://localhost:3000/",
  firebaseConfig: {
    apiKey: "AIzaSyC6oVSSLgoZZgktrCPjrQKOGVYxPK98oF0",
  authDomain: "applojabruno.firebaseapp.com",
  databaseURL: "https://applojabruno.firebaseio.com",
  projectId: "applojabruno",
  storageBucket: "",
  messagingSenderId: "547917480656",
  appId: "1:547917480656:web:3e8423bea7eb809a7f14d5"
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
