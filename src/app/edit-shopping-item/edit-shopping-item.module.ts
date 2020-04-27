import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditShoppingItemPageRoutingModule } from './edit-shopping-item-routing.module';

import { EditShoppingItemPage } from './edit-shopping-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditShoppingItemPageRoutingModule
  ],
  declarations: [EditShoppingItemPage]
})
export class EditShoppingItemPageModule {}
