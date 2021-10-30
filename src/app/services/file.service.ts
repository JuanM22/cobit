import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private url: string = '';
  private host: string = '192.168.0.19:';
  private port: string = '8090';

  constructor(private http: HttpClient) { }

  updateFile(data: JSON): Observable<any> {
    this.url = 'http://' + this.host + this.port + '/file/update';
    return this.http.post<any>(this.url, data).pipe(timeout(10000), catchError(err => {
      return of(err);
    }));;;
  }

  getJSON(): Observable<any> {
    return this.http.get('http://' + this.host + this.port + '/file/report');
  }
}
