import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './student/list/list.component';
import { StudentModule } from './student/student.module';
import { CurrentOptionComponent } from './current-option/current-option.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },  
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'student/list', component: ListComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login', pathMatch: 'full', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [    
    RouterModule.forRoot(routes)
  ],
  exports: [
    StudentModule,
    RouterModule, StudentModule
  ]
})
export class AppRoutingModule { }

