import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../helpers/auth.gaurd';
import { HistoryComponent } from './history.component';
import { HomeComponent } from './home.component';
import { InvoiceComponent } from './invoice.component';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'invoice', component: InvoiceComponent },
            { path: 'history', component: HistoryComponent },
            { path: 'home', component: HomeComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }