import {Component, ElementRef, inject, OnDestroy, OnInit, signal, viewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ChatService} from '../../services/chat.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'chat',
  imports: [
    FormsModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent implements OnInit, OnDestroy {
  private readonly messageContainer = viewChild<ElementRef>('messagesContainer');
  private readonly chatService = inject(ChatService);
  messages = signal<string[]>([]);
  message = '';
  subscriptionMessage!: Subscription;

  ngOnInit(): void {
    this.subscriptionMessage = this.chatService.listenMessage().pipe().subscribe({
      next: message => {
        this.messages.update(messages => [...messages, message])
        setTimeout(() => {
          this.messageContainer()!.nativeElement.scrollTop = this.messageContainer()?.nativeElement.scrollHeight;
          console.log(this.messageContainer()?.nativeElement.scrollHeight);
        },80)
      },
    });

  }

  ngOnDestroy(): void {
    this.subscriptionMessage.unsubscribe();
  }

  protected sendMessage() {
    if (!this.message.trim()) return;
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
}
