import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsGuard implements CanActivate {
  constructor(private Auth: AngularFireAuth,private router: Router){}
  canActivate(): Observable<boolean> {
    return this.Auth.authState.pipe(map(auth=>{
      if(!auth){
        this.router.navigate(['/login']);
        return false;
      }
      else{
        return true;
      }
    }))
  }
  
}
