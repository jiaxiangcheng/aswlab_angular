import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  private user = new Subject<string>(); // 发送器，通知有变化
  user$ = this.user.asObservable(); // 数据储存的地方， 可以被subscribe()然后就可以获取数据

  changeUserStatus(value) {
      this.user.next(value); // emit有变化，并且传送新的value
  }

  logout() {
    localStorage.clear();
  }

  constructor() { }
}
