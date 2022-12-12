import { Router } from '@angular/router';
import { AuthenticationService } from './../../authentication/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  email: string = '';
  name: string = '';
  user: string = '';
  pass: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  signin() {
    this.authService
      .signin(this.user, this.email, this.name, this.pass)
      .subscribe(
        () => {
          this.router.navigate(['animals']);
        },
        (error) => {
          alert('Erro ao criar conta');
          console.log(error);
        }
      );
  }
}
