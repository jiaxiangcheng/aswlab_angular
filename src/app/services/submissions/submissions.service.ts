import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        accept: 'application/json',
        Token: localStorage.getItem('token'),
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class SubmissionsService {
    submissionsURL = 'http://aswlab.herokuapp.com/submissions';
    newestURL = 'http://aswlab.herokuapp.com/newest';
    askURL = 'http://aswlab.herokuapp.com/ask';

    constructor(private http: HttpClient) {}

    getAllSubmissions(): Observable<any> {
        return this.http.get<any>(`${this.submissionsURL}`, httpOptions).pipe(
            catchError(this.handleError<any>('getAllSubmissions')),
            tap(resp => console.log('getAllSubmissions', resp))
        );
    }

    getNewestSubmissions(): Observable<any> {
        return this.http.get<any>(`${this.newestURL}`, httpOptions).pipe(
            catchError(this.handleError<any>('getNewestSubmissions')),
            tap(resp => console.log('getNewestSubmissions', resp))
        );
    }

    getAskSubmissions(): Observable<any> {
        return this.http.get<any>(`${this.askURL}`, httpOptions).pipe(
            catchError(this.handleError<any>('getAskSubmissions')),
            tap(resp => console.log('getAskSubmissions', resp))
        );
    }

    addSubmission(submission): Observable<any> {
        return this.http
            .post<any>(`${this.submissionsURL}`, submission, httpOptions)
            .pipe(
                catchError(this.handleError<any>('addSubmission')),
                tap(resp => console.log('addSubmission', resp))
            );
    }

    getSubmissionById(id): Observable<any> {
        return this.http
            .get<any>(`${this.submissionsURL}/${id}`, httpOptions)
            .pipe(
                catchError(this.handleError<any>('getSubmissionById')),
                tap(resp => console.log('getSubmissionById', resp))
            );
    }

    getSubmissionCommentsById(id): Observable<any> {
        return this.http
            .get<any>(`${this.submissionsURL}/${id}/comments`, httpOptions)
            .pipe(
                catchError(this.handleError<any>('getSubmissionCommentsById')),
                tap(resp => console.log('getSubmissionCommentsById', resp))
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
