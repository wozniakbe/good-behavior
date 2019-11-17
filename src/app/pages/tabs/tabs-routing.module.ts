import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../../services/users/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule),
              canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'behaviors',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../behaviors/behaviors.module').then(m => m.BehaviorsPageModule),
              canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'rewards',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../rewards/rewards.module').then(m => m.RewardsPageModule),
              canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
