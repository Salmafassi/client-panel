import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { map } from 'rxjs';
import { Client } from '../models/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
collection: AngularFirestoreCollection | undefined;
documents: AngularFirestoreDocument | undefined;

  constructor(private db: AngularFirestore) { 
  this.collection=db.collection('clients');
 
  }
  getClients(uid: any){
    return this.db.collection('clients',fn=>fn.where('user','==',uid)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  addclient(client: Client){
    this.db.collection('clients').add(client);
  }
  getClient(id: string){
   return this.db.collection('clients').doc(id).valueChanges();
  }
  updateBalance(client: Client){
    this.db.collection('clients').doc(client.id).update(client);
  }
  deleteClient(id: string){
    this.db.collection('clients').doc(id).delete();
  }
}
