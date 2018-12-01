import { Component } from '@angular/core';
import { SearchQuery } from './models';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  title = 'Twitter Back Ago';
  sq: SearchQuery = {
    keyword: '',
    range: 0
    }

  onSelect(): void {
    console.log(this.sq.keyword);
    console.log(this.sq.range);
    }
}
