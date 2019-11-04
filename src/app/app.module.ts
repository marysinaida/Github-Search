import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandigPageComponent } from './landig-page/landig-page.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HubComponent } from './hub/hub.component';
import { HubFormComponent } from './hub-form/hub-form.component';
import {UserService} from './user.service'
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    LandigPageComponent,
    AboutComponent,
    UserComponent,
    RepoComponent,
    NavbarComponent,
    HubComponent,
    HubFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
