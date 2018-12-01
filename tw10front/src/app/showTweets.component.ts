import { Component, OnInit} from '@angular/core';
import { Tweet } from './models';
import { Service } from './service';

@Component({
  selector: 'showTweets',
  templateUrl: './showTweets.component.html',
  styleUrls: ['./vendor/bootstrap/css/bootstrap.min.css', './style.css']
})

export class ShowTweetsComponent implements OnInit {
  constructor(private service:Service) {}
  tweets: Tweet[];

  ngOnInit(): void {
    this.getTweets();
  }

  getTweets(): void {
    this.service.getTweets().then(tweets => this.tweets = tweets);
  }
}
