import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public bearerToken: any;
  submitMessage: string;
  username = new FormControl();
  password = new FormControl();

  constructor(private _authService: AuthenticationService, public routerService: RouterService) { }

  ngOnInit() {
  }

  /*   username: any;
     password: any;
    userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
    }); */

  loginSubmit() {
    /*  console.log('Userane :'+this.userForm.get('username').value);
     console.log('Pwd :'+this.userForm.get('password').value);
        this.username = this.userForm.get('username').value;
        this.password = this.userForm.get('password').value; */
    // console.log('Userane :'+this.username.value);
    // console.log('Pwd :'+this.password.value);

    this._authService.authenticateUser({ 'username': this.username.value, 'password': this.password.value }).subscribe(
      res => {
        console.log(res['token']);
        this.bearerToken = res['token'];
        this._authService.setBearerToken(this.bearerToken);
        this.routerService.routeToDashboard();
      },
      error => {
        if (error.status === 404) {
          this.submitMessage = `Http failure response for ${error.url}: 404 Not Found`;
        } else {
          this.submitMessage = error.error.message;
        }
      });
  }
}
