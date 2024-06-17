import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { NotificationService } from '../notification.service';

@NgModule({
  declarations: [ProfileComponent, ProfileDetailsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  providers:[NotificationService]
})
export class ProfileModule { }
