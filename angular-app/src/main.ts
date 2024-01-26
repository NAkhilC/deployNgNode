import { Routes, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./app/home/home.component').then((mod) => mod.HomeComponent),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./app/login/login.component').then(
            (mod) => mod.LoginComponent
          ),
      },
    ],
  },
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
