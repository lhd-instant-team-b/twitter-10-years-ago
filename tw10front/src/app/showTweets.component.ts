import { Component, OnInit} from '@angular/core';
import { Tweet } from './models';
import { Service } from './service';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
  this.route.params.pipe(
        switchMap((params:ParamMap) => this.service.getTweets(params.get('keyword'))))
        .subscribe((tweets:Tweet[]) => this.tweets = tweets);
  }

  this.route.params.pipe(switchMap((params: Params) => {
    this.heroService.getHero(+params['id'])
    })).subscribe((hero: Hero) => this.hero = hero); 
}
