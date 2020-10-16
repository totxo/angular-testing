import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { UsersService } from '../../services/users.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

class FakeRouter {
  // tslint:disable-next-line:typedef
  navigate(params) {}
}

describe('[COMPONENT] UsersComponent', () => {

  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let usersService: any;
  let usersDB;

  beforeEach(async(() => {

    const usersServiceSpy = jasmine.createSpyObj('UsersService', ['getUsers']);

    TestBed.configureTestingModule({
      declarations: [
        UsersComponent
      ],
      providers: [
        { provide: UsersService, useValue: usersServiceSpy },
        { provide: Router, useClass: FakeRouter },
      ]
    })
    .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        usersService = TestBed.inject(UsersService);
      });
  }));

  beforeEach(() => {
    usersDB = [
          {
            id: '0a52588b-2cee-46b3-b0a3-0d065552fca8',
            name: 'Billie',
            lastname: 'Kozey'
          },
          {
            id: '9111c04e-2b4d-4349-88bc-8298d0fc64e7',
            name: 'Jacklyn',
            lastname: 'Jenkins'
          }
        ];
    usersService.getUsers.and.returnValue(of(usersDB));
    fixture.detectChanges();
  });

  it('should show users list', () => {
    expect(fixture.nativeElement.querySelectorAll('[data-test="user"]').length).toBe(2);
  });

  it('should show user full name', () => {
    const user = fixture.nativeElement.querySelectorAll('[data-test="user"]')['0'];
    expect(user.querySelector('[data-test="name"]').innerText).toEqual('Billie');
    expect(user.querySelector('[data-test="lastName"]').innerText).toEqual('Kozey');
  });

  // Integration test
  it('should redirect to user/id', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn( router, 'navigate' );
    component.goToUser('123');
    expect(spy).toHaveBeenCalledWith(['users', '123']);
  });
});
