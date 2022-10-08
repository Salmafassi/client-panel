import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthClientService } from 'src/app/services/auth-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Email: string='';
  Password: string ='';
    constructor(private Auth: AuthClientService,private FlashMessages: FlashMessagesService,private router: Router) { }
  OnRegister(){
    this.Auth.register(this.Email,this.Password).then(()=>{
        this.FlashMessages.show('user is created successfully',{cssClass:'alert alert-primary'});
        this.router.navigate(['/']);

    }).catch((error)=>{
      this.FlashMessages.show(error.message,{cssClass:'alert alert-danger'});
    })
  }

  ngOnInit(): void {
  }

}
