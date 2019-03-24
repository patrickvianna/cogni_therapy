import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'feeling', loadChildren: './feeling/feeling.module#FeelingPageModule' },
  { path: 'feeling-detail', loadChildren: './feeling-detail/feeling-detail.module#FeelingDetailPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'feel', loadChildren: './feel/feel.module#FeelPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
