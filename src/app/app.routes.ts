import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { AboutComponent } from './pages/about/about.component';

export const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: UsersComponent }
];

// @ts-ignore
export const APP_ROUTES = RouterModule.forRoot(appRoutes);
