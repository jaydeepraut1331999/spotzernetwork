import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../services/storage.service';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    public isUserLoggedIn = false;
    constructor(
        private router: Router,
        private storageService: StorageService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.storageService.storeData.IsUserLoggedIn.subscribe((isLoggedIn: boolean) => this.isUserLoggedIn = isLoggedIn)
        if (this.isUserLoggedIn) {
            return true;
        }
        this.router.navigate(['/page/login']);
        return false;

    }
}