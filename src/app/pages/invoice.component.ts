import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { DisplayedColumns } from '../model/model';
import { StorageService } from '../services/storage.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {
    public invoices$: any[] = [];
    public displayedColumns = ['id', 'taskName', 'amount', 'hours', 'completedOn'];
    public totalAmtEarned: number = 0;
    public totalHoursSpent: number = 0;
    constructor(private readonly storageService: StorageService
    ) {

    }
    ngOnInit(): void {
        this.storageService.storeData.getInvoices.subscribe((tasks) => {
            this.invoices$ = tasks;
            if (tasks.length) {
                this.totalAmtEarned = tasks.reduce(function (prev, current) { return prev + Number(current.amount); }, 0);
                this.totalHoursSpent = tasks.reduce(function (prev, current) { return prev + Number(current.hours); }, 0);
            }
        });
    }

    downloadPDF() {
        const doc = new jsPDF();
        autoTable(doc,{ html: '#my-table' })
        doc.save('table.pdf')
    }



}