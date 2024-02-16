import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public credentials = [{ username: 'johndoh1@gmail.com', password: 'QWEasd!@#123' },
    { username: 'joshua99@gmail.com', password: 'ASDzxc!@#123' },
    { username: 'jaydeep@gmail.com', password: 'ASDzxc!!!' }];

    constructor(private storageService: StorageService) { }

    public verifyLogin(username: any, password: any): boolean {
        if (username && password) {
            const userData = this.credentials.find((x: any) => x.username === username.toLowerCase() &&
                x.password === password);
            if (userData) {
                this.storageService.actionData.loginSuccess();
                this.storageService.actionData.updateUserInfo(userData)
                return true;
            }
        }
        return false
    }
}
