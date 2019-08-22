import { IUser } from './interfeces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const uri = 'http://localhost/3000/';


@Injectable({
  providedIn: 'root'
})
export class ApiHelper {
  url = "";
  constructor(private http: HttpClient) { }

  // getNewData() {
  //   this.http.get(this.url).subscribe(res => {
  //     this.posts = res;
  //   });
  // }

  login = (user: IUser) => {
    return this.http.post(uri + 'api/login', user);
  }
}

// export const 