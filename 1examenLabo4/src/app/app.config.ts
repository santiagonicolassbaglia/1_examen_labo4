import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"examen1lab4","appId":"1:861722443016:web:8feda006e21feeb5e640bd","storageBucket":"examen1lab4.appspot.com","apiKey":"AIzaSyDkT3BJR7ni5HRqd0zWS7dgTcQHPPtfNM0","authDomain":"examen1lab4.firebaseapp.com","messagingSenderId":"861722443016"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
