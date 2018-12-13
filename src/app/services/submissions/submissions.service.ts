import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        accept: 'application/json',
        Token: 'ya29.GlxxBnG2Whnay1LCc66gnNxp4IS7HovlbDQAvfBERIHxua3BHOrPqXsCE9cZm0ii2utae8JdxywmNrz1VqytXfO_v8PtsEnbdWa7e73lHVMqTgfGPC4B1XdogvmAhg',
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class SubmissionsService {
    submissionsURL = 'http://aswlab.herokuapp.com/submissions';

    // ask http://aswlab.herokuapp.com/submissions?type=ask&sort_by=points
    // newst http://aswlab.herokuapp.com/submissions?sort_by=created_at

    constructor(private http: HttpClient) {}

    getAllSubmissions(): Observable<any> {
        return this.http.get<any>(`${this.submissionsURL}`, httpOptions).pipe(
            catchError(this.handleError<any>('getAllSubmissions')),
            tap(resp => console.log('getAllSubmissions', resp))
        );
    }

    getNewestSubmissions(): Observable<any> {
        return this.http.get<any>(`${this.submissionsURL}?sort_by=created_at`, httpOptions).pipe(
            catchError(this.handleError<any>('getNewestSubmissions')),
            tap(resp => console.log('getNewestSubmissions', resp))
        );
    }

    getAskSubmissions(): Observable<any> {
        return this.http.get<any>(`${this.submissionsURL}?type=ask&sort_by=points`, httpOptions).pipe(
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

    upVote(id) {

    }

    downVote(id) {

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
