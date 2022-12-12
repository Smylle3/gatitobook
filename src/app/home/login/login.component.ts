import { AuthenticationService } from './../../authentication/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: string = '';
  pass: string = '';

  constructor(
    private authServide: AuthenticationService,
    private router: Router
  ) {}

  login() {
    this.authServide.auth(this.user, this.pass).subscribe(
      () => {
        this.router.navigate(['animals'])
      },
      (error) => {
        alert('Usuario errado');
        console.log(error);
      }
    );
  }
}
