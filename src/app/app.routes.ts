import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AddexpenseComponent } from './Components/addexpense/addexpense.component';
import { UpdateexpenseComponent } from './Components/updateexpense/updateexpense.component';
import { LoginComponent } from './Components/login/login.component';
import { MainlayoutComponent } from './Components/mainlayout/mainlayout.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:"",component:LoginComponent},
     {path:"",
      component:MainlayoutComponent,
      canActivate: [authGuard],
      children:[
    {path:"home",component:HomeComponent},
    {path:"add",component:AddexpenseComponent},
    {path:"update",component:UpdateexpenseComponent}  
      ]
     }
];
