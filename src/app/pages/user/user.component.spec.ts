import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UsersComponent} from '../users/users.component';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserComponent} from './user.component';
import { Subject } from 'rxjs';

class FakeActivatedRoute {
  private subject = new Subject();

  setParam( param ) {
    this.subject.next( param );
  }

  get params() {
    return this.subject.asObservable();
  }

}

describe( '[COMPONENT] user component', () => {

  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let activatedRoute: any;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
      providers: [
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should receive de userID param', () => {
    activatedRoute.setParam( { id: '123' } );
    expect( component.userId ).toBe('123');
  });

});
