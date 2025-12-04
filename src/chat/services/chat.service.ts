import {inject, Injectable} from '@angular/core';
import {WebsocketService} from '../../websockets/services/websocket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private readonly websocketService = inject(WebsocketService);


  sendMessage(message: string) {
    const payload = {
      from: 'Santiagos',
      message
    }
    this.websocketService.emitEvent('message', payload);
  }
}
