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
    provideStorage(() => getStorage())
  ]
};
