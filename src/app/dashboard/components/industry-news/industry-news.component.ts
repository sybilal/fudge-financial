import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IndustryNews } from 'src/app/models/news';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-industry-news',
  templateUrl: './industry-news.component.html',
  styleUrls: ['./industry-news.component.css']
})
export class IndustryNewsComponent implements OnDestroy {

  news: IndustryNews[] = [];


  subscription: Subscription;
  constructor(private rs: RestService) {
    this.subscription = this.rs.getPosts().subscribe(data => {
      this.news = data as IndustryNews[];
    }, error => {
      console.log(error);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
