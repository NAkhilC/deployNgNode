import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { selectAppState } from '../store/appUser.selector';
import { UpdateAppUser } from '../store/appUser.actions';
import { UserServiceService } from '../services/userService/user.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    StoreModule,
  ],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
    private http: HttpClient,
    private userService: UserServiceService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.userService.appUser$.subscribe((val) => {
      if (val) {
        this.router.navigate(['home']);
      }
    });
  }

  onSubmit() {
    // Add your login logic here
    console.log('Login Form Submitted:', this.loginForm.value);

    this.http
      .post<any>(
        'http://localhost:3000/login',
        { data: this.loginForm.value },
        {
          withCredentials: true,
        }
      )
      .subscribe((val) => {
        this.store.dispatch(
          UpdateAppUser({
            appUser: { userName: val.name, status: val.name ? true : false },
          })
        );
        this.router.navigate(['home']);
      });
  }
}
