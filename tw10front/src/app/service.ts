import { Injectable } from '@angular/core';
import { SearchQuery, Tweet } from './models';
import { TWEETS } from './mock-tweets';

@Injectable()
export class Service {
  getTweets(): Promise<Tweet[]> {
    return Promise.resolve(TWEETS);
  }
}
