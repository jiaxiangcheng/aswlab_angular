import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class SubmissionsService {
  submissionsURL = 'http://aswlab.herokuapp.com/submissions';

  constructor(private http: HttpClient) {}

  getAllSubmissions(): Observable<any> {
    return this.http.get<any>(`${this.submissionsURL}`, httpOptions).pipe(
      catchError(this.handleError<any>('getAllSubmissions')),
      tap(resp => console.log('getAllSubmissions', resp))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status !== 200) {
        // TODO: send the error to remote logging infrastructure
        // console.error(error);
        // TODO: better job of transforming error for user consumption
        // console.log(`${operation} failed: ${error.message}`);
        // Catch the status code and do some actions if it is a particular situation
      }
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
