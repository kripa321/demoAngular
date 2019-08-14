import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {of as observableOf} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';
import {AppSettings} from '../shared/app-settings';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public http: HttpClient, public appSettings: AppSettings) {
  }

  login(data): Observable<any> {
    return this.http.post(this.appSettings.API_ENDPOINT + 'login', data)
      .pipe(
        map(response => {
          return response;
        }),
        catchError((err) => {
          return observableOf(err);
        })
      );
  }

  register(data): Observable<any> {
    return this.http.post(this.appSettings.API_ENDPOINT + 'register', data)
      .pipe(
        map(response => {
          return response;
        }),
        catchError((err) => {
          return observableOf(err);
        })
      );
  }

  users( ): Observable<any> {
    return this.http.get(this.appSettings.API_ENDPOINT + 'users')
      .pipe(
        map(response => {
          return response;
        }),
        catchError((err) => {
          return observableOf(err);
        })
      );
  }

  userDelete( id): Observable<any> {
    return this.http.delete(this.appSettings.API_ENDPOINT + 'user/' + id)
      .pipe(
        map(response => {
          return response;
        }),
        catchError((err) => {
          return observableOf(err);
        })
      );
  }

  editUser(data, id): Observable<any> {
    return this.http.post(this.appSettings.API_ENDPOINT + 'user/' + id, data)
      .pipe(
        map(response => {
          return response;
        }),
        catchError((err) => {
          return observableOf(err);
        })
      );
  }
}
