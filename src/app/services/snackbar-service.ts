import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, type?: string) {
    this._snackBar.open(message, '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: type === 'error' ? 'snackbar-error-style' : 'snackbar-success-style'
    });
}

}
