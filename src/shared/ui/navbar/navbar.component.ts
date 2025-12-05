import {Component, computed, inject} from '@angular/core';
import {WebsocketService} from '../../../websockets/services/websocket.service';

@Component({
  selector: 'ui-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private websocketService = inject(WebsocketService)
  serverStatus = computed(() => this.websocketService.socketStatus())
}
