import { Component, OnInit, inject } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  notificationService: NotificationService = inject(NotificationService);
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  profileNotification() {
   this.notificationService.setMessage('Profile:' + Math.random().toString());
   this.router.navigate(['profile', 123]);
  }
}
