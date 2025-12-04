import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'chat',
  imports: [
    FormsModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  private readonly chatService = inject(ChatService);

  messages = signal<string[]>([]);
  message = '';

  protected sendMessage() {
    this.messages.update(messages => [...messages, this.message]);
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
}
