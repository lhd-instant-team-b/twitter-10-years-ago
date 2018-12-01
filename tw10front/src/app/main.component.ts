import { Component } from '@angular/core';
import { SearchQuery } from './models';
import { Router } from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./vendor/bootstrap/css/bootstrap.min.css', './style.css']
})

export class MainComponent {
  constructor(private router:Router) {}
  title = 'Twitter Back Ago';
  sq: SearchQuery = {
    keyword: '',
    range: 0
    }

  onSelect(): void {
    console.log(this.sq.keyword);
    console.log(this.sq.range);
    }

  onClick():void {
    this.router.navigate(['/tweets', this.sq.keyword]);
  }
}
