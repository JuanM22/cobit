import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObjectiveServicesService {

  private url: string = '';
  private host: string = 'localhost:';
  private port: string = '8090';

  constructor(private http: HttpClient) {
  }

  public save(objective: any): Observable<string[]> {
    this.url = 'http://' + this.host + this.port + '/objective/update';
    return this.http.post<string[]>(this.url, objective).pipe(timeout(10000), catchError(err => {
      return of(err);
    }));;;
  }

  public list(): Observable<any[]> {
    this.url = 'http://' + this.host + this.port + '/administrator/list';
    return this.http.get<any[]>(this.url).pipe(timeout(10000), catchError(err => {
      return of(err);
    }));;;
  }
}
