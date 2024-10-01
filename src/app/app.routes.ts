import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { EmpComponent } from './emp/emp.component';

export const routes: Routes = [
    {path:'',component:AuthComponent},
    {path:'dashboard', component:DashBoardComponent},
    {path:'employee', component:EmpComponent},
    {path:'**', redirectTo:'auth'}
];
