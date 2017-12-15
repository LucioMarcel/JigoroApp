import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/Operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Atleta } from '../model/atleta';
import { tap } from 'rxjs/operators/tap';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AtletasService {

  private atletasUrl: string = 'api/atletas';

  constructor(
    private http: HttpClient
  ) { }

  private log(message: string) {
    console.log('HeroService: ' + message);
  }

  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getAtletas(): Observable<Atleta[]> {
    return this.http.get<Atleta[]>(this.atletasUrl)
      .pipe(
      tap<Atleta[]>(atletas => this.log('fetched atletas')),
      catchError(this.handleError('getAtletas', []))
      )
  }

  getAtleta(id: string): Observable<Atleta> {
    const url = `${this.atletasUrl}/${id}`;
    return this.http.get<Atleta>(url).pipe(
      tap(atleta => this.log(`fetched atleta id=${id}`)),
      catchError(this.handleError<Atleta>(`atleta id=${id}`))
    )
  }

  addAtleta(atleta: Atleta): Observable<Atleta> {
    return this.http.post<Atleta>(this.atletasUrl, atleta).pipe(
      tap(atleta => this.log(`added atleta w/ id = ${atleta.id}`)),
      catchError(this.handleError<Atleta>("addAtleta"))
    )
  }

  deleleAtleta(atleta: Atleta | number): Observable<Atleta> {
    const id: number = typeof atleta === 'number' ? atleta : atleta.id;
    const url = `${this.atletasUrl}/${id}`;
    return this.http.delete<Atleta>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted atleta id=${id}`)),
      catchError(this.handleError<Atleta>('deleteHero'))
    )
  }

  updateAtleta(atleta: Atleta): Observable<any> {
    return (this.http.put(this.atletasUrl, atleta, httpOptions)).pipe(
      tap(_ => this.log(`update alteta id= ${atleta.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }

  pesquisarAtleta(termo: string): Observable<Atleta[]> {
    if (!termo.trim) {
      return of([]);
    }
    return this.http.get<Atleta[]>(`api/atletas/?nome=${termo}`).pipe(
      tap(_ => this.log(`localizado atletas com o termo: ${termo}`)),
      catchError(this.handleError<Atleta[]>('pesquisarAtleta'))
    )
  }
}