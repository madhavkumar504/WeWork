import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/response-reset/response-reset.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { JarwisService } from './Services/jarwis.service';
import { TokenService } from './Services/token.service';
import { AuthService } from './Services/auth.service';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { WorkspaceItemComponent } from './components/workspace-item/workspace-item.component';
import { WorkspaceTaskcomponentComponent } from './components/workspace-taskcomponent/workspace-taskcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    SidenavbarComponent,
    WorkspaceItemComponent,
    WorkspaceTaskcomponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  providers: [JarwisService, TokenService, AuthService, AfterLoginService,
              BeforeLoginService,
              { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
  SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
