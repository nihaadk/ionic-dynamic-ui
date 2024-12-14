import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #httpClient = inject(HttpClient);

  private url: string = `${environment.server}/auth-service/authenticate/jsonflow`;
  private authBody = {
    username: environment.username,
    password: environment.password,
  };

  login(): void {
    this.#httpClient
      .post(this.url, this.authBody, { responseType: 'text' })
      .subscribe((res) => this.setToken(res));
  }

  setToken(token: string): void {
    localStorage.setItem('bearerToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('bearerToken');
  }
}
