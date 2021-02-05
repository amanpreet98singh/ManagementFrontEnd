import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  doLogin() {
    if(this.loginForm.get('username').value==="admin", this.loginForm.get('password').value==="password")
      this.router.navigateByUrl('/home');
    console.log(this.loginForm.get('username').value)
    console.log(this.loginForm.get('password').value)
  }

}
