import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/helpers/interfeces';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// const logins = [
//   { username: 'joel', password: 'knechtli' },
//   { username: 'dave', password: 'farrow' },
//   { username: 'nish', password: 'ant' }
// ];

const uri = 'http://localhost/3000/';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: IUser;

  constructor(private router: Router, private httpClient: HttpClient) {
    this.user = {
      username: "",
      password: ""
    } as IUser;
  }

  ngOnInit() {
  }

  login() {
    // const hasLogin = logins.some(login => {
    //   return (
    //     login.username === this.username.toLowerCase() &&
    //     login.password === this.password
    //   );
    // });
    console.log(this.user.username)
    // const hasLogin = await 
    this.httpClient.post<any>('http://localhost/3000/api/auth', ' this.user, httpOptions');
    // console.log(hasLogin);
    // if (hasLogin) {
    //   // sessionStorage.setItem('user', user);
    //   // this.router.navigateByUrl('/account');
    // }
    // else {
    //   alert('Incorrect password');
    // }
  }
}
