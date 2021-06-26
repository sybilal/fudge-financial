import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TopComment } from 'src/app/models/comment';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-top-comments',
  templateUrl: './top-comments.component.html',
  styleUrls: ['./top-comments.component.css']
})
export class TopCommentsComponent implements OnDestroy {

  comments: TopComment[] = [];


  subscription: Subscription;
  constructor(private rs: RestService) {
    this.subscription = this.rs.getComments().subscribe(data => {
      this.comments = data as TopComment[];
    }, error => {
      console.log(error);
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
