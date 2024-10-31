import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"recetario-fda97","appId":"1:674284180019:web:d1dc68cb61bc879b808946","storageBucket":"recetario-fda97.appspot.com","apiKey":"AIzaSyAB21C_rA7ntbgLsB_VGJQqhxdc5kHmjd4","authDomain":"recetario-fda97.firebaseapp.com","messagingSenderId":"674284180019","measurementId":"G-0RJ0RVGX1N"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
