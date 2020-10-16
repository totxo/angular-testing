import { appRoutes } from './app.routes';
import { UsersComponent } from './pages/users/users.component';
import {UserComponent} from './pages/user/user.component';
import {AboutComponent} from './pages/about/about.component';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe( '[ROUTES] app routes', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UsersComponent,
        UserComponent,
        AboutComponent
      ],
    }).compileComponents();
  });

  it( 'should exist "users" route to UsersComponent', () => {
    const expectedRoute = { path: 'users', component: UsersComponent };
    expect(appRoutes).toContain(expectedRoute);
  });

  it( 'should exist "users/:id" route to UserComponent', () => {
    const expectedRoute = { path: 'users/:id', component: UserComponent };
    expect(appRoutes).toContain(expectedRoute);
  });

  it( 'should exist "about" route to AboutComponent', () => {
    const expectedRoute = { path: 'about', component: AboutComponent };
    expect(appRoutes).toContain(expectedRoute);
  });




});
