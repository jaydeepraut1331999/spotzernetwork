import { Component, OnInit } from '@angular/core';
@Component({ 
    selector: 'app-footer',
    templateUrl: './footer.component.html' })
export class FooterComponent implements OnInit {
    public currentYear = new Date().getFullYear();
    constructor(
    ) { }
    ngOnInit(): void {
       // throw new Error('Method not implemented.');
    }

}