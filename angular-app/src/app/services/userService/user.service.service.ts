import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAppState } from 'src/app/store/appUser.selector';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  public appUser$ = this.store.select(selectAppState);

  constructor(private store: Store, private http: HttpClient) {}

  getListings() {
    return this.http.get<any>('http://localhost:3000/home', {
      withCredentials: true,
    });
  }

  getListingWithId(id: string) {
    return this.http.post<any>(
      'http://localhost:3000/getListingWithId',
      { data: id },
      {
        withCredentials: true,
      }
    );
  }
}
