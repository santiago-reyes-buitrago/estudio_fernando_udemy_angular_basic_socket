import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {WebsocketService} from '../websockets/services/websocket.service';
import {ChatService} from '../chat/services/chat.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  webSocketService = inject(WebsocketService);
  chatService = inject(ChatService);
  protected title = 'basico';

  ngOnInit(): void {
    this.chatService.listenMessagePrivate().subscribe({
      next: (message) => {
        console.log(message);
      }
    })
  }
}
