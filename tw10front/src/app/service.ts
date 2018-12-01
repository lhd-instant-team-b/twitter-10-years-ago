import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchQuery, Tweet } from './models';
import { TWEETS } from './mock-tweets';

@Injectable()
export class Service {
  private url = '/request/';
  getTweets(): Promise<Tweet[]> {
    return Promise.resolve(TWEETS);
  }
}
