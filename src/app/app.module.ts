import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor} from './shared/security/httpInterceptor';

import {
  MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, 
  MatCheckboxModule, MatTableModule, MatToolbarModule, MAT_DIALOG_DATA, MatDialogRef
} from '@angular/material';
import { ToastModule } from 'ng2-toastr';
import { BlockUIModule } from 'ng-block-ui';
import { AppMaterialModule } from './shared/components/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './login/login.component';
import { CurrentOptionComponent } from './current-option/current-option.component';
import { StudentService} from './services/student.service';
import { Globals} from './shared/models/globals';
import { MessageAlertHandleService} from './services/message-alert.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthGuard } from './services/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    CurrentOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    BlockUIModule.forRoot(
      {
        message: 'Please wait...'
      }
    ),

    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatDatepickerModule
  ],
  providers: [
    AuthService, AuthGuard, StudentService, MessageAlertHandleService, Globals,
     { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true 
    } ,
    { provide: MatDialogRef, useValue: {} }, 
    { provide: MAT_DIALOG_DATA, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
