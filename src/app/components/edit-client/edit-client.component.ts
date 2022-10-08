import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id: string='0';
  client: any;
  showbalance=false;
    constructor(private ClientService: ClientService,private FlashMessage: FlashMessagesService,private route: ActivatedRoute,private router:Router) {
     
     }
  ngOnInit(): void {
     this.id=this.route.snapshot.params['id'];
      this.ClientService.getClient(this.id).subscribe((client)=>{
           this.client=client; })
  }
  UpdateClient(){
  this.client.id=this.id;
  this.ClientService.updateBalance(this.client);
  this.FlashMessage.show('client updated successufully',{cssClass:'alert alert-primary',timeout:4000});
  this.router.navigate(['/client',this.id]);
}
}
