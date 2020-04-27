import { Injectable } from '@angular/core';
import { ShoppingItem } from 'src/models/shopping-item/shopping-item.interface';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
  })
  
  export class ItemService {
    itemListRef: AngularFireList<any>;
    itemngRef: AngularFireObject<any>;
  
    constructor(private db: AngularFireDatabase) { }
  
    // Create
    // createBooking(apt: Appointment) {
    //   return this.bookingListRef.push({
    //     name: apt.name,
    //     email: apt.email,
    //     mobile: apt.mobile
    //   })
    // }
  
    // Get Single
    geItem(id: string) {
      this.itemngRef = this.db.object('/shopping-list/' + id);
      return this.itemngRef;
    }
  
    // Get List
    getItemList() {
      this.itemListRef = this.db.list('/shopping-list');
      return this.itemListRef;
    }
  
    // Update
    updateItem(id, item: ShoppingItem) {
      return this.itemngRef.update({
        itemName: item.itemName,
        itemNumber: item.itemNumber
      });
    }
  
    // Delete
    deleteItem(id: string) {
      this.itemngRef = this.db.object('/shopping-list/' + id);
      this.itemngRef.remove();
    }
  }