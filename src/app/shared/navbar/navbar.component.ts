import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // category = this._auth.imgUrl;
  constructor(public _auth: DataService, private _router: Router) {}

  ngOnInit(): void {
    this.me();
  }

  me() {
    console.log(this._auth.userData);
    console.log(this._auth.isLoggedIn);
    if (this._auth.isLoggedIn) {
      this._auth.me().subscribe(
        (res) => {
          this._auth.isLoggedIn = true;
          this._auth.userData = res.data.userData;
          console.log(this._auth.userData);
        },
        () => {
          this._auth.isLoggedIn = false;
          this._auth.userData = null;
        }
      );
    }
  }

  logout() {
    let data = null;
    this._auth.logout(data).subscribe(
      (res) => {
        console.log(res);
        this._auth.isLoggedIn = false;
      },
      (e) => {
        console.log(e.error.message);
        this._auth.isLoggedIn = true;
      },
      () => {
        console.log('done');
        localStorage.removeItem('store');
        this._router.navigateByUrl('/login');
      }
    );
  }
}
