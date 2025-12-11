import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {WebsocketService} from '../../websockets/services/websocket.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const websocketService = inject(WebsocketService)
  const router = inject(Router);
  if (!websocketService.user()) {
    router.navigateByUrl('/');
  }
  return !!websocketService.user();
};
