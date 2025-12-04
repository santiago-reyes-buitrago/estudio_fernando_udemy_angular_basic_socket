import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from '../shared/ui/navbar/navbar.component';
import {ChatService} from '../chat/services/chat.service';
import {ChatComponent} from '../chat/components/chat/chat.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ChatComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private readonly chatService = inject(ChatService);
  protected title = 'basico';

  ngOnInit(): void {
    console.log('hola mundo');
    this.chatService.sendMessage('Hola desde el cliente');
  }

}
