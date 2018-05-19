import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, Validators } from '@angular/forms';
import { User } from './user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  usr: User;

  usrname = new FormControl('', [Validators.required]);
  pw = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logIn(): void {
    const self = this;
    this.usr = {
      name: this.usrname.value,
      password: this.pw.value
    };
    self.authService.logIn(this.usr).subscribe(function (res) {
      if (res.msg === 'Log In Is Successful!') {
        self.authService.setToken(res.token);
        // TODO: self.authService.redirectToHomePage();
      }
    });
  }

}
