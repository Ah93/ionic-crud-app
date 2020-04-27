import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditShoppingItemPage } from './edit-shopping-item.page';

const routes: Routes = [
  {
    path: '',
    component: EditShoppingItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditShoppingItemPageRoutingModule {}
