import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  user: any;
  username: string = '';

  constructor(private apiservis: ApiService) {}

  ngOnInit(): void {}

  getUserProfile(): void {
    if (this.username) {
      this.apiservis.getUser(this.username).subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {
          console.error('Error al obtener los datos de GitHub:', error);
          this.user = null;
        }
      );
    }
  }
}
