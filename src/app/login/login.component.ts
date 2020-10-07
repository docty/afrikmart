import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';
import { AuthstatusService } from '../authstatus.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  constructor(private authService: AuthService, private token: TokenService,
              private router: Router, private authStatus: AuthstatusService) { }
  error = null;
  onSubmit(){
    return this.authService.register(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error){
    this.error = error.error.error;
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.authStatus.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }
  ngOnInit(): void {
  }

}
