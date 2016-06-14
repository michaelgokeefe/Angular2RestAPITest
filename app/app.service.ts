import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from './app.constants';

@Injectable()
export class AppService {

  private apiUrl: string;
  private headers: Headers;

  constructor(private http: Http) {
    this.apiUrl = 'http://jsonplaceholder.typicode.com';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json'); 
  }

 /* getPosts = (searchVal: string): Observable<Response> => {
    return this.http.get(this.apiUrl + searchVal).map(res => res.json());
  }*/

  getPosts(searchVal: string): Observable<Response> {
    // TODO: Try without catch
    return this.http.get(this.apiUrl + searchVal).map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    return JSON.stringify( res.json() );
    
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
