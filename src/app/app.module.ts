import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersComponent } from './pages/users/users.component';
import {APP_ROUTES} from './app.routes';
import { UserComponent } from './pages/user/user.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  imports: [
    APP_ROUTES,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatToolbarModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserComponent,
    AboutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
