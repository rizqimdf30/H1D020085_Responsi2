import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canLoad: [AuthGuard], // Secure all child pages
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    canLoad: [AutoLoginGuard],
  },
  {
    path: 'data-tambah',
    loadChildren: () =>
      import('./data-tambah/data-tambah.module').then(
        (m) => m.DataTambahPageModule
      ),
  },
  {
    path: 'data-edit/:no',
    loadChildren: () =>
      import('./data-edit/data-edit.module').then(
        (m) => m.DataEditPageModule),
  },
  {
    path: 'data-lihat/:no',
    loadChildren: () =>
      import('./data-lihat/data-lihat.module').then(
        (m) => m.DataLihatPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
