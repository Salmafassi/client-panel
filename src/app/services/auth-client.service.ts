import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {

  constructor(private Auth: AngularFireAuth,private router: Router) { }
  login(email: string,password: string){
    return new Promise((resolve,reject)=>{
      this.Auth.auth.signInWithEmailAndPassword(email,password)
      .then((userData)=>resolve(userData),(error)=>reject(error))
    })
  }
  register(email: string,password: string){
    return new Promise((resolve,reject)=>{
      this.Auth.auth.createUserWithEmailAndPassword(email,password)
      .then((userData)=>resolve(userData),(error)=>reject(error))
    })
  }
  loginWithGoogle(){
    return new Promise((resolve,reject)=>{
      this.Auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userData)=>resolve(userData),(error)=>reject(error))
    })
  }
  getAuth(){
    return this.Auth.authState.pipe(map(actions=>actions));
  }
  logOut(){
    this.Auth.auth.signOut();
    this.router.navigate(['/login']);
  }
}
