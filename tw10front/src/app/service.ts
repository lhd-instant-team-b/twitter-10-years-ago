import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { SearchQuery, Tweet } from './models';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ExampleInterceptor implements HttpInterceptor {
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      req = req.clone({
      url: req.url
      });
      return next.handle(req);
      }
      }

@Injectable()
export class Service {
  private apiUrl = 'https://jm6mw143e5.execute-api.ap-northeast-2.amazonaws.com/default/twitterApiFunction';
  constructor(private httpClient: HttpClient) {}

  getTweets(keyword:string): Observable<any> {
    const url = this.apiUrl + '?keyword=' + keyword;
    return this.httpClient.get<any>(url);
  }
  handleError(error:any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
