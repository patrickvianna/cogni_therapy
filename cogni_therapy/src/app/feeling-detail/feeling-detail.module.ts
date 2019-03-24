import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FeelingDetailCriarPage } from './feeling-detail-criar.page';
import { FeelingDetailEditarPage } from './feeling-detail-editar.page.';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        outlet: '',
        component: FeelingDetailCriarPage
      },
      {
        path: 'editar/:id',
        outlet: 'editar/:id',
        component: FeelingDetailEditarPage
      }
    ]

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeelingDetailCriarPage, FeelingDetailEditarPage]
})
export class FeelingDetailPageModule { }
