import { Component, OnInit} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ShoppingItem } from 'src/models/shopping-item/shopping-item.interface';
import { ActionSheetController } from '@ionic/angular';
import {ItemService} from '../../service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})
export class ShoppingListPage implements OnInit {
   shoppingListRef$: any[];
  constructor(private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController, private itemService: ItemService) { 
       
  }

  ngOnInit() {
    this.fetchBookings();
    let itemRes = this.itemService.getItemList();
    itemRes.snapshotChanges().subscribe(res => {
      this.shoppingListRef$ = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.shoppingListRef$.push(a as ShoppingItem);
      })
    })
  }
   
  fetchBookings() {
    this.itemService.getItemList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteBooking(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.itemService.deleteItem(id);
    }
  }

  //    async DeleteShoppingItem(shoppingItem: ShoppingItem) {
  //       const actionSheet = await this.actionSheetCtrl.create({
  //         header: 'Item Name',
  //         buttons: [
  //           // {
  //           //   text: 'Edit',
  //           //   handler: () => {
  //           //     //edit function  here...
  //           //   }
  //           // },
  //           {
  //             text: 'Delete',
  //             role: 'destructive',
  //             handler: () => {
  //               //delete function here...
  //              // this.shoppingListRef$.remove(shoppingItem.$key)
  //             }
  //           },
  //           {
  //             text: 'Cancel',
  //             role: 'cancel',
  //             handler: () => {
  //               console.log("The user has selected the cancel button")
  //             }
  //           }
  
  //         ]
  //       });
  //       await actionSheet.present();
      
  // }

}
