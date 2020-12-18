import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class CommonService {
  private cardUrl = environment.base_url;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
   
    
  getCards(paraName, val){
    let queryString = (paraName === undefined ? this.cardUrl : this.cardUrl + "&" + paraName + '=' + val);
    let getStoredUrl = window.localStorage.getItem('stringUrl');

    if(getStoredUrl !== null && paraName !== undefined){
      let str = getStoredUrl.includes(paraName);      
      queryString = (str === true ? this.cardUrl + "&" + paraName + '=' + val : getStoredUrl + "&" + paraName + '=' + val)
      window.localStorage.setItem('stringUrl', queryString);
    }else{
      window.localStorage.setItem('stringUrl', queryString);
    }    

    return this.http.get(queryString).pipe(
      tap(_ => this.log('fetched launch programe')),
      catchError(this.handleError<any>('updateSpaceX'))
    )
  }
    
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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CommonService: ${message}`);
  }

}
