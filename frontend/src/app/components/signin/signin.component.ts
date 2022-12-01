import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
    ){

  }

  signIn(){
    this.authService.signIn(this.user)
      .subscribe({
        next: (res) => {
          localStorage.setItem('token',res.token);
          this.router.navigate(['/private']);
        },
        error: (err) => console.log(err)
      });
  }

}
