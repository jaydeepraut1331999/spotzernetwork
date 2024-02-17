import { Component, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-history',
    templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit, OnDestroy {
    private completedTasksClone: any[] = [];
    private subscription: Subscription = new Subscription();
    public completedTasks$: any[] = [];
    public displayedColumns: string[] = ['id', 'taskName', 'category', 'amount', 'discription', 'status', 'completedOn'];

    public dateRange = new FormGroup({
        fromDate: new FormControl('', Validators.required),
        toDate: new FormControl('', Validators.required)
    });

    constructor(private readonly storageService: StorageService
    ) { }
    public ngOnInit(): void {
        this.subscription.add(this.storageService.storeData.getCompletedTasks.subscribe((tasks) => {
            this.completedTasks$ = tasks;
            this.completedTasksClone = tasks;
        }));
    }
    public onFormSubmit(): void {
        if (this.dateRange.controls.fromDate.value && this.dateRange.controls.toDate.value) {
            let fromDate = this.dateRange.controls.fromDate.value ?? new Date();
            let toDate = this.dateRange.controls.toDate.value ?? new Date();
            if (fromDate && toDate) {
                this.completedTasks$ = this.completedTasksClone.filter((x) => new Date(fromDate) < new Date(x.completedOn) && new Date(toDate) > new Date(x.completedOn))
            }
        }
    }

    public resetData(): void {
        this.completedTasks$ = this.completedTasksClone;
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}