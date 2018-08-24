// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB7LWFAASr6fp33qw5kB9PuJeeclgcUkLA',
    authDomain: 'fitnessapp-b2350.firebaseapp.com',
    databaseURL: 'https://fitnessapp-b2350.firebaseio.com',
    projectId: 'fitnessapp-b2350',
    storageBucket: 'fitnessapp-b2350.appspot.com',
    messagingSenderId: '787879398959'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
