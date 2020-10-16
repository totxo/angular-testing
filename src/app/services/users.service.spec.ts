import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { UserModel } from '../models/user.model';

describe('[SERVICE] UsersService', () => {

  let httpTestingController: HttpTestingController;
  let usersService: UsersService;
  const baseUrl = 'http://localhost:3000';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UsersService
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    usersService = TestBed.inject(UsersService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('[GET] getUsers()', () => {

    let expectedUsers: UserModel[];

    beforeEach(() => {

      expectedUsers = [
        {
          id: '0a52588b-2cee-46b3-b0a3-0d065552fca8',
          name: 'Billie',
          lastname: 'Kozey'
        },
        {
          id: '9111c04e-2b4d-4349-88bc-8298d0fc64e7',
          name: 'Jacklyn',
          lastname: 'Jenkins'
        },
      ] as UserModel[];
    });

    it('should return expected users by calling once', () => {
      usersService.getUsers().subscribe(
        users => {
          expect(users).toEqual(expectedUsers, 'should return expected users');

          const user = users.find(userFound => userFound.id === '0a52588b-2cee-46b3-b0a3-0d065552fca8');
          expect(user.name).toBe('Billie');
        },
        fail
      );

      const req = httpTestingController.expectOne(`${baseUrl}/users`);
      expect(req.request.method).toEqual('GET');
      req.flush(expectedUsers);
    });

    it('should be OK returning no users', () => {
      usersService.getUsers().subscribe(
        users => expect(users.length).toEqual(0, 'should have empty users array'),
        fail
      );

      const req = httpTestingController.expectOne(`${baseUrl}/users`);
      req.flush([]);
    });



  });
});
