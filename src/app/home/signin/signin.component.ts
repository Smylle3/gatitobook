import { Router } from '@angular/router';
import { AuthenticationService } from './../../authentication/authentication.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninInterface } from './signinInterface';
import { lowCaseValidator } from './signin.validator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  newUserForm!: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [Validators.required, Validators.minLength(4), lowCaseValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signin() {
    const newUser = this.newUserForm.getRawValue() as SigninInterface;
    console.log(newUser);
    this.authService
      .signin(newUser)
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
