import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {Hero} from '../../domain/hero';
import { HeroService } from '../../core/services/hero.service';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: HttpClient,
              private heroService: HeroService,
              private messageService: MessageService) { }

  loginHeroByName(name: string, password: string): Observable<Hero> {

    const url = `${this.heroService.getHeroesUrl()}/login`;
    const expiresAt = moment().add(3600, 'second');
    this.log(`fetching hero name=${name} from ${url}`);
    return this.http.post<Hero>(url, {
      Name: name,
      Password: password
    }).pipe(
      tap(_ => {
        localStorage.setItem('id_token', 'token');
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.toDate()) );

        this.log(`fetched hero name=${name}`);
      }),
      catchError(this.handleError<Hero>(`loginHeroByName failed for name=${name}`))
    );
  }

  public logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  public getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return expiresAt;
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AuthService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
