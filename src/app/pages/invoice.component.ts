import { Component, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit, OnDestroy {
    public invoices$: any[] = [];
    public displayedColumns = ['id', 'taskName', 'amount', 'hours', 'completedOn'];
    public totalAmtEarned: number = 0;
    public totalHoursSpent: number = 0;
    private subscription!: Subscription;
    constructor(private readonly storageService: StorageService
    ) { }
    public ngOnInit(): void {
        this.subscription = this.storageService.storeData.getInvoices.subscribe((tasks) => {
            this.invoices$ = tasks;
            if (tasks.length) {
                this.totalAmtEarned = tasks.reduce(function (prev, current) { return prev + Number(current.amount); }, 0);
                this.totalHoursSpent = tasks.reduce(function (prev, current) { return prev + Number(current.hours); }, 0);
            }
        });
    }

    public downloadPDF(): void {
        const doc = new jsPDF();
        autoTable(doc, { html: '#invoice-table' })
        doc.save('invoice-table.pdf')
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}