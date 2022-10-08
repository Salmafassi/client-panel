import { FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit } from '@angular/core';
import { AuthClientService } from 'src/app/services/auth-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
Email: string='';
Password: string ='';
  constructor(private Auth: AuthClientService,private FlashMessages: FlashMessagesService,private router: Router) { }

  ngOnInit(): void {
    // this.Auth.getAuth().subscribe(auth => {
    //   if(auth){
    //   this.router.navigate(['/']);
    //   }
    // })
  }
  onlogin(){
    this.Auth.login(this.Email,this.Password).then(auth=>{
      if(auth){
        this.FlashMessages.show("you're logged successfully",{cssClass:'alert-success',timeout:4000})
        this.router.navigate(['/']);
      }
    })
    .catch(error=>{
      this.FlashMessages.show(error.message,{cssClass:'alert-danger',timeout:4000})
    })
  }
  onloginWithGoogle(){
    this.Auth.loginWithGoogle().then(auth=>{
      if(auth){
        this.FlashMessages.show("you're logged successfully",{cssClass:'alert-success',timeout:4000})
        this.router.navigate(['/']);
      }
    })
    .catch(error=>{
      this.FlashMessages.show(error.message,{cssClass:'alert-danger',timeout:4000})
    })
  }

}
