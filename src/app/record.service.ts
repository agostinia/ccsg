import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Record } from './Model/record';
//import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private recordsUrl = 'api/records';  

  constructor(
    private http: HttpClient,
    /* private messageService: MessageService*/) { }

    getRecords (): Observable<Record[]> {
      return this.http.get<Record[]>(this.recordsUrl)
        .pipe(
          tap(heroes => this.log('fetched records')),
          catchError(this.handleError('getRecords', []))
        );
    }
    /** POST: add a new record to the server */
    addRecord (record: Record): Observable<Record> {
      return this.http.post<Record>(this.recordsUrl, record, httpOptions).pipe(
        tap((record: Record) => this.log(`added hero w/ id=${record.id}`)),
        catchError(this.handleError<Record>('addRecord'))
      );
    }

    /** GET hero by id. Return `undefined` when id not found */
    getRecordNo404<Data>(id: number): Observable<Record> {
      const url = `${this.recordsUrl}/?id=${id}`;
      return this.http.get<Record[]>(url)
        .pipe(
          map(records => records[0]), // returns a {0|1} element array
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} record id=${id}`);
          }),
          catchError(this.handleError<Record>(`getRecord id=${id}`))
        );
    }

    /** GET hero by id. Will 404 if id not found */
    getRecord(id: number): Observable<Record> {
      const url = `${this.recordsUrl}/${id}`;
      return this.http.get<Record>(url).pipe(
        tap(_ => this.log(`fetched record id=${id}`)),
        catchError(this.handleError<Record>(`getRecord id=${id}`))
      );
    }


    /** DELETE: delete the record from the server */
    deleteRecord (record: Record | number): Observable<Record> {
      const id = typeof record === 'number' ? record : record.id;
      const url = `${this.recordsUrl}/${id}`;

      return this.http.delete<Record>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted record id=${id}`)),
        catchError(this.handleError<Record>('deleteHero'))
      );
    }

    /** PUT: update the record on the server */
    updateHero (record: Record): Observable<any> {
      return this.http.put(this.recordsUrl, record, httpOptions).pipe(
        tap(_ => this.log(`updated record id=${record.id}`)),
        catchError(this.handleError<any>('updateRecord'))
      );
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

    private log(message: string) {
      //this.messageService.add(`HeroService: ${message}`);
    }


}
