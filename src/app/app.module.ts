import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './services/data-service';
import { StoreModule } from '@ngrx/store';
import { uiReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { uiEffects } from './store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth-service';
import { SnackbarService } from './services/snackbar-service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatSnackBarModule,
    StoreDevtoolsModule.instrument({
      maxAge: 250, // Retains last 25 states
      logOnly: false
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ data: uiReducer }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([uiEffects])
  ],
  providers: [DataService, StorageService,AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }

