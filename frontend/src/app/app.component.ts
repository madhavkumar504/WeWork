import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  public loggedIn?: boolean;

  constructor(private Auth: AuthService,
    private router: Router,
    private Token: TokenService) {
}

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value=> this.loggedIn = value);
  }
}
