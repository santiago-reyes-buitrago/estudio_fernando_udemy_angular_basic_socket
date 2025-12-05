import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from '../shared/ui/navbar/navbar.component';
import {ChatComponent} from '../chat/components/chat/chat.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ChatComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected title = 'basico';
}
