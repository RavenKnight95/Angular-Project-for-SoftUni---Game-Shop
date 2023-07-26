import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import { emailValidator } from '../utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage!: string;

  loginFormGroup = this.formBuilder.group({
    'email': new FormControl<string | any>('', [Validators.required, emailValidator]),
    'password': new FormControl<string | any>('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginHandler(): void {
    //questionable
    const toLogin: any = this.loginFormGroup.value
    this.errorMessage = '';
    this.userService.login$(toLogin).subscribe({
      next: user => {
        this.router.navigate(['/home']);
      }, error: (err) => {
        this.errorMessage = err.error.message;
      }
    })
  }
}
