import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.gaurd';


const pageModule = () => import('./pages/page.module').then(x => x.PageModule);

const routes: Routes = [
  { path: 'page', loadChildren: pageModule },
  { path: '**', redirectTo: '', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
