import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthClientService } from 'src/app/services/auth-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
loggedIn: boolean=false;
username: any;
  constructor(private auth: AuthClientService,private FlashMessage: FlashMessagesService,private Router: Router) { }

  ngOnInit(): void {
     this.auth.getAuth().subscribe(auth => {
      if(auth){
      this.loggedIn=true;
      this.username=auth.email;
      }
      else{
        this.loggedIn=false;
      }
    })
  }
onlogOut(){
this.auth.logOut()
}
}
