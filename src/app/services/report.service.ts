import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { Report } from '../model/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private url: string = '';
  private host: string = 'localhost:';
  private port: string = '8090';

  constructor(private http: HttpClient) { }

  updateReport(report: Report): Observable<any> {
    this.url = 'http://' + this.host + this.port + '/report/save';
    return this.http.post<any>(this.url, report).pipe(timeout(10000), catchError(err => {
      return of(err);
    }));;;
  }

  getReport(id: number): Observable<Report> {
    return this.http.get<Report>('http://' + this.host + this.port + '/report/view/' + id);
  }
}
