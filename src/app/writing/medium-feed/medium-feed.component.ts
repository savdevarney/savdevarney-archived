import { Component, OnInit } from '@angular/core';
import { MediumService } from './medium-feed.service';

@Component({
  selector: 'app-medium-feed',
  templateUrl: './medium-feed.component.html',
  styleUrls: ['./medium-feed.component.css']
})
export class MediumFeedComponent implements OnInit {

  private articleList;
  constructor(
    private mediumService: MediumService,
  ) { }

  ngOnInit() {
    this.articleList = this.mediumService.getMediumFeed();
  }

  get articles() {
    return this.articleList;
  }

}
