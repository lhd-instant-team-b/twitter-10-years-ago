import { Component, OnInit} from '@angular/core';
import { Tweet } from './models';
import { Service } from './service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'showTweets',
  templateUrl: './showTweets.component.html',
  styleUrls: ['./vendor/bootstrap/css/bootstrap.min.css', './style.css']
})

export class ShowTweetsComponent implements OnInit {
  constructor(
    private service:Service,
    private route:ActivatedRoute,
    private location: Location,
  ) {}
  tweets: Tweet[];

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['keyword'] !== undefined) {
        let id = params['keyword'];
        this.service.getTweets(id)
        .subscribe(tweets => this.tweets = tweets.body);
      } 
    });
  }

}
