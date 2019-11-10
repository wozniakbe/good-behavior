import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BehaviorDetailPage } from './behavior-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BehaviorDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BehaviorDetailPage]
})
export class BehaviorDetailPageModule {}
