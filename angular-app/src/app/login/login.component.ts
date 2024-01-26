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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
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
        console.log(val);
        this.router.navigate(['home']);
      });
  }
}
