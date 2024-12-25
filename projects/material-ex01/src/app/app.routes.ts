import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent        
      },
    {
        path:'about',
        component: AboutComponent
      },
    {
        path:'register',
        component: RegisterComponent
      },  
    {
        path:'login',
        component: LoginComponent
      },    
    {
        path: '**',
        redirectTo: '/'
      }  
];