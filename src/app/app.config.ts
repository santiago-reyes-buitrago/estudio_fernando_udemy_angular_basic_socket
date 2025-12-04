import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideSocketIo, SocketIoConfig} from 'ngx-socket-io';
import {environment} from '../environments/environment';

const socketConfig: SocketIoConfig = { url: environment.wsUrl, options: {} };

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideSocketIo(socketConfig)
  ]
};
