import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAppState } from 'src/app/store/appUser.selector';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  public appUser$ = this.store.select(selectAppState);

  constructor(private store: Store) {}
}
