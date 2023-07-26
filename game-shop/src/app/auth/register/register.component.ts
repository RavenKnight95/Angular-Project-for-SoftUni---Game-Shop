import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator, passwordMatch } from '../utils';
import { UserService } from 'src/app/core/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage: string;

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  validRepass: boolean = true;

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, emailValidator]),
    'passwords': new FormGroup({
      'password': this.passwordControl,
      'repass': new FormControl(null, [passwordMatch(this.passwordControl)])
    })
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registerHandler(): void {
    if (this.passwordsGroup.controls.password.value !== this.passwordsGroup.controls.repass.value) {
      this.validRepass = false;
      return;
    } else {
      this.validRepass = true;
    }

    const { email, passwords } = this.registerFormGroup.value;

    const body = {
      email: email,
      password: passwords.password
    };

    this.userService.register$(body).subscribe({
      next: user => {
        this.router.navigate(['/login']);
      }, error: (err) => {
        this.errorMessage = err.error.message;
      }
    });
  }

}
