import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(form: { name: string, email: string, password: string, recaptcha: string }) {
    return this.http.post(`${environment.api_url}/user/register/`, form);
  }

  login(form: { email: string, password: string }) {
    return this.http.post(`${environment.base_url}/api/token/`, form);
  }

  renewAccessToken() {
    const refresh = localStorage.getItem('refresh')
    console.log(refresh);

    return this.http.post(`${environment.base_url}/api/token/refresh/`, { refresh: refresh }).pipe(
      tap((next: any) => {
        if (next.access) {
          localStorage.setItem('access', next.access)
        }
      })
    )
  }

}