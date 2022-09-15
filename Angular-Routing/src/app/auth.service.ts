import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = false
  constructor() { }

  login(){
    this.isAuth = true
  }
  logout(){
    this.isAuth = false
  }
  isAuthenticated():any{
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve(this.isAuth)
      },1000)
    })
  }
}
