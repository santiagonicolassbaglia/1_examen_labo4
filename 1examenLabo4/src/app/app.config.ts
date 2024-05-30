import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { environment } from '../assets/environments/environment.prod';
import { AngularFireModule } from '@angular/fire/compat';
import { routes } from './app.routes';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
 



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),  
    provideZoneChangeDetection({ eventCoalescing: true }), 
    
    provideHttpClient(),
    importProvidersFrom(
      AngularFireModule.initializeApp(environment.firebaseConfig)), 
       AngularFirestoreModule, 
      
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"examen1lab4","appId":"1:861722443016:web:8feda006e21feeb5e640bd","storageBucket":"examen1lab4.appspot.com","apiKey":"AIzaSyDkT3BJR7ni5HRqd0zWS7dgTcQHPPtfNM0","authDomain":"examen1lab4.firebaseapp.com","messagingSenderId":"861722443016"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"examen1lab4","appId":"1:861722443016:web:8feda006e21feeb5e640bd","storageBucket":"examen1lab4.appspot.com","apiKey":"AIzaSyDkT3BJR7ni5HRqd0zWS7dgTcQHPPtfNM0","authDomain":"examen1lab4.firebaseapp.com","messagingSenderId":"861722443016"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"examen1lab4","appId":"1:861722443016:web:8feda006e21feeb5e640bd","storageBucket":"examen1lab4.appspot.com","apiKey":"AIzaSyDkT3BJR7ni5HRqd0zWS7dgTcQHPPtfNM0","authDomain":"examen1lab4.firebaseapp.com","messagingSenderId":"861722443016"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"examen1lab4","appId":"1:861722443016:web:e03b2479971a7b4ee640bd","storageBucket":"examen1lab4.appspot.com","apiKey":"AIzaSyDkT3BJR7ni5HRqd0zWS7dgTcQHPPtfNM0","authDomain":"examen1lab4.firebaseapp.com","messagingSenderId":"861722443016"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"examen1lab4","appId":"1:861722443016:web:8feda006e21feeb5e640bd","storageBucket":"examen1lab4.appspot.com","apiKey":"AIzaSyDkT3BJR7ni5HRqd0zWS7dgTcQHPPtfNM0","authDomain":"examen1lab4.firebaseapp.com","messagingSenderId":"861722443016"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"examen1lab4","appId":"1:861722443016:web:8feda006e21feeb5e640bd","storageBucket":"examen1lab4.appspot.com","apiKey":"AIzaSyDkT3BJR7ni5HRqd0zWS7dgTcQHPPtfNM0","authDomain":"examen1lab4.firebaseapp.com","messagingSenderId":"861722443016"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"examen1lab4","appId":"1:861722443016:web:8feda006e21feeb5e640bd","storageBucket":"examen1lab4.appspot.com","apiKey":"AIzaSyDkT3BJR7ni5HRqd0zWS7dgTcQHPPtfNM0","authDomain":"examen1lab4.firebaseapp.com","messagingSenderId":"861722443016"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore())
  ]
};
