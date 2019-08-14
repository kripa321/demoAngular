import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder, public loginService: LoginService,
              private router: Router,
              public toastr: ToastrService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.login(this.loginForm.value).subscribe((res) => {
      if (res && res.error) {
        this.toastr.error('incorrect username or password');
      } else {
        localStorage.setItem('userData', JSON.stringify(res.result));
        this.router.navigate(['/home']);
      }
    }, err => {
      console.log('err', err);
    });
  }

  SingUp() {
    this.router.navigate(['/register']);
  }
}
