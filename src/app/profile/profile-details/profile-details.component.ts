import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
profileDetailsMessage:any;
  constructor(private notificationService : NotificationService) { }

  ngOnInit(): void {
    this.profileDetailsMessage = this.notificationService.getMessage();
  }

}
