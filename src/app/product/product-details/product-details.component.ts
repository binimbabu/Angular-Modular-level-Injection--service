import { Component, OnInit, inject } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productMessage: any;
  notificationService: NotificationService = inject(NotificationService);
  constructor() { }

  ngOnInit(): void {
    this.productMessage = this.notificationService.getMessage();
  }

}
