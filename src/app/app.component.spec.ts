import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import {RouterLinkWithHref, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe( '[COMPONENT] app component', () => {

  beforeEach( () => {
   TestBed.configureTestingModule({
     declarations: [
       AppComponent,
       HeaderComponent
     ],
     imports: [
       RouterTestingModule.withRoutes([])
     ],
     schemas: [
       NO_ERRORS_SCHEMA
     ]
   }).compileComponents();
  });

  it('should exist router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const el = fixture.debugElement.query(By.directive((RouterOutlet)));
    expect(el).not.toBeNull();
  });

  it('should link to page about', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const els = fixture.debugElement.queryAll( By.directive(RouterLinkWithHref));
    const routersLink = els.map( el => el.attributes.routerLink);
    expect(routersLink).toContain('/about');
  });
});
