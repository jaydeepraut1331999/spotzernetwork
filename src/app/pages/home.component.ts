import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  public availableTasks$ = new MatTableDataSource();
  public pendingTasks$ = new MatTableDataSource();
  public displayedColumns = ['id', 'taskName', 'category', 'amount', 'discription', 'action'];
  private subscription!: Subscription;
  constructor(private readonly storageService: StorageService
  ) { }
  ngOnInit(): void {
    this.storageService.storeData.getAvailableTasks.subscribe((tasks) => this.availableTasks$.data = tasks);
    this.storageService.storeData.getPendingTasks.subscribe((tasks) => this.pendingTasks$.data = tasks);

    this.availableTasks$.filterPredicate = (data: any, filter: string) => (data.category.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1);
  }

  assignTask(rowData: any): void {
    this.storageService.actionData.assignTask(rowData);
  }

  completeTask(rowData: any): void {
    this.storageService.actionData.completeTask(rowData);
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim().toLowerCase();
    this.availableTasks$.filter = filterValue;
  }
  applySearch(event$: Event): void {
    let filterValue = (event$.target as HTMLInputElement).value;
    filterValue = filterValue.trim().toLowerCase();
    this.pendingTasks$.filter = filterValue;
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}