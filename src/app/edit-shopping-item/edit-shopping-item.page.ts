import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';
import { ShoppingItem } from 'src/models/shopping-item/shopping-item.interface';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Component({
  selector: 'app-edit-shopping-item',
  templateUrl: './edit-shopping-item.page.html',
  styleUrls: ['./edit-shopping-item.page.scss'],
})
export class EditShoppingItemPage implements OnInit {
  shoppingItemRef$: AngularFireObject<any>; //Cionreate a firebase node to store data
  id: any; 
  shoppingItem = {} as ShoppingItem;
  constructor(public NavCtrl: NavController,private database: AngularFireDatabase, private actRoute: ActivatedRoute) { 
    const shoppingItemId = this.actRoute.snapshot.paramMap.get('id');
    console.log(shoppingItemId);
    this.shoppingItemRef$ = this.database.object('shopping-list/' + shoppingItemId);
    //this.shoppingItemRef$ = this.database.object('/shopping-list/' + shoppingItemId);
    this.shoppingItemRef$.valueChanges().subscribe(shoppingItem => this.shoppingItem = shoppingItem);
  }

  // geItem(id: string) {
  //   this.shoppingItemRef$ = this.db.object('/shopping-list/' + id);
  //   return this.shoppingItemRef$;
  // }
  ngOnInit() {
   
  }

  updateItem(shoppingItem: ShoppingItem) {
    this.shoppingItemRef$.update(this.shoppingItem);

    //Send user back to shoppinglist page
    this.NavCtrl.pop();
      
  }

  

}
