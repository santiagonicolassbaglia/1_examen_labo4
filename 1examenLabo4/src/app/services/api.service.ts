import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService  {

  private baseUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${username}`);
  }

  getFixedUser(): Observable<any> {
    const fixedUsername = 'santiagonicolassbaglia';
    return this.http.get(`${this.baseUrl}/${fixedUsername}`);
  }
}

