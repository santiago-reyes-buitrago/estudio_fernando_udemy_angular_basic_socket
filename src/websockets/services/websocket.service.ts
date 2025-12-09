import {inject, Injectable, signal} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {User} from '../models/user.model';

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
  user = signal<User|null>(null);

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

  listenEvent<T>(event: string){
    return this.socket.fromEvent<T>(event);
  }

  loginWs(name: string){
    console.log('login',name);
    this.emitEvent<any>('login',{name},(res:any)=> {
      console.log('login exitoso',res);
    })
  }
}
