import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SearchQuery, Tweet } from './models';
import { TWEETS } from './mock-tweets';

@Injectable()
export class Service {
  private apiUrl = 'https://jm6mw143e5.execute-api.ap-northeast-2.amazonaws.com/default/twitterApiFunction';
  constructor(private httpClient: HttpClient) {}

  getTweets(keyword:string): Promise<Tweet[]> {
    const url = '${this.apiUrl}/${keyword}';
    return this.httpClient.get(url)
                .toPromise()
                .then(response => response.json() as Tweet[])
                .catch(this.handleError);
  }
  handleError(error:any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
