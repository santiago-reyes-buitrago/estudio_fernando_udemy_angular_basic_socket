import {Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {WebsocketService} from '../../../websockets/services/websocket.service';

@Component({
  selector: 'auth-login',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css',
})
export class LoginPage {
  private fb =  inject(FormBuilder);
  private websockerService = inject(WebsocketService);
  loginForm = this.fb.group({
    username: ['',[Validators.required]],
  })


  protected login() {
    if (this.loginForm.invalid) {
      alert('Datos invalidos')
      return;
    }
    this.websockerService.loginWs(this.loginForm.value.username!)
  }
}
