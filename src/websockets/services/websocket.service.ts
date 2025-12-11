import {inject, Injectable, signal} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {User} from '../models/user.model';
import {from} from 'rxjs';

const SOCKETS_EVENTS = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect'
}

const USER_STORAGE_NAME = 'user';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket = inject(Socket);
  socketStatus = signal<boolean>(false)
  user = signal<User | null>(null);

  constructor() {
    this.checkStatus();
    this.recoverDataLocalStorage();
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
    this.socket.emit(event, payload, callback);
  }

  listenEvent<T>(event: string) {
    return this.socket.fromEvent<T>(event);
  }

  loginWs(name: string) {
    console.log('login', name);
    return from(new Promise((resolve, reject) => {
      this.emitEvent<any>('login', {name}, (res: any) => {})
      this.user.set(new User(name))
      this.saveDataLocalStorage();
      resolve('login exitoso');
    }))
  }

  saveDataLocalStorage() {
    localStorage.setItem(USER_STORAGE_NAME, JSON.stringify(this.user()));
  }

  recoverDataLocalStorage() {
    const user: User|null = JSON.parse(localStorage.getItem(USER_STORAGE_NAME)!) ?? null;
    if (user) {
      this.user.set(user)
    }
  }
}
