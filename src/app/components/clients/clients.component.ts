import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthClientService } from 'src/app/services/auth-client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
clients: any[]=[];
total: number=0;
SearchResult: any[]=[];
constructor(private serviceClient: ClientService,private Auth: AuthClientService,private FlashMessage: FlashMessagesService,private router:Router) { }


Delete(id: string){
  if(confirm('Are you sure you want to delete this client ?')){
     this.serviceClient.deleteClient(id);
  this.FlashMessage.show('client deleted ',{cssClass:'alert alert-danger'});
  this.router.navigate(['/']);
  }
 
}

  ngOnInit(): void {
    this.Auth.getAuth().subscribe((auth)=>{
       this.serviceClient.getClients(auth?.uid).subscribe(clients=>{
      this.clients=clients;
      this.SearchResult=this.clients;
      this.total=this.getTotal();
    })
    })
   
  }
  Surch(query: string){
    this.SearchResult=this.clients.filter(client=>client.firstName.toLowerCase().includes(query.toLowerCase()));
  }
  getTotal(){
    return this.clients.reduce((total,client)=>{
      return total+client.balance;
    },0);
  }

}
