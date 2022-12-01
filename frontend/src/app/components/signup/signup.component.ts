import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user = {
    name: '',
    lastname: '',
    email: '',
    password: ''
  }

  signUp(){
    console.log("🚀 ~ file: signup.component.ts ~ line 17 ~ SignupComponent ~ signUp ~ this.user;", this.user)
  }

}
