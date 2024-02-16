import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getTaskAvailable(): Observable<any[]> {
    return of([
      { id: 1011, taskName: 'React Developer fr Web Application ', amount: 100, category: 'React', discription: `I'm in need of a React expert who specializes...`, status: 'Open', completedOn: '', hours: 0 },
      { id: 2011, taskName: 'NGO Web Application Development ', amount: 120, category: 'Angular', discription: `I'm in need of a Angular expert who specializes...`, status: 'Open', completedOn: '', hours: 0 },
      { id: 3011, taskName: 'Java Expert for User Data Management ', amount: 160, category: 'Java', discription: `I'm in need of a Java expert who specializes...`, status: 'Open', completedOn: '', hours: 0 },
      { id: 3011, taskName: 'Python Expert for User Data Management ', amount: 160, category: 'Python', discription: `I'm in need of a Python expert who specializes..`, status: 'Open', completedOn: '', hours: 0 },

    ]
    ).pipe(delay(2000))
  }

  getTaskInProgress(): Observable<any[]> {
    return of([
      { id: 1012, taskName: 'Help Required on UI development project ( React)', amount: 50, category: 'React', discription: ` React expert who specializes...`, status: 'Pending', completedOn: '', hours: 0 },
      { id: 2012, taskName: 'eLearning Platform Development', amount: 30, category: 'Angular', discription: `Angular expert who specializes...`, status: 'Pending', completedOn: '', hours: 0 },
      { id: 3012, taskName: 'Android Java Developer for Push Notifications ', amount: 20, category: 'Java', discription: `Legacy Java Application conversion..`, status: 'Pending', completedOn: '', hours: 0 },
    ]
    ).pipe(delay(2000))
  }

  getTaskHistory(): Observable<any[]> {
    return of([
      { id: 1033, taskName: 'Cross-Platform Crypto Mining ', amount: 40, category: 'React', discription: ` React expert who specializes...`, status: 'Completed', completedOn: this.getPastDate(30), hours: 0 },
      { id: 2033, taskName: 'eLearning Platform Development', amount: 90, category: 'Angular', discription: `Angular expert who specializes...`, status: 'Completed', completedOn: this.getPastDate(80), hours: 0 },
      { id: 3033, taskName: 'Android Java Developer for Push Notifications ', amount: 130, category: 'Java', discription: `Legacy Java Application conversion..`, status: 'Completed', completedOn: this.getPastDate(190), hours: 0 },
    ]
    ).pipe(delay(2000))
  }

  getInvoices(): Observable<any[]> {
    return of([
      { id: 1044, taskName: 'Cross-Platform Crypto Mining', amount: 200, category: 'React', discription: ` React expert who specializes...`, status: 'Open', completedOn: this.getPastDate(90), hours: 30 },
      { id: 2044, taskName: 'Sr Angular Developer Project', amount: 420, category: 'Angular', discription: `Angular expert who specializes...`, status: 'Open', completedOn: this.getPastDate(30), hours: 60 },
      { id: 3044, taskName: 'Advanced Java Web App Development', amount: 760, category: 'Java', discription:`Legacy Java Application conversion..`, status: 'Open', completedOn: this.getPastDate(70), hours: 120 },
    ]
    ).pipe(delay(2000))
  }

  private getPastDate(days:number) {
    return new Date(new Date().setDate(new Date().getDate() - days));
  }
}
