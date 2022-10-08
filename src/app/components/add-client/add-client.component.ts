import { Client } from 'src/app/models/client';
import { AuthClientService } from 'src/app/services/auth-client.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
client :Client={
  firstName:'',
  lastName:'',
  email:'',
  phone:0,
  balance:0,
  user:'',
}
 ngOnInit(): void {
this.Auth.getAuth().subscribe((auth)=>{
  this.client.user=auth?.uid;
})
  }
  constructor(private ServiceClient: ClientService,private Auth: AuthClientService, private route: Router,private flashMessages:FlashMessagesService) { }

 
  addClient(){
    this.ServiceClient.addclient(this.client);
    this.flashMessages.show('Client added successfully.',{ cssClass:'alert-primary ',timeout:5000 });
    this.route.navigate(['/']);
  }

}
