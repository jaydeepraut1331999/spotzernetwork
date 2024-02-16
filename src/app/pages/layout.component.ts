import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StorageService } from '../services/storage.service';
import { uiActions } from '../store/actions';



@Component({ templateUrl: 'layout.component.html', styleUrls: ['../app.component.scss'] })
export class LayoutComponent {
    public isUserLoggedIn = false;
    constructor(
        private store: Store<any>,
        private router: Router,
        private storageService: StorageService
    ) {
        this.storageService.storeData.IsUserLoggedIn.subscribe((isLoggedIn: boolean) => this.isUserLoggedIn = isLoggedIn)
        this.store.dispatch(uiActions.loadTaskAvailable());
        this.store.dispatch(uiActions.loadInvoices());
        this.store.dispatch(uiActions.loadTaskPending());
        this.store.dispatch(uiActions.loadTaskHistory());
            this.router.navigate(['/']);
    }
}