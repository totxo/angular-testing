import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';
import {RouterLinkWithHref} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

describe('[COMPONENT] HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        MatToolbarModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show about link', () => {
    expect(fixture.nativeElement.querySelector('[data-test="about"]')).toBeTruthy();
  });

  it('should show users link', () => {
    expect(fixture.nativeElement.querySelector('[data-test="users"]')).toBeTruthy();
  });
});
