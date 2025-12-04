import {Component, computed, inject} from '@angular/core';
import {WebsocketService} from '../../../websockets/services/websocket.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'ui-navbar',
  imports: [
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private websocketService = inject(WebsocketService)
  serverStatus = computed(() => this.websocketService.socketStatus())
}
