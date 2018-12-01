import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SearchQuery, Tweet } from './models';
import { TWEETS } from './mock-tweets';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Service {
  private apiUrl = 'https://jm6mw143e5.execute-api.ap-northeast-2.amazonaws.com/default/twitterApiFunction';
  constructor(private httpClient: HttpClient) {}

  getTweets(keyword:string): Observable<Tweet[]> {
    const url = '${this.apiUrl}/${keyword}';
    return this.httpClient.get<Tweet[]>(url);
  }
  handleError(error:any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
