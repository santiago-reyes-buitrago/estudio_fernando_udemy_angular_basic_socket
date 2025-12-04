import {inject, Injectable, signal} from '@angular/core';
import {Socket} from 'ngx-socket-io';

const SOCKETS_EVENTS = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect'
}

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket = inject(Socket);
  socketStatus = signal<boolean>(false)

  constructor() {
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on(SOCKETS_EVENTS.CONNECT, () => {
      console.log('conectado al servidor');
      this.socketStatus.set(true);
    })

    this.socket.on(SOCKETS_EVENTS.DISCONNECT, () => {
      console.log('desconectado al servidor');
      this.socketStatus.set(false);
    })
  }

  emitEvent<T>(event: string, payload?: T | any, callback?: Function) {
    this.socket.emit(event, payload,callback);
  }
}
