import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'shopping-list', pathMatch: 'full' },
  // { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListPageModule' },
  {
    path: '',
    loadChildren: () => import('./shopping-list/shopping-list.module').then( m => m.ShoppingListPageModule)
  },
  {
    path: 'add-shopping',
    loadChildren: () => import('./add-shopping/add-shopping.module').then( m => m.AddShoppingPageModule)
  },
  {
    path: 'edit-shopping-item/:id',
    loadChildren: () => import('./edit-shopping-item/edit-shopping-item.module').then( m => m.EditShoppingItemPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
