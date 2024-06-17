import { Component, OnInit, inject } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  notificationService: NotificationService = inject(NotificationService);
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  updateNotification() {
    this.notificationService.setMessage(Math.random().toString());
    this.router.navigate(['product', 1]);
  }
}
