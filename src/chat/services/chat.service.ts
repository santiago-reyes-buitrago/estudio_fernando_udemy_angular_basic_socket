import {inject, Injectable} from '@angular/core';
import {WebsocketService} from '../../websockets/services/websocket.service';
import {map} from 'rxjs';

const CHAT_EVENTS = {
  MESSAGE: 'message',
  NEW_MESSAGE: 'message-new'
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private readonly websocketService = inject(WebsocketService);

  listenMessage(){
    return this.websocketService.listenEvent<{ from: string, message: string }>(CHAT_EVENTS.NEW_MESSAGE).pipe(
      map(payload => payload.message)
    );
  }


  sendMessage(message: string) {
    const payload = {
      from: 'Santiagos',
      message
    }
    this.websocketService.emitEvent(CHAT_EVENTS.MESSAGE, payload);
  }
}
