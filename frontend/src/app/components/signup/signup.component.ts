import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(
    private authService: AuthService,
    private router: Router
    ){}

  signUp(){
    this.authService.signUp(this.user)
      .subscribe({
        next: (res) => {
          localStorage.setItem('token',res.token);
          this.router.navigate(['/private']);
        },
        error: (e) => console.error(e)
    })
  }

}
