import {inject, Injectable} from '@angular/core';
import {WebsocketService} from '../../websockets/services/websocket.service';

const CHAT_EVENTS = {
  MESSAGE: 'message',
  PRIVATE_MESSAGE: 'private-message',
  NEW_MESSAGE: 'message-new'
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private readonly websocketService = inject(WebsocketService);

  listenMessage(){
    return this.websocketService.listenEvent<{ from: string, message: string }>(CHAT_EVENTS.NEW_MESSAGE);
  }


  sendMessage(message: string) {
    const payload = {
      from: this.websocketService.user()!.name,
      message
    }
    this.websocketService.emitEvent(CHAT_EVENTS.MESSAGE, payload);
  }

  listenMessagePrivate(){
    return this.websocketService.listenEvent(CHAT_EVENTS.PRIVATE_MESSAGE);
  }
}
