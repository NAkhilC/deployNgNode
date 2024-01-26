import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
})
export class HomeComponent {
  homes = [
    {
      imageUrl: '../../assets/home.jpg',
      title: 'Beautiful Home 1',
      description: 'A cozy home with a stunning view',
      price: 300000,
    },
    {
      imageUrl: '../../assets/home.jpg',
      title: 'Spacious Home 2',
      description: 'Large rooms with modern amenities',
      price: 400000,
    },
    {
      imageUrl: '../../assets/home.jpg',
      title: 'Beautiful Home 1',
      description: 'A cozy home with a stunning view',
      price: 300000,
    },
    {
      imageUrl: '../../assets/home.jpg',
      title: 'Spacious Home 2',
      description: 'Large rooms with modern amenities',
      price: 400000,
    },
    {
      imageUrl: '../../assets/home.jpg',
      title: 'Beautiful Home 1',
      description: 'A cozy home with a stunning view',
      price: 300000,
    },
    {
      imageUrl: '../../assets/home.jpg',
      title: 'Spacious Home 2',
      description: 'Large rooms with modern amenities',
      price: 400000,
    },
    {
      imageUrl: '../../assets/home.jpg',
      title: 'Beautiful Home 1',
      description: 'A cozy home with a stunning view',
      price: 300000,
    },
    {
      imageUrl: '../../assets/home.jpg',
      title: 'Spacious Home 2',
      description: 'Large rooms with modern amenities',
      price: 400000,
    },
    {
      imageUrl: '../../assets/home.jpg',
      title: 'Beautiful Home 1',
      description: 'A cozy home with a stunning view',
      price: 300000,
    },
    {
      imageUrl: '../../assets/home.jpg',
      title: 'Spacious Home 2',
      description: 'Large rooms with modern amenities',
      price: 400000,
    },
    {
      imageUrl: '../../assets/home.jpg',
      title: 'Beautiful Home 1',
      description: 'A cozy home with a stunning view',
      price: 300000,
    },
    {
      imageUrl: '../../assets/home.jpg',
      title: 'Spacious Home 2',
      description: 'Large rooms with modern amenities',
      price: 400000,
    },
    // Add more homes as needed
  ];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('http://localhost:3000/status', {
        withCredentials: true,
      })
      .subscribe();
  }
}
