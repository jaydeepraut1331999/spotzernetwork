import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { DisplayedColumns } from '../model/model';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-history',
    templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {
    public completedTasks$: any[] = [];
    private completedTasksClone: any[] = [];
    public displayedColumns = DisplayedColumns;

    public dateRange = new FormGroup({
        fromDate: new FormControl('', Validators.required),
        toDate: new FormControl('', Validators.required)
    });

    constructor(private readonly storageService: StorageService
    ) { }
    ngOnInit(): void {
        this.storageService.storeData.getCompletedTasks.subscribe((tasks) => {
            this.completedTasks$ = tasks;
            this.completedTasksClone = tasks;
        });
    }
    onFormSubmit() {
        if (this.dateRange.controls.fromDate.value && this.dateRange.controls.toDate.value) {
            let fromDate = this.dateRange.controls.fromDate.value ?? new Date();
            let toDate = this.dateRange.controls.toDate.value ?? new Date();
            if (fromDate && toDate) {
                this.completedTasks$ = this.completedTasksClone.filter((x) => new Date(fromDate) < new Date(x.completedOn) && new Date(toDate) > new Date(x.completedOn))
            }
        }


    }

    resetData() {
        this.completedTasks$ = this.completedTasksClone;
    }

}