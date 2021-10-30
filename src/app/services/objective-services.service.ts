import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, timeout } from 'rxjs/operators';
import { Objective } from '../model/objective';

@Injectable({
  providedIn: 'root'
})
export class ObjectiveServicesService {

  private url: string = '';
  private host: string = '192.168.0.19:';
  private port: string = '8090';

  constructor(private http: HttpClient) {
  }

  public save(objective: any): Observable<any> {
    this.url = 'http://' + this.host + this.port + '/objective/update';
    return this.http.post<any>(this.url, objective).pipe(timeout(10000), catchError(err => {
      return of(err);
    }));;;
  }

  public list(domain: Number): Observable<Objective[]> {
    this.url = 'http://' + this.host + this.port + '/objective/list/'+ domain;
    return this.http.get<Objective[]>(this.url).pipe(timeout(10000), catchError(err => {
      return of(err);
    }));;;
  }
}
