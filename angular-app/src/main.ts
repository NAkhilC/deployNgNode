import { Routes, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore, provideState, StoreModule } from '@ngrx/store';
import { appuserReducer } from './app/store/appUser.reducer';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggedInGuard } from './app/services/authGuard';
export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./app/login/login.component').then(
            (mod) => mod.LoginComponent
          ),
      },
      {
        path: 'home',
        canActivate: [LoggedInGuard],
        loadComponent: () =>
          import('./app/home/home.component').then((mod) => mod.HomeComponent),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ],
  },
];
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter(routes),
    provideStore({ userState: appuserReducer }),
  ],
});
