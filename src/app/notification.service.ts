import { Injectable } from '@angular/core';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class NotificationService {
  private message: any ="Default value";
  constructor() { }

  public setMessage(value: any): void {
    this.message = value;
  }

  public getMessage(): any {
    return this.message;
  }
}
