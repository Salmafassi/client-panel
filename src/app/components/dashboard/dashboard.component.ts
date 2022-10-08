import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ClientService: ClientService,private FlashMessage: FlashMessagesService,private router:Router) { }

  ngOnInit(): void {
  }
  Delete(id: string){
    this.ClientService.deleteClient(id);
    this.FlashMessage.show('client deleted ',{cssClass:'alert alert-danger'});
    this.router.navigate(['/']);
  }
}
