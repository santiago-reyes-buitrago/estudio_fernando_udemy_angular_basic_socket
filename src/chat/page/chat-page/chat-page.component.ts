import { Component } from '@angular/core';
import {LayoutComponent} from '../../../shared/ui/layout/layout.component';
import {ChatComponent} from '../../components/chat/chat.component';
import {ListUserComponent} from '../../components/list-user/list-user.component';

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

}
