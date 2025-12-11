import {Component, computed, inject} from '@angular/core';
import {LayoutComponent} from '../../../shared/ui/layout/layout.component';
import {ChatComponent} from '../../components/chat/chat.component';
import {ListUserComponent} from '../../components/list-user/list-user.component';
import {WebsocketService} from '../../../websockets/services/websocket.service';

@Component({
  selector: 'chat-page',
  imports: [
    LayoutComponent,
    ChatComponent,
    ListUserComponent
  ],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css',
})
export class ChatPageComponent {
 private websocketService = inject(WebsocketService);
  user = computed(() => this.websocketService.user()!)

}
