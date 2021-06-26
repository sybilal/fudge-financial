import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnDestroy {

  users: User[] = [];

  subscription: Subscription;
  constructor(private rs: RestService) {
    this.subscription = this.rs.getUsers().subscribe(data => {
      this.users = data as User[];
    }, error => {
      console.log(error);
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
