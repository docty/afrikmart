import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})


export class RegisterComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    password: null
  };
  constructor(private authService: AuthService, private token: TokenService, private router: Router) { }
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
    this.router.navigateByUrl('/dashboard');
  }

  ngOnInit(): void {
  }

}
