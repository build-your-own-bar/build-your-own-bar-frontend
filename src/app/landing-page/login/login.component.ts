import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    isLogin = true;
    constructor(private loginService: LoginService) { }

    onSwitchMode() {
      this.isLogin = !this.isLogin;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
          return;
        }
      const username = form.value.username;
      const email = form.value.email;
      const password = form.value.password;

     
      this.loginService.signup(username, email, password)
      
    
  

      
      form.reset();
  }

  

  ngOnInit() {
    this.isLogin = true;
  }

}
