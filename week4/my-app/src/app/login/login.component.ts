import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const logins = [
  { username: 'joel', password: 'knechtli' },
  { username: 'dave', password: 'farrow' },
  { username: 'nish', password: 'ant' }
];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    const hasLogin = logins.some(login => {
      return (
        login.username === this.username.toLowerCase() &&
        login.password === this.password
      );
    });

    if (hasLogin) {
      this.router.navigateByUrl('/account');
    }
    else {
      alert('Incorrect password');
    }
  }
}
