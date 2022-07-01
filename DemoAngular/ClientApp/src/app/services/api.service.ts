import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers = new HttpHeaders();
  return!: string;

  baseUrl: string;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl + "api/";
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/');
  }

  get_current_user() {
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.baseUrl + 'Auth/get-user-by-login', { headers: this.headers });
  }

  login(data: any) {
    return this.http.post(this.baseUrl + 'Auth/login', data);
  }
}
