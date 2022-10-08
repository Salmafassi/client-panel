import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css']
})
export class DetailsClientComponent implements OnInit {
id: string='0';
Client: any;
showbalance=false;
  constructor(private ClientService: ClientService,private FlashMessage: FlashMessagesService,private route: ActivatedRoute,private router:Router) {
    this.id=this.route.snapshot.params['id'];
    this.ClientService.getClient(this.id).subscribe((client)=>{
         this.Client=client; })
   }

  ngOnInit(): void {
  
   
         //console.log(this.Client);
  
  }
  onSubmit(){
    this.Client.id=this.id;   
     this.ClientService.updateBalance(this.Client);

    this.FlashMessage.show('client is updated',{cssClass:'alert-warning'});

  }
  Delete(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure to delete this client?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
          this.ClientService.deleteClient(this.id);
    this.FlashMessage.show('client deleted ',{cssClass:'alert alert-danger'});
    this.router.navigate(['/']);
        swalWithBootstrapButtons.fire({
          title: 'Deleted!',
          text: 'Client has been deleted.',
          icon: 'success',
          timer:4000,
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          ' client is safe :)',
          'error'
        )
      }
    })
    // if(confirm('Are you sure you want to delete this client ?')){
     
    // }
   
  }

}
