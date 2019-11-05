import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { HubComponent } from './hub/hub.component';

import {UserService} from './user.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { TimePipe } from './time.pipe';
// import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    HubComponent,
    FooterComponent,
    TimePipe,
    // HighlightDirective,
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
