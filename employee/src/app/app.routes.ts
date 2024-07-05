import { createComponent } from '@angular/core';
import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';


export const routes: Routes = [{
        path:'', redirectTo:'list',pathMatch:'full'
},
    {
        path:'list',
        component:ListComponent
    },
    {
        path:'user',
        component:UserComponent
    },
];



