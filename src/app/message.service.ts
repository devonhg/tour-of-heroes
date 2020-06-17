import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = [];

  add(message: string) {
    let d = new Date();
    this.messages.unshift(`${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}@${(d.getHours() + 24) % 12 || 12}:${d.getMinutes()} => ${message}`);
  }

  clear() {
    this.messages = [];
  }

}
