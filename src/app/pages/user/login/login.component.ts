import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // ,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)

  isSubmitted = false;
  errorMsg = '';
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private _auth: DataService, private _router: Router) {}

  ngOnInit(): void {}

  get userName() {
    return this.loginForm.get('userName');
  }
  get password() {
    return this.loginForm.get('password');
  }

  handleLogin() {
    if (this.loginForm.valid) {
      this._auth.login(this.loginForm.value).subscribe(
        (res) => {
          localStorage.setItem('store', res.data.token);
          this._auth.isLoggedIn = true;
          this._auth.userData = res.data.userData;
          this.isSubmitted = true;
          console.log(this._auth.userData);
          console.log(this._auth.isLoggedIn);
        },
        (e) => {
          this._auth.isLoggedIn = false;
          this._auth.userData = null;
          console.log(this._auth.userData);
          console.log(this._auth.isLoggedIn);
        },
        () => {
          this._router.navigateByUrl('');
        }
      );
    }
  }
}
