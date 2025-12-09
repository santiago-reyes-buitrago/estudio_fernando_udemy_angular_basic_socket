import { Routes } from '@angular/router';
import {LoginPage} from '../auth/page/login/login.page';
import {ChatPageComponent} from '../chat/page/chat-page/chat-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'chat',
    component: ChatPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
