import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ShoppingItem } from 'src/models/shopping-item/shopping-item.interface';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-shopping',
  templateUrl: './add-shopping.page.html',
  styleUrls: ['./add-shopping.page.scss'],
})
export class AddShoppingPage implements OnInit {
   //creating a new object
   shoppingItem = {} as ShoppingItem
 
   shoppingItemRef$: AngularFireList<any>; //Cionreate a firebase node to store data
   //bookingRef: AngularFireObject<any>; //Retrieve data from firebase
  constructor(public NavCtrl: NavController,  private database: AngularFireDatabase) { 
    this.shoppingItemRef$ = this.database.list('shopping-list');
  }

  ngOnInit() { 
  }

  addShoppingItem(shoppingItem: ShoppingItem){
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    });

    this.shoppingItem = {} as ShoppingItem;

    this.NavCtrl.pop();
}

}
