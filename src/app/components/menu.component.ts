import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({ 
    selector: 'app-menu',
    templateUrl: './menu.component.html' })
export class MenuComponent {

    constructor(private router: Router
    ) { }
    navigateToHistory() {
        this.router.navigate(['/page/history']);
    }

    navigateToInvoice() {
        this.router.navigate(['/page/invoice']);
    }
    navigateToHome() {
        this.router.navigate(['/page/home']);
    }
  
}