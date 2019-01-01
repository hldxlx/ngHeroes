import { Injectable } from '@angular/core';
@Injectable(/*{
  providedIn: 'root',//放出来会报错 ERROR in src/app/message.service.ts(2,2): error TS2554: Expected 0 arguments, but got 1.


 }*/)
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
