import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UploadComponent } from '../upload/upload.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'upload', component: UploadComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'spender', loadChildren: () => import('../spender/spender.module').then(m => m.SpenderModule) },
  { path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
  UploadComponent
  ]
})
export class RoutingModule { }
