import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {LoginService} from "../login/login.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitted = false;
  constructor(public loginService: LoginService, private formBuilder: FormBuilder,
              private router: Router,
              public toastr: ToastrService) {
    this.registerForm = this.formBuilder.group({
      firstName: ['',  Validators.required],
      lastName: ['',  Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      isAdmin: new FormControl(false),
    });
  }

  ngOnInit() {
  }

  get formControls() {
    return this.registerForm.controls;
  }

  register() {
    console.log(this.registerForm.value);
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loginService.register(this.registerForm.value).subscribe((res) => {
      if (res && res.error) {
        this.toastr.error('incorrect username or password');
      } else {
        this.router.navigate(['/login']);
      }
    }, err => {
      console.log('err', err);
    });
  }

  loginPage() {
    this.router.navigate(['/login']);
  }
}
