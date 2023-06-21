// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginError = false;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    
    }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]})
  }
  
  onSubmit(): void {
  if (this.loginForm.valid) {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const isLoggedIn = this.authService.login(email, password);

    if (isLoggedIn) {
      // Successful login
      // Redirect to dashboard or desired page
      this.router.navigate(['/home']);
    } else {
      // Failed login
      this.loginError = true;
    }
  }
}
}
