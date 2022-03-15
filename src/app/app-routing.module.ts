import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./page/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'docs',
    loadChildren: () => import('./page/docs/docs.module').then( m => m.DocsPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./page/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'abouts',
    loadChildren: () => import('./page/abouts/abouts.module').then( m => m.AboutsPageModule)
  },

  /**
   * Esta deve ser SEMPRE a última rota desta lista.
   * Se criar novas páginas, edite este arquivo para satisfazer a regra acima.
   */

  {
    path: '**',
    loadChildren: () => import('./page/e404/e404.module').then( m => m.E404PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
